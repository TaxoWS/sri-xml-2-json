import { DocumentTypeEnum } from "../enums";
import {
  removePropertyMap,
  retentionPropertyMap,
  transformTypeIdentification,
} from "../mapping";
import {
  mappingTaxes,
  parseNumberInObject,
  removeUnwantedProperties,
} from "../utils";
import { IDocument } from "./document.interface";

export class RetentionDocument implements IDocument {
  transform(xml: any): object {
    const { comprobanteRetencion } = xml;

    const transformations = {
      documentInfo: {
        transform: this.transformDocumentInfo,
        dependsOn: comprobanteRetencion,
      },
      taxes: {
        transform: mappingTaxes,
        dependsOn: comprobanteRetencion.impuestos,
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
    const parsedNumberInInfoRetention = parseNumberInObject(infoCompRetencion);
    return {
      ...parsedNumberInInfoRetention,
      [retentionPropertyMap.typeIdentificationSubjectRetained]: buyerType,
      [retentionPropertyMap.type]: DocumentTypeEnum.RETENTION,
    };
  }
}
