const FORMAT_NUMERIC_EXPECT = /^(0\.\d+|[1-9]\d*(\.\d+)?)$/;

export const parseNumberInObject = (obj: any) => {
  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object') {
      parseNumberInObject(obj[key]);
    } else {
      if (
        typeof obj[key] === 'string' &&
        FORMAT_NUMERIC_EXPECT.test(obj[key])
      ) {
        obj[key] = parseFloat(obj[key]);
      }
    }
  });
  return obj;
};

export const mappingExtraInfo = (receipt: any) => {
  const result = receipt.factura.infoAdicional.campoAdicional.map(
    (item: any) => {
      const newItem = {
        nombre: item.$.nombre,
        valor: item._,
      };
      return parseNumberInObject(newItem);
    }
  );
  return result;
};
