import { addCommonTransformations } from '../documentUtils';
import { DocumentTypeEnum } from '../enums';
import {
  billPropertyMap,
  creditNotePropertyMap,
  removePropertyMap,
  transformTypeIdentification,
} from '../mapping';
import {
  mappingProducts,
  mappingInfoTax,
  mappingExtraInfoDocs,
  parseNumberInObject,
  removeUnwantedProperties,
  mapTaxInfo,
} from '../utils';
import { IDocument } from './document.interface';

export class CreditNoteDocument implements IDocument {
  transform(xml: any): object {
    const { notaCredito } = xml;

    // Transformaciones específicas del documento
    const specificTransformations = {
      documentInfo: {
        transform: this.transformDocumentInfo,
        dependsOn: notaCredito,
      },
      products: {
        transform: mappingProducts,
        dependsOn: notaCredito.detalles,
      },
      taxInfo: {
        transform: mappingInfoTax,
        dependsOn: notaCredito.infoTributaria,
      },
      additionalInfo: {
        transform: mappingExtraInfoDocs,
        dependsOn: notaCredito,
      },
    };

    // Añadir las transformaciones comunes
    const transformations = addCommonTransformations(
      notaCredito,
      specificTransformations
    );

    const newReceipt = { ...notaCredito };

    Object.keys(transformations).forEach((key) => {
      const { transform, dependsOn } =
        transformations[key as keyof typeof transformations];
      newReceipt[
        creditNotePropertyMap[key as keyof typeof creditNotePropertyMap]
      ] = transform(dependsOn);
    });

    removeUnwantedProperties(newReceipt, [
      removePropertyMap.signature,
      removePropertyMap.dollarSign,
      removePropertyMap.creditNoteInfo,
      removePropertyMap.details,
    ]);

    removeUnwantedProperties(newReceipt[creditNotePropertyMap.documentInfo], [
      removePropertyMap.totalWithTaxes,
    ]);

    return newReceipt;
  }

  private transformDocumentInfo(creditNote: any): object {
    const { infoNotaCredito } = creditNote;
    const parsedNumberInInfoCreditNote = parseNumberInObject(infoNotaCredito);
    const buyerType =
      transformTypeIdentification[infoNotaCredito.tipoIdentificacionComprador];

    const taxInfo = mapTaxInfo(infoNotaCredito.totalConImpuestos);
    return {
      ...parsedNumberInInfoCreditNote,
      [billPropertyMap.type]: DocumentTypeEnum.CREDIT_NOTE,
      [billPropertyMap.buyerIdType]: buyerType,
      [billPropertyMap.totalTaxInfo]: taxInfo,
    };
  }
}
