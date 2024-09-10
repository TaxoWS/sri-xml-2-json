import { DocumentTypeEnum } from '../enums';
import {
  removePropertyMap,
  retentionPropertyMap,
  transformTypeIdentification,
} from '../mapping';
import {
  mappingExtraInfo,
  mappingExtraInfoDocs,
  mappingTaxes,
  parseNumberInObject,
  removeUnwantedProperties,
  transformTaxInfo,
} from '../utils';
import { IDocument } from './document.interface';

export class RetentionDocument implements IDocument {
  transform(xml: any): object {
    const { comprobanteRetencion } = xml;

    const transformations = {
      taxInfo: {
        transform: transformTaxInfo,
        dependsOn: comprobanteRetencion,
      },
      documentInfo: {
        transform: this.transformDocumentInfo,
        dependsOn: comprobanteRetencion,
      },
      taxes: {
        transform: mappingTaxes,
        dependsOn: comprobanteRetencion.impuestos,
      },
      additionalInfo: {
        transform: mappingExtraInfoDocs,
        dependsOn: comprobanteRetencion,
      },
      supportingDocument: {
        transform: this.transformSupportingDocument,
        dependsOn: comprobanteRetencion,
      },
    };
    const newReceipt = { ...comprobanteRetencion };
    Object.keys(transformations).forEach((key) => {
      const { transform, dependsOn } =
        transformations[key as keyof typeof transformations];
      newReceipt[
        retentionPropertyMap[key as keyof typeof retentionPropertyMap]
      ] = transform(dependsOn);
    });

    removeUnwantedProperties(newReceipt, [
      removePropertyMap.signature,
      removePropertyMap.dollarSign,
      removePropertyMap.retentionInfo,
    ]);

    return newReceipt;
  }

  private transformDocumentInfo(retention: any): object {
    const { infoCompRetencion } = retention;
    const buyerType =
      transformTypeIdentification[
        infoCompRetencion.tipoIdentificacionSujetoRetenido
      ];
    return {
      ...infoCompRetencion,
      [retentionPropertyMap.typeIdentificationSubjectRetained]: buyerType,
      [retentionPropertyMap.type]: DocumentTypeEnum.RETENTION,
    };
  }
  private transformSupportingDocument(retention: any) {
    if (!retention.docsSustento) return undefined;

    const docSustentoArray = Array.isArray(retention.docsSustento.docSustento)
      ? retention.docsSustento.docSustento
      : [retention.docsSustento.docSustento];

    return docSustentoArray.map((docSustento: any) => {
      const { retenciones, pagos, impuestosDocSustento } = docSustento;
      const retencions = Array.isArray(retenciones.retencion)
        ? retenciones.retencion
        : [retenciones.retencion];

      const payments = Array.isArray(pagos.pago) ? pagos.pago : [pagos.pago];

      const taxesDocSupport = Array.isArray(
        impuestosDocSustento.impuestoDocSustento
      )
        ? impuestosDocSustento.impuestoDocSustento
        : [impuestosDocSustento.impuestoDocSustento];
      return parseNumberInObject({
        ...docSustento,
        [retentionPropertyMap.retentions]: retencions,
        [retentionPropertyMap.payments]: payments,
        [retentionPropertyMap.taxesDocSupported]: taxesDocSupport,
      });
    });
  }
}
