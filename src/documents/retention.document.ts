import { addCommonTransformations } from '../documentUtils';
import { DocumentTypeEnum } from '../enums';
import {
  removePropertyMap,
  retentionPropertyMap,
  transformTypeIdentification,
} from '../mapping';
import {
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

    // Transformaciones específicas del documento
    const specificTransformations = {
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

    // Añadir las transformaciones comunes usando el método 'addCommonTransformations'
    const transformations = addCommonTransformations(
      comprobanteRetencion,
      specificTransformations
    );

    const newReceipt = { ...comprobanteRetencion };
    Object.keys(transformations).forEach((key) => {
      const { transform, dependsOn } =
        transformations[key as keyof typeof transformations];
      newReceipt[
        retentionPropertyMap[key as keyof typeof retentionPropertyMap]
      ] = transform(dependsOn);
    });

    // Remover propiedades no deseadas
    removeUnwantedProperties(newReceipt, [
      removePropertyMap.signature,
      removePropertyMap.dollarSign,
      removePropertyMap.retentionInfo,
    ]);

    return newReceipt;
  }

  // Método para transformar la información del documento
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

  // Método para transformar documentos de soporte
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
