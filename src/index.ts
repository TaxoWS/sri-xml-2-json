import xml2js from 'xml2js';
import { DocumentTypeEnum } from './enums';
import { BillDocument } from './documents/bill.document';
import { IDocument } from './documents/document.interface';
import { CreditNoteDocument } from './documents/credit-note.document';
import { commonPropertyMap } from './mapping';
import { RetentionDocument } from './documents/retention.document';
import { SettlementDocument } from './documents/settlement.document';
import { DebitNoteDocument } from './documents/debit_note.document';

interface IRide {}

export class Ride {
  private xml: string;

  constructor(input: string) {
    this.xml = input;
  }

  /**
   * Convert the xml to json
   * @returns {Promise<string>} json
   * @memberof Ride
   * @throws {Error} if the document is not supported
   * @example
   * const ride = new Ride(xml);
   * const json = await ride.convertToJson();
   * console.log(json);
   * @beta
   */
  public async convertToJson(): Promise<string> {
    try {
      // parse xml to json
      const parser = new xml2js.Parser({ explicitArray: false });
      const result = await parser.parseStringPromise(this.xml);

      const { Authorization, autorizacion } = result;

      const documentParser = Authorization ?? autorizacion;

      const xmlReceipt = documentParser!.comprobante!;

      const jsonReceipt = await parser.parseStringPromise(xmlReceipt);

      // get instance of document
      const document: IDocument = instanceDocument(jsonReceipt);

      // transform schema
      const response = document.transform(jsonReceipt);

      const transformedResponse = {
        ...response,
        [commonPropertyMap.authorizationAt]: documentParser!.fechaAutorizacion,
        [commonPropertyMap.authorizationStatus]: documentParser!.estado,
      };

      return JSON.stringify(transformedResponse);
    } catch (error) {
      console.error(error);
      throw Error('Error converting xml to json');
    }
  }
}

const instanceDocument = (receipt: any): IDocument => {
  try {
    if (DocumentTypeEnum.BILL in receipt) {
      return new BillDocument();
    }
    if (DocumentTypeEnum.CREDIT_NOTE in receipt) {
      return new CreditNoteDocument();
    }
    if (DocumentTypeEnum.RETENTION in receipt) {
      return new RetentionDocument();
    }
    if (DocumentTypeEnum.SETTLEMENT in receipt) {
      return new SettlementDocument();
    }
    if (DocumentTypeEnum.DEBIT_NOTE in receipt) {
      return new DebitNoteDocument();
    }

    throw new Error('Document type not found');
  } catch (error) {
    throw new Error('error to instance document');
  }
};
