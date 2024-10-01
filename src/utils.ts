import {
  billPropertyMap,
  commonPropertyMap,
  transformTaxesName,
  transformTaxesPercentage,
  transformTypeEmission,
  transformTypeEnvironment,
} from './mapping';

const FORMAT_NUMERIC_EXPECT = /^(0\.\d+|[1-9]\d*(\.\d+)?)$/;

export const parseNumberInObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      parseNumberInObject(obj[key]);
    } else {
      if (
        typeof obj[key] === 'string' &&
        FORMAT_NUMERIC_EXPECT.test(obj[key])
      ) {
        obj[key] = parseFloat(obj[key]);
      }
    }
  });
  return obj;
};

export const mappingExtraInfo = (receipt: any) => {
  if (
    !receipt.factura.infoAdicional ||
    !receipt.factura.infoAdicional.campoAdicional
  ) {
    return undefined;
  }

  const campoAdicional = Array.isArray(
    receipt.factura.infoAdicional.campoAdicional
  )
    ? receipt.factura.infoAdicional.campoAdicional
    : [receipt.factura.infoAdicional.campoAdicional];
  const result = campoAdicional.map((item: any) => {
    const newItem = {
      nombre: item.$.nombre,
      valor: item._,
    };
    return parseNumberInObject(newItem);
  });
  return result;
};
export const mappingExtraInfoDocs = (receipt: any) => {
  if (!receipt.infoAdicional || !receipt.infoAdicional.campoAdicional) {
    return undefined;
  }

  const campoAdicional = Array.isArray(receipt.infoAdicional.campoAdicional)
    ? receipt.infoAdicional.campoAdicional
    : [receipt.infoAdicional.campoAdicional];
  const result = campoAdicional.map((item: any) => {
    const newItem = {
      nombre: item.$.nombre,
      valor: item._,
    };
    return parseNumberInObject(newItem);
  });
  return result;
};

export const removeUnwantedProperties = (object: any, properties: string[]) => {
  properties.forEach((property) => {
    delete object[property];
  });
};

export const mappingTaxes = (taxes: any) => {
  if (!taxes) {
    return undefined;
  }
  const taxItems = Array.isArray(taxes.impuesto)
    ? taxes.impuesto
    : [taxes.impuesto];
  const newTaxes = taxItems.map((item: any) => {
    const newItem = {
      ...parseNumberInObject(item),
    };
    return newItem;
  });
  return newTaxes;
};

export const mappingProducts = (details: any) => {
  const detalle = Array.isArray(details.detalle)
    ? details.detalle
    : [details.detalle];

  // map products

  return detalle.map((item: any) => {
    const { impuesto } = item.impuestos;
    // Parse numbers in the item
    const parsedItem = parseNumberInObject(item);
    // Transform tax information
    const taxInfo = {
      ...impuesto,
      [billPropertyMap.name]: transformTaxesName[impuesto.codigo],
      [billPropertyMap.percentage]:
        transformTaxesPercentage[impuesto.codigoPorcentaje],
    };

    return {
      ...item,
      ...parsedItem,
      [billPropertyMap.taxes]: taxInfo,
    };
  });
};

export const mapTaxInfo = (totalWithTaxes: any) => {
  const isMultipleTax = Array.isArray(totalWithTaxes.totalImpuesto);
  const taxInfo = isMultipleTax
    ? totalWithTaxes.totalImpuesto.map((item: any) => {
        return {
          ...item,
          [billPropertyMap.name]: transformTaxesName[item.codigo],
          [billPropertyMap.percentage]:
            transformTaxesPercentage[item.codigoPorcentaje],
        };
      })
    : [
        {
          ...totalWithTaxes.totalImpuesto,
          [billPropertyMap.name]:
            transformTaxesName[totalWithTaxes.totalImpuesto.codigo],
          [billPropertyMap.percentage]:
            transformTaxesPercentage[
              totalWithTaxes.totalImpuesto.codigoPorcentaje
            ],
        },
      ];

  return taxInfo;
};

export const mappingInfoTax = (infoTributaria: any) => {
  const { ambiente, tipoEmision } = infoTributaria;

  return {
    ...infoTributaria,
    [commonPropertyMap.environment]: transformTypeEnvironment[ambiente],
    [commonPropertyMap.typeEmission]: transformTypeEmission[tipoEmision],
  };
};

export const transformTaxInfo = (receipt: any): object | undefined => {
  if (!receipt?.infoTributaria) {
    return undefined;
  }

  const {
    ambiente,
    tipoEmision,
    ruc,
    claveAcceso,
    codDoc,
    razonSocial,
    nombreComercial,
    estab,
    ptoEmi,
    secuencial,
    dirMatriz,
  } = receipt.infoTributaria;

  return {
    ambiente,
    tipoEmision,
    ruc,
    claveAcceso,
    codDoc,
    razonSocial,
    nombreComercial,
    estab,
    ptoEmi,
    secuencial,
    dirMatriz,
  };
};

interface Receipt {
  $: {
    version: string;
  };
}

export const mapVersionInfo = (
  receipt: Receipt
): { documentVersion: string } | '1.0' => {
  const { version: documentVersion } = receipt.$;

  return documentVersion ? { documentVersion } : '1.0';
};
