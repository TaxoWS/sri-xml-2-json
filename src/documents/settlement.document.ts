import { addCommonTransformations } from '../documentUtils';
import { DocumentTypeEnum } from '../enums';
import {
  billPropertyMap,
  removePropertyMap,
  settlementPropertyMap,
  transformTypeIdentification,
} from '../mapping';
import {
  mappingProducts,
  mappingInfoTax,
  mappingExtraInfoDocs,
  parseNumberInObject,
  removeUnwantedProperties,
  mapTaxInfo,
  transformTaxInfo,
} from '../utils';
import { IDocument } from './document.interface';

export class SettlementDocument implements IDocument {
  transform(xml: any): object {
    const { liquidacionCompra } = xml;

    // Transformaciones específicas del documento
    const specificTransformations = {
      taxInfo: {
        transform: transformTaxInfo,
        dependsOn: liquidacionCompra,
      },
      documentInfo: {
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

    // transformaciones comunes
    const transformations = addCommonTransformations(
      liquidacionCompra,
      specificTransformations
    );

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
      removePropertyMap.settlementInfo,
    ]);

    return newSettlement;
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
