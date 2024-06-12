## Simple XML 2 TO JSON parser to SRI documents

### Installation

```bash
$ npm install sri-xml-2-json
```

### Usage

```javascript
import { Ride } from "sri-xml-2-json";
const xmlDocument = "<xml>...</xml>";
const ride = new Ride(xmlDocument);
```

## API

```javascript
const jsonString = await ride.convertToJson();
console.log(jsonString);
```

## Example

```json
{
  "infoTributaria": {
    "ambiente": "PRODUCCIÓN",
    "tipoEmision": "NORMAL",
    "razonSocial": "SAURON S.A.",
    "nombreComercial": "EL ANILLO UNICO",
    "ruc": "1790322831001",
    "claveAcceso": "2342202301179032283100120090210000671826226011210",
    "codDoc": "01",
    "estab": "009",
    "ptoEmi": "021",
    "secuencial": "000067182",
    "dirMatriz": "LA COMARCA"
  },
  "infoDocumento": {
    "tipo": "factura",
    "fechaEmision": "24/12/2023",
    "dirEstablecimiento": "LA COMARCA",
    "contribuyenteEspecial": 5368,
    "obligadoContabilidad": "SI",
    "tipoIdentificacionComprador": "05",
    "razonSocialComprador": "GANDALF EL GRIS",
    "identificacionComprador": 12063133331,
    "totalSinImpuestos": 27.1,
    "totalDescuento": 3.02,
    "propina": 0,
    "importeTotal": 30.35,
    "moneda": "DOLAR",
    "valorRetIva": 0,
    "valorRetRenta": 0,
    "tipoIdentificacionCompradorNombre": "CÉDULA",
    "pago": {
      "formaPago": 19,
      "total": 30.35,
      "plazo": "0",
      "unidadTiempo": "dias",
      "formaPagoNombre": "TARJETA DE CRÉDITO"
    },
    "totalImpuestos": [
      {
        "codigo": 2,
        "codigoPorcentaje": 2,
        "baseImponible": 27.1,
        "valor": 3.25,
        "nombre": "IVA",
        "porcentaje": "12%"
      }
    ]
  },
  "productos": [
    {
      "codigoPrincipal": "LAF.142039",
      "codigoAuxiliar": "0000900133785",
      "descripcion": "Producto de prueba",
      "cantidad": 1,
      "precioUnitario": 30.12,
      "descuento": 3.02,
      "precioTotalSinImpuesto": 27.1,
      "impuestos": {
        "codigo": 2,
        "codigoPorcentaje": 2,
        "tarifa": 12,
        "baseImponible": 27.1,
        "valor": 3.26,
        "nombre": "IVA",
        "porcentaje": "12%"
      }
    },
    {
      "codigoPrincipal": "FLX.funda1020x600 recicl",
      "codigoAuxiliar": 23521926,
      "descripcion": "producto de prueba 2",
      "cantidad": 1,
      "precioUnitario": 0,
      "descuento": 0,
      "precioTotalSinImpuesto": 0,
      "impuestos": {
        "codigo": 2,
        "codigoPorcentaje": 2,
        "tarifa": 12,
        "baseImponible": 0,
        "valor": 0,
        "nombre": "IVA",
        "porcentaje": "12%"
      }
    }
  ]
}
```

# MIT License

Copyright (c) 2024 - TAXO

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
