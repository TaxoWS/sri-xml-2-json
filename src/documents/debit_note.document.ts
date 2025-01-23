import { DocumentTypeEnum } from "../enums";
import { billPropertyMap, commonPropertyMap, removePropertyMap, transformTaxesName, transformTypeEmission, transformTypeEnvironment, transformTypeIdentification } from "../mapping";
import { mappingExtraInfoDocs, mapVersionInfo, parseNumberInObject, removeUnusedProperties } from "../utils";
import { IDocument } from "./document.interface";

export class DebitNoteDocument implements IDocument {
    transform(xml: any): object {
        const { notaDebito } = xml;

        
        


        const additionalInfo = mappingExtraInfoDocs(notaDebito);

        // convert taxes in array
        const taxes = Array.isArray(notaDebito.infoNotaDebito.impuestos)? notaDebito.infoNotaDebito.impuestos : [notaDebito.infoNotaDebito.impuestos.impuesto];

        // convert payments in array
        const payments = Array.isArray(notaDebito.infoNotaDebito.pagos)? notaDebito.infoNotaDebito.pagos : [notaDebito.infoNotaDebito.pagos.pago];

        mapVersionInfo(notaDebito);

        const version = mapVersionInfo(notaDebito);

        const newCreditNote = {
            
            ...notaDebito,
            "version": version,
            "infoTributaria" : {
                ...notaDebito.infoTributaria,
                [commonPropertyMap.environment]: transformTypeEnvironment[notaDebito.infoTributaria.ambiente],
                [commonPropertyMap.typeEmission]: transformTypeEmission[notaDebito.infoTributaria.tipoEmision],
            },
            "infoDocumento" : {
                ...notaDebito.infoNotaDebito,
                version,
                "tipo": DocumentTypeEnum.DEBIT_NOTE,
                [billPropertyMap.buyerIdType]: transformTypeIdentification[notaDebito.infoNotaDebito.tipoIdentificacionComprador],
                ...parseNumberInObject(notaDebito.infoNotaDebito),
                "totalInpuestos": taxes.map((tax: any) => {
                    return {
                        ...tax,
                        ...parseNumberInObject(tax),
                        [billPropertyMap.name] : transformTaxesName[tax.codigo],
                        [billPropertyMap.percentage]: tax.codigoPorcentaje
                    }
                }),
                "pagos": payments
            },
            "infoAdicional" : additionalInfo,
            "fechaEmision" : notaDebito.fechaEmision,
            "estado" : notaDebito.estado,
            
        };

       
        
        removeUnusedProperties(newCreditNote, [
            removePropertyMap.signature,
            removePropertyMap.dollarSign,
            "infoNotaDebito",
          ]);

          

        return  newCreditNote
    }
}