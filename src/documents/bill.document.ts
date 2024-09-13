import { addCommonTransformations } from '../documentUtils';
import { DocumentTypeEnum } from '../enums';
import {
  billPropertyMap,
  commonPropertyMap,
  removePropertyMap,
  transformPaymentMethod,
  transformTaxesName,
  transformTaxesPercentage,
  transformTypeEmission,
  transformTypeEnvironment,
  transformTypeIdentification,
} from '../mapping';
import {
  mappingExtraInfo,
  parseNumberInObject,
  removeUnwantedProperties,
} from '../utils';

import { IDocument } from './document.interface';

export class BillDocument implements IDocument {
  public transform(receipt: any): object {
    const { factura } = receipt;

    // Definir transformaciones específicas del documento
    const specificTransformations = {
      documentInfo: {
        transform: this.transformDocumentInfo,
        dependsOn: factura,
      },
      products: {
        transform: this.transformProducts,
        dependsOn: factura,
      },
      additionalInfo: { transform: mappingExtraInfo, dependsOn: receipt },
      taxInfo: {
        transform: this.transformInfoTax,
        dependsOn: factura,
      },
      // Puedes añadir más transformaciones si es necesario
    };

    // Añadir las transformaciones comunes usando el método 'addCommonTransformations'
    const transformations = addCommonTransformations(
      factura,
      specificTransformations
    );

    const newReceipt = { ...factura };
    Object.keys(transformations).forEach((key) => {
      const { transform, dependsOn } =
        transformations[key as keyof typeof transformations];
      newReceipt[billPropertyMap[key as keyof typeof billPropertyMap]] =
        transform(dependsOn);
    });

    // Remover propiedades no deseadas
    removeUnwantedProperties(newReceipt, [
      removePropertyMap.signature,
      removePropertyMap.dollarSign,
      removePropertyMap.billInfo,
      removePropertyMap.details,
    ]);
    removeUnwantedProperties(newReceipt[billPropertyMap.documentInfo], [
      removePropertyMap.payments,
      removePropertyMap.totalWithTaxes,
    ]);
    return newReceipt;
  }

  // Método para transformar la información del documento
  private transformDocumentInfo(bill: any): object {
    const { infoFactura } = bill;
    // Transformar los números en el documento
    const parsedNumberOfBill = parseNumberInObject(infoFactura);
    // Transformar tipo de identificación del comprador
    const buyerIdType =
      transformTypeIdentification[infoFactura.tipoIdentificacionComprador];
    const paymentMethod = infoFactura.pagos?.pago?.formaPago;
    // Transformar información de pago
    const paymentInfo = {
      ...infoFactura.pagos?.pago,
      [billPropertyMap.paymentMethodName]:
        transformPaymentMethod[paymentMethod],
    };
    // Transformar información de impuestos
    const isMultipleTax = Array.isArray(
      infoFactura.totalConImpuestos.totalImpuesto
    );
    const taxInfo = isMultipleTax
      ? infoFactura.totalConImpuestos.totalImpuesto.map((item: any) => {
          return {
            ...item,
            [billPropertyMap.name]: transformTaxesName[item.codigo],
            [billPropertyMap.percentage]:
              transformTaxesPercentage[item.codigoPorcentaje],
          };
        })
      : [
          {
            ...infoFactura.totalConImpuestos.totalImpuesto,
            [billPropertyMap.name]:
              transformTaxesName[
                infoFactura.totalConImpuestos.totalImpuesto.codigo
              ],
            [billPropertyMap.percentage]:
              transformTaxesPercentage[
                infoFactura.totalConImpuestos.totalImpuesto.codigoPorcentaje
              ],
          },
        ];
    return {
      [billPropertyMap.type]: DocumentTypeEnum.BILL,
      ...parsedNumberOfBill,
      [billPropertyMap.buyerIdType]: buyerIdType,
      [billPropertyMap.paymentInfo]: paymentInfo,
      [billPropertyMap.totalTaxInfo]: taxInfo,
    };
  }

  // Método para transformar los productos
  private transformProducts(bill: any): object[] {
    const detalle = Array.isArray(bill.detalles.detalle)
      ? bill.detalles.detalle
      : [bill.detalles.detalle];

    // Mapear productos
    return detalle.map((item: any) => {
      const { impuesto } = item.impuestos;
      // Parsear números en el producto
      const parsedItem = parseNumberInObject(item);
      // Transformar información de impuestos
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
  }

  // Método para transformar la información tributaria
  private transformInfoTax(bill: any): object {
    const { ambiente, tipoEmision } = bill.infoTributaria;
    return {
      ...bill.infoTributaria,
      [commonPropertyMap.environment]: transformTypeEnvironment[ambiente],
      [commonPropertyMap.typeEmission]: transformTypeEmission[tipoEmision],
    };
  }
}
