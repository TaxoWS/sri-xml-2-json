import { DocumentTypeEnum } from "../enums";
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
} from "../mapping";
import {
  mappingExtraInfo,
  parseNumberInObject,
  removeUnwantedProperties,
} from "../utils";
import { IDocument } from "./document.interface";

export class BillDocument implements IDocument {
  public convertToJson(receipt: any): object {
    const { factura } = receipt;
    // define transformations
    const transformations = {
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
      // Add other transformations as needed
    };
    const newReceipt = { ...factura };
    Object.keys(transformations).forEach((key) => {
      const { transform, dependsOn } =
        transformations[key as keyof typeof transformations];
      newReceipt[billPropertyMap[key as keyof typeof billPropertyMap]] =
        transform(dependsOn);
    });

    // remove unwanted properties
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

  private transformDocumentInfo(bill: any): object {
    const { infoFactura } = bill;
    // transform numbers in the bill
    const parsedNumberOfBill = parseNumberInObject(infoFactura);
    // Transform buyer identification type
    const buyerIdType =
      transformTypeIdentification[infoFactura.tipoIdentificacionComprador];
    const paymentMethod = infoFactura.pagos.pago.formaPago;
    // Transform payment information
    const paymentInfo = {
      ...infoFactura.pagos.pago,
      [billPropertyMap.paymentMethodName]:
        transformPaymentMethod[paymentMethod],
    };
    // Transform tax information
    const taxInfo = infoFactura.totalConImpuestos.totalImpuesto.map(
      (item: any) => {
        return {
          ...item,
          [billPropertyMap.name]: transformTaxesName[item.codigo],
          [billPropertyMap.percentage]:
            transformTaxesPercentage[item.codigoPorcentaje],
        };
      }
    );
    return {
      [billPropertyMap.type]: DocumentTypeEnum.BILL,
      ...parsedNumberOfBill,
      [billPropertyMap.buyerIdType]: buyerIdType,
      [billPropertyMap.paymentInfo]: paymentInfo,
      [billPropertyMap.totalTaxInfo]: taxInfo,
    };
  }

  private transformProducts(bill: any): object[] {
    const { detalle } = bill.detalles;
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
  }

  private transformInfoTax(bill: any): object {
    const { ambiente, tipoEmision } = bill.infoTributaria;
    return {
      ...bill.infoTributaria,
      [commonPropertyMap.environment]: transformTypeEnvironment[ambiente],
      [commonPropertyMap.typeEmission]: transformTypeEmission[tipoEmision],
    };
  }
}
