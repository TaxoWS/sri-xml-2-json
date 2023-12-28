import { DocumentTypeEnum } from "../enums";
import {
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

    const newReceipt = {
      ...factura,
      infoDocumento: this.transformInfoDocumento(factura),
      productos: this.transformProducts(factura.detalles),
      infoAdicional: mappingExtraInfo(receipt),
      infoTributaria: this.transformInfoTax(factura.infoTributaria),
    };

    // remove unwanted properties
    removeUnwantedProperties(newReceipt, [
      "ds:Signature",
      "$",
      "infoFactura",
      "detalles",
    ]);
    removeUnwantedProperties(newReceipt.infoDocumento, [
      "pagos",
      "totalConImpuestos",
    ]);

    return newReceipt;
  }

  private transformInfoDocumento(factura: any): object {
    return {
      tipo: DocumentTypeEnum.BILL,
      ...parseNumberInObject(factura.infoFactura),
      tipoIdentificacionCompradorNombre:
        transformTypeIdentification[
          factura.infoFactura.tipoIdentificacionComprador
        ],
      pago: this.transformPayment(factura.infoFactura.pagos.pago),
      totalImpuestos: factura.infoFactura.totalConImpuestos.totalImpuesto.map(
        (item: any) => {
          return {
            ...item,
            nombre: transformTaxesName[item.codigo],
            procentaje: transformTaxesPercentage[item.codigoPorcentaje],
          };
        }
      ),
    };
  }
  private transformPayment(pago: any): object {
    return {
      ...pago,
      formaPagoNombre: transformPaymentMethod[pago.formaPago],
    };
  }

  private transformProducts(detalles: any): object[] {
    return detalles.detalle.map((item: any) => {
      return {
        ...item,
        ...parseNumberInObject(item),
        impuestos: this.transformTaxes(item.impuestos.impuesto),
      };
    });
  }
  private transformTaxes(impuesto: any): object {
    return {
      ...impuesto,
      nombre: transformTaxesName[impuesto.codigo],
      procentaje: transformTaxesPercentage[impuesto.codigoPorcentaje],
    };
  }

  private transformInfoTax(infoTributaria: any): object {
    return {
      ...infoTributaria,
      ambiente: transformTypeEnvironment[infoTributaria.ambiente],
      tipoEmision: transformTypeEmission[infoTributaria.tipoEmision],
    };
  }
}
