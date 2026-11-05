---
"taxo-sri-xml-2-json": minor
---

fix: `productos[].detallesAdicionales` se devuelve tal cual viene en el XML, sin convertir valores a número.

Antes, `detAdicional.$.valor` (y `.nombre`) pasaban por la conversión numérica genérica, así que su tipo dependía del contenido: `"356938035643809"` llegaba como número, `"0990000000001"` como string (por el cero inicial), `"166.00"` como `166` (perdía los decimales) y `"10001-MODELO-B-X100"` como string. Son datos libres del emisor (IMEI, series, códigos internos), no montos.

Ahora `nombre` y `valor` siempre son **string**, carácter por carácter igual al XML, en facturas, notas de crédito y liquidaciones de compra. La forma no cambia: `detAdicional` sigue siendo objeto cuando hay uno y array cuando hay varios. El resto del documento (cantidades, precios, impuestos, totales, `infoAdicional`) se convierte igual que antes.

Si algún consumidor trataba `valor` como número, debe convertirlo de forma explícita (`Number(valor)`).
