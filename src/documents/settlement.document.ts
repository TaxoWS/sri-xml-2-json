import { DocumentTypeEnum } from '../enums';
import {
  removePropertyMap,
  settlementPropertyMap,
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

export class SettlementDocument implements IDocument {
  transform(xml: any): object {
    const { liquidacionCompra } = xml;

    if (!liquidacionCompra || !liquidacionCompra.infoTributaria) {
      throw new Error('Missing infoTributaria in settlement document');
    }

    const transformations = {
      taxInfo: {
        transform: transformTaxInfo,
        dependsOn: liquidacionCompra[settlementPropertyMap.taxInfo],
      },
      documentInfo: {
        transform: this.transformDocumentInfo,
        dependsOn: liquidacionCompra,
      },
      taxes: {
        transform: mappingTaxes,
        dependsOn: liquidacionCompra[settlementPropertyMap.totalWithTaxes],
      },
      additionalInfo: {
        transform: mappingExtraInfoDocs,
        dependsOn: liquidacionCompra[settlementPropertyMap.additionalInfo],
      },
      details: {
        transform: this.transformDetails,
        dependsOn: liquidacionCompra[settlementPropertyMap.details],
      },
    };

    const newSettlement = { ...liquidacionCompra };

    Object.keys(transformations).forEach((key) => {
      const { transform, dependsOn } =
        transformations[key as keyof typeof transformations];
      if (dependsOn) {
        newSettlement[
          settlementPropertyMap[key as keyof typeof settlementPropertyMap]
        ] = transform(dependsOn);
      }
    });

    removeUnwantedProperties(newSettlement, [
      removePropertyMap.signature,
      removePropertyMap.dollarSign,
    ]);

    return newSettlement;
  }

  private transformDocumentInfo(settlement: any): object {
    const { infoLiquidacionCompra } = settlement;

    if (!infoLiquidacionCompra) {
      throw new Error('Missing infoLiquidacionCompra in settlement document');
    }

    const providerType =
      transformTypeIdentification[
        infoLiquidacionCompra[settlementPropertyMap.typeIdentificationProvider]
      ];

    return {
      ...infoLiquidacionCompra,
      [settlementPropertyMap.typeIdentificationProvider]: providerType,
      [settlementPropertyMap.type]: DocumentTypeEnum.SETTLEMENT,
    };
  }

  private transformDetails(settlement: any) {
    if (!settlement) return undefined;

    const detailsArray = Array.isArray(settlement) ? settlement : [settlement];

    return detailsArray.map((detalle: any) => {
      const { impuestos } = detalle;

      const taxes =
        impuestos && impuestos.impuesto
          ? Array.isArray(impuestos.impuesto)
            ? impuestos.impuesto
            : [impuestos.impuesto]
          : [];

      return parseNumberInObject({
        ...detalle,
        [settlementPropertyMap.supportingDocumentTaxes]: taxes,
      });
    });
  }
}
