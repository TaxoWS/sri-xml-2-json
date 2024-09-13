import { DocumentTypeEnum } from '../enums';
import {
  billPropertyMap,
  removePropertyMap,
  settlementPropertyMap,
  transformTypeIdentification,
} from '../mapping';
import {
  mappingExtraInfoDocs,
  mappingInfoTax,
  mappingProducts,
  mapTaxInfo,
  parseNumberInObject,
  removeUnwantedProperties,
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
        transform: mappingInfoTax,
        dependsOn: liquidacionCompra.infoTributaria,
      },
      settlementInfo: {
        transform: this.transformSettlementInfo,
        dependsOn: liquidacionCompra,
      },
      products: {
        transform: mappingProducts,
        dependsOn: liquidacionCompra.detalles,
      },
      details: {
        transform: mappingProducts,
        dependsOn: liquidacionCompra.detalles,
      },
      additionalInfo: {
        transform: mappingExtraInfoDocs,
        dependsOn: liquidacionCompra,
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

    const settlementParser = parseNumberInObject(newSettlement);

    return settlementParser;
  }

  private transformSettlementInfo(settlement: any) {
    const { infoLiquidacionCompra } = settlement;

    const parsedNumberInfoSettlement = parseNumberInObject(
      infoLiquidacionCompra
    );
    const buyerType =
      transformTypeIdentification[
        infoLiquidacionCompra.tipoIdentificacionProveedor
      ];

    const taxInfo = mapTaxInfo(infoLiquidacionCompra.totalConImpuestos);

    return {
      ...parsedNumberInfoSettlement,
      [billPropertyMap.type]: DocumentTypeEnum.SETTLEMENT,
      [billPropertyMap.buyerIdType]: buyerType,
      [billPropertyMap.totalTaxInfo]: taxInfo,
    };
  }
}
