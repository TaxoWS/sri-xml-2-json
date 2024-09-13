// mapping codes

export const transformTypeEmission: Record<string, string> = {
  '1': 'NORMAL',
};
export const transformTypeEnvironment: Record<string, string> = {
  '2': 'PRODUCCIÓN',
};

export const transformTaxesName: Record<string, string> = {
  '2': 'IVA',
  '3': 'ICE',
  '5': 'IRBPNR',
};

export const transformTaxesPercentage: Record<string, string> = {
  '0': '0%',
  '2': '12%',
  '3': '14%',
  '6': 'NO OBJETO DE IMPUESTO',
  '7': 'EXENTO DE IVA',
  '8': 'IVA DIFERENCIADO',
};
export const transformPaymentMethod: Record<string, string> = {
  '01': 'SIN UTILIZACIÓN DEL SISTEMA FINANCIERO',
  '15': 'COMPENSACIÓN DE DEUDAS',
  '16': 'TARJETA DE DÉBITO',
  '17': 'DINERO ELECTRÓNICO',
  '18': 'TARJETA PREPAGO',
  '19': 'TARJETA DE CRÉDITO',
  '20': 'OTROS CON UTILIZACIÓN DEL SISTEMA FINANCIERO',
  '21': 'ENDOSO DE TÍTULOS',
};

export const transformTypeIdentification: Record<string, string> = {
  '04': 'RUC',
  '05': 'CÉDULA',
  '06': 'PASAPORTE',
  '07': 'VENTA A CONSUMIDOR FINAL',
  '08': 'IDENTIFICACIÓN DEL EXTERIOR',
};

export const billPropertyMap = {
  type: 'tipo',
  buyerIdType: 'tipoIdentificacionCompradorNombre',
  paymentInfo: 'pago',
  totalTaxInfo: 'totalImpuestos',
  paymentMethodName: 'formaPagoNombre',
  name: 'nombre',
  percentage: 'porcentaje',
  documentInfo: 'infoDocumento',
  products: 'productos',
  additionalInfo: 'infoAdicional',
  taxInfo: 'infoTributaria',
  taxes: 'impuestos',
};

export const creditNotePropertyMap = {
  versionInfo: 'version',
  type: 'tipo',
  buyerIdType: 'tipoIdentificacionCompradorNombre',
  totalTaxInfo: 'totalImpuestos',
  paymentMethodName: 'formaPagoNombre',
  name: 'nombre',
  percentage: 'porcentaje',
  documentInfo: 'infoDocumento',
  products: 'productos',
  additionalInfo: 'infoAdicional',
  taxInfo: 'infoTributaria',
  taxes: 'impuestos',
};
export const retentionPropertyMap = {
  type: 'tipo',
  taxes: 'impuestos',
  documentInfo: 'infoDocumento',
  taxInfo: 'infoTributaria',
  typeIdentificationSubjectRetained: 'tipoIdentificacionSujetoRetenidoNombre',
  additionalInfo: 'infoAdicional',
  retentions: 'retenciones',
  payments: 'pagos',
  taxesDocSupported: 'impuestosDocSustento',
  supportingDocument: 'docsSustento',
};

export const settlementPropertyMap = {
  versionInfo: 'version',
  taxInfo: 'infoTributaria',
  settlementInfo: 'infoLiquidacionCompra',
  additionalInfo: 'infoAdicional',
  products: 'productos',
  details: 'detalles',
};

export const removePropertyMap = {
  signature: 'ds:Signature',
  dollarSign: '$',
  billInfo: 'infoFactura',
  details: 'detalles',
  payments: 'pagos',
  totalWithTaxes: 'totalConImpuestos',
  creditNoteInfo: 'infoNotaCredito',
  retentionInfo: 'infoCompRetencion',
};

export const commonPropertyMap = {
  environment: 'ambiente',
  typeEmission: 'tipoEmision',
  authorizationAt: 'fechaAutorizacion',
  authorizationStatus: 'estado',
};
