export const fixtures = {
  BILL_MULTIPLE_ITEMS: `
    <?xml version="1.0" encoding="UTF-8" standalone="yes"?>
    <Authorization>
      <estado>AUTORIZADO</estado>
      <numeroAutorizacion>1811202301179001691900120721260002540020711013510</numeroAutorizacion>
      <fechaAutorizacion>2023-11-18T20:31:29-05:00</fechaAutorizacion>
      <ambiente>PRODUCCIÓN</ambiente>
      <comprobante>
          <![CDATA[
          <?xml version="1.0" encoding="UTF-8"?><factura id="comprobante" version="1.1.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>CORPORACION FAVORITA C.A.</razonSocial><nombreComercial>CORPORACION FAVORITA C.A.</nombreComercial><ruc>1790016919001</ruc><claveAcceso>1811202301179001691900120721260002540020711013510A</claveAcceso><codDoc>01</codDoc><estab>072</estab><ptoEmi>126</ptoEmi><secuencial>000254002</secuencial><dirMatriz>AV. GENERAL ENRIQUEZ VIA COTOGCHOA</dirMatriz></infoTributaria><infoFactura><fechaEmision>18/11/2023</fechaEmision><dirEstablecimiento>AV. SEIS DE DICIEMBRE S/N ENTRE MORENO Y ALEMAN</dirEstablecimiento><contribuyenteEspecial>5368</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionComprador>05</tipoIdentificacionComprador><razonSocialComprador>JUAN PIGUAVE</razonSocialComprador><identificacionComprador>120637771</identificacionComprador><totalSinImpuestos>175.75</totalSinImpuestos><totalDescuento>9.52</totalDescuento><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><descuentoAdicional>0.00</descuentoAdicional><baseImponible>49.62</baseImponible><valor>5.96</valor><valorDevolucionIva>0.00</valorDevolucionIva></totalImpuesto><totalImpuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><descuentoAdicional>0.00</descuentoAdicional><baseImponible>126.13</baseImponible><valor>0.00</valor></totalImpuesto></totalConImpuestos><propina>0</propina><importeTotal>181.71</importeTotal><moneda>DOLAR</moneda><pagos><pago><formaPago>19</formaPago><total>181.71</total><plazo>0</plazo><unidadTiempo>dias</unidadTiempo></pago></pagos></infoFactura><detalles><detalle><codigoPrincipal>786102290071</codigoPrincipal><codigoAuxiliar>786102290071</codigoAuxiliar><descripcion>INDAVES HUEVO EXTRA GRANDE</descripcion><cantidad>1.0000</cantidad><precioUnitario>6.4800</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>6.48</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>6.48</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>261554</codigoPrincipal><codigoAuxiliar>261554</codigoAuxiliar><descripcion>MARAMAR SALMON PORCION C/PIEL</descripcion><cantidad>1.0000</cantidad><precioUnitario>9.5300</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>9.53</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>9.53</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786100026807</codigoPrincipal><codigoAuxiliar>786100026807</codigoAuxiliar><descripcion>SUPER CANGURO FUNDA DE BASURA GRANDE 23 X28</descripcion><cantidad>2.0000</cantidad><precioUnitario>0.8304</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.66</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>1.66</baseImponible><valor>0.20</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>2521550456</codigoPrincipal><codigoAuxiliar>2521550456</codigoAuxiliar><descripcion>4563 PAD GAMING  800</descripcion><cantidad>1.0000</cantidad><precioUnitario>10.6964</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>10.70</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>10.70</baseImponible><valor>1.28</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786210218030</codigoPrincipal><codigoAuxiliar>786210218030</codigoAuxiliar><descripcion>MIRA ACEITE AGUACATE EXTRA VIRGEN PREMIUM</descripcion><cantidad>1.0000</cantidad><precioUnitario>6.5300</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>6.53</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>6.53</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>268284</codigoPrincipal><codigoAuxiliar>268284</codigoAuxiliar><descripcion>AGRO.VB.PATAS BLOQUE RES.</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.3300</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.33</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>3.33</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786104860296</codigoPrincipal><codigoAuxiliar>786104860296</codigoAuxiliar><descripcion>PERLA BEBE DETERGENTE LIQUIDO  MANZANILLA</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.1339</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.13</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>3.13</baseImponible><valor>0.38</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786211550064</codigoPrincipal><codigoAuxiliar>786211550064</codigoAuxiliar><descripcion>SG CORFRUIT NUEZ NOGAL PELADA</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.0600</precioUnitario><descuento>0.46</descuento><precioTotalSinImpuesto>2.60</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.60</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786106300013</codigoPrincipal><codigoAuxiliar>786106300013</codigoAuxiliar><descripcion>P.FRESCOS MAR TILAPIA FILETE</descripcion><cantidad>1.0000</cantidad><precioUnitario>5.5900</precioUnitario><descuento>0.56</descuento><precioTotalSinImpuesto>5.03</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>5.03</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>269655</codigoPrincipal><codigoAuxiliar>269655</codigoAuxiliar><descripcion>MOLIDA TIPO I MENOS DEL 1% GRASA RES..</descripcion><cantidad>1.0000</cantidad><precioUnitario>5.1600</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>5.16</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>5.16</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786100311227</codigoPrincipal><codigoAuxiliar>786100311227</codigoAuxiliar><descripcion>FAMILIA PH.ACOLCHAMAX MEGAROLLO 8X32 M</descripcion><cantidad>1.0000</cantidad><precioUnitario>5.5446</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>5.54</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>5.54</baseImponible><valor>0.67</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>750954665101</codigoPrincipal><codigoAuxiliar>750954665101</codigoAuxiliar><descripcion>COLGATE DENT.LUMI.WH.CARBON ACTIVADO 75 ML</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.4107</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.41</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>3.41</baseImponible><valor>0.41</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786113861084</codigoPrincipal><codigoAuxiliar>786113861084</codigoAuxiliar><descripcion>ZEUS YOG.GRIEGO NATURAL</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.8000</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.80</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>1.80</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>260361</codigoPrincipal><codigoAuxiliar>260361</codigoAuxiliar><descripcion>BERENJENA GRANEL.</descripcion><cantidad>1.0150</cantidad><precioUnitario>1.1232</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.14</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>1.14</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786100192316</codigoPrincipal><codigoAuxiliar>786100192316</codigoAuxiliar><descripcion>SNOB GARBANZO.</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.1964</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.20</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>1.20</baseImponible><valor>0.14</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786102462561</codigoPrincipal><codigoAuxiliar>786102462561</codigoAuxiliar><descripcion>DASANI</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.2679</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.27</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>1.27</baseImponible><valor>0.15</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786103860308</codigoPrincipal><codigoAuxiliar>786103860308</codigoAuxiliar><descripcion>MT BIZCOCHOS ESPECIALES CAYAMBENOS</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.5800</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.58</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>1.58</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786104257383</codigoPrincipal><codigoAuxiliar>786104257383</codigoAuxiliar><descripcion>SX. ARANDANOS.</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.6500</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.65</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>3.65</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786800081861</codigoPrincipal><codigoAuxiliar>786800081861</codigoAuxiliar><descripcion>TACONAZO TORILLAS DE MAIZ</descripcion><cantidad>2.0000</cantidad><precioUnitario>1.8000</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.60</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>3.60</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786103080006</codigoPrincipal><codigoAuxiliar>786103080006</codigoAuxiliar><descripcion>GONZALEZ Q.MOZARELLA</descripcion><cantidad>2.0000</cantidad><precioUnitario>4.5200</precioUnitario><descuento>1.36</descuento><precioTotalSinImpuesto>7.68</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>7.68</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786101250739</codigoPrincipal><codigoAuxiliar>786101250739</codigoAuxiliar><descripcion>TONI QUESO CREMA LIGHT</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.2700</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.27</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.27</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786211550063</codigoPrincipal><codigoAuxiliar>786211550063</codigoAuxiliar><descripcion>SG CORFRUIT ALMENDRAS PELADAS</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.1500</precioUnitario><descuento>0.63</descuento><precioTotalSinImpuesto>2.52</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.52</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>770200692240</codigoPrincipal><codigoAuxiliar>770200692240</codigoAuxiliar><descripcion>PACK DOVE RECONSTR.COMPLETA SHAC PREC.ESPECIAL</descripcion><cantidad>1.0000</cantidad><precioUnitario>10.4821</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>10.48</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>10.48</baseImponible><valor>1.26</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786101251126</codigoPrincipal><codigoAuxiliar>786101251126</codigoAuxiliar><descripcion>TONI YOGURT NATURAL</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.7800</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.78</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.78</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786104259194</codigoPrincipal><codigoAuxiliar>786104259194</codigoAuxiliar><descripcion>SEMBRAO MOTE SIN SAL</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.0500</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.05</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>1.05</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786100025098</codigoPrincipal><codigoAuxiliar>786100025098</codigoAuxiliar><descripcion>AGRICOLA EL COLMENAR FRAMBRUESA</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.3800</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.38</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.38</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>770202619187</codigoPrincipal><codigoAuxiliar>770202619187</codigoAuxiliar><descripcion>NOSOTRAS  ECONOPACK TO.HI.BUENAS NOCHES X24 U</descripcion><cantidad>1.0000</cantidad><precioUnitario>7.1100</precioUnitario><descuento>2.13</descuento><precioTotalSinImpuesto>4.98</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>4.98</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>260745</codigoPrincipal><codigoAuxiliar>260745</codigoAuxiliar><descripcion>MR. POLLO GRANDE</descripcion><cantidad>4.0000</cantidad><precioUnitario>6.7500</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>27.00</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>27.00</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786105150966</codigoPrincipal><codigoAuxiliar>786105150966</codigoAuxiliar><descripcion>DR.CLEAN LAVABIBERONES HIPOALERGENICO</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.2768</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.28</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>1.28</baseImponible><valor>0.15</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>268401</codigoPrincipal><codigoAuxiliar>268401</codigoAuxiliar><descripcion>FRITADA DE BRAZO CERDO.</descripcion><cantidad>1.0000</cantidad><precioUnitario>4.9300</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>4.93</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>4.93</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786100011786</codigoPrincipal><codigoAuxiliar>786100011786</codigoAuxiliar><descripcion>SYLVIA MARIA ARROZ</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.1000</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.10</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>3.10</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786106350800</codigoPrincipal><codigoAuxiliar>786106350800</codigoAuxiliar><descripcion>GOURMET PAN EMP CINCO CEREALES</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.7400</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.74</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.74</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>269055</codigoPrincipal><codigoAuxiliar>269055</codigoAuxiliar><descripcion>S.MOLIDA TIPO I ESP.6-7% RES.</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.2200</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>3.22</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>3.22</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786104860373</codigoPrincipal><codigoAuxiliar>786104860373</codigoAuxiliar><descripcion>PERLA SUAVIZANTE COCO Y AGUA DE ROSAS DOYPACK</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.6071</precioUnitario><descuento>0.90</descuento><precioTotalSinImpuesto>2.71</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>2.71</baseImponible><valor>0.32</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>400825812500</codigoPrincipal><codigoAuxiliar>400825812500</codigoAuxiliar><descripcion>SEEBERGER NUECES PECANAS</descripcion><cantidad>1.0000</cantidad><precioUnitario>5.6161</precioUnitario><descuento>2.25</descuento><precioTotalSinImpuesto>3.37</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>3.37</baseImponible><valor>0.40</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786105590044</codigoPrincipal><codigoAuxiliar>786105590044</codigoAuxiliar><descripcion>NUTRI LECHE ENTERA UHT TETRAFINO</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.0000</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.00</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>1.00</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786104860269</codigoPrincipal><codigoAuxiliar>786104860269</codigoAuxiliar><descripcion>CICLON FLORAL DETERGENTE POLVO XTRA POWER.</descripcion><cantidad>1.0000</cantidad><precioUnitario>3.4464</precioUnitario><descuento>0.69</descuento><precioTotalSinImpuesto>2.76</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>2.76</baseImponible><valor>0.33</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>268407</codigoPrincipal><codigoAuxiliar>268407</codigoAuxiliar><descripcion>HUESO ESPECIAL CERDO..</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.7600</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.76</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.76</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>770201038214</codigoPrincipal><codigoAuxiliar>770201038214</codigoAuxiliar><descripcion>AXION LAVAVAJILLAS LIMON</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.6607</precioUnitario><descuento>0.54</descuento><precioTotalSinImpuesto>2.13</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>2.13</baseImponible><valor>0.26</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786100023938</codigoPrincipal><codigoAuxiliar>786100023938</codigoAuxiliar><descripcion>BIZCOCHOS EL HORNO DE LENA..</descripcion><cantidad>1.0000</cantidad><precioUnitario>1.9500</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>1.95</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>1.95</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>262564</codigoPrincipal><codigoAuxiliar>262564</codigoAuxiliar><descripcion>PIGGIS TOCINO AHUMADO MEDIO GRASA</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.9500</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.95</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.95</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>786800082801</codigoPrincipal><codigoAuxiliar>786800082801</codigoAuxiliar><descripcion>AGRO CHERRY 680G</descripcion><cantidad>1.0000</cantidad><precioUnitario>2.3900</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>2.39</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>2.39</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle></detalles><infoAdicional><campoAdicional nombre="DEDUCIBLE ALIMENTACION">122.03</campoAdicional><campoAdicional nombre="AHORRO AFILIADO">9.59</campoAdicional><campoAdicional nombre="AHORRO POR DESCUENTOS">10.04</campoAdicional><campoAdicional nombre="AHORRO TOTAL">19.63</campoAdicional></infoAdicional><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature233614"><ds:SignedInfo Id="Signature-SignedInfo964017"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod><ds:Reference Id="SignedPropertiesID511128" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature233614-SignedProperties424057"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>WBPW8dCZ1OnnGPbzjtQVGKeGOlU=</ds:DigestValue></ds:Reference><ds:Reference URI="#Certificate1159482"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>ObnVNqkuWdAcuKMPSaVbpodGw5E=</ds:DigestValue></ds:Reference><ds:Reference Id="Reference-ID-443018" URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>52ozoCvR+7JZOxtmZ67HzYs1kUo=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue Id="SignatureValue226711">
  AYvMk7UmX0CQZqPdWPJSRa3cCefh6xrYm1xM1972ApfxreFleqyxYsVvj1ORUmHYKg/kOlddCL+X
  CO5LUHaGDG3f7zh1EHEAtMJI3kLQ1ep8HZxWshyFpgNr4U8N4WYrQxnChcTfF0eQ43BM/42JzKY1
  PPZQ4seVYEG9BHHqMmP2gszyIBJ0H2cYLakIMJxEXVOSEzL/qQh9kIYduUf88YW4EmA6NMvw9jGA
  lSrlaB8o4HxmcV/lH3s/KxaknKCaBXTcxT4+7RoWhuud3mNMR2VcXLqJMRFY8/NEfCIACIG5ZuX/
  e/6UsDs1AaFNwcBPjCQLJbAPXZE/aq8TMdKgmg==
  </ds:SignatureValue><ds:KeyInfo Id="Certificate1159482"><ds:X509Data><ds:X509Certificate>
  MIIL/TCCCeWgAwIBAgIESwvSATANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
  BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
  T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
  QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMjA0MjIxOTMyMTNaFw0yNDA0MjExOTMyMTNaMIGZMSIw
  IAYDVQQDDBlKT1JHRSBMVUlTIEJSQVZPIEFSRUxMQU5PMRUwEwYDVQQFEwwyMjA0MjIxNDQxNTcx
  MDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsGA1UE
  CgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIIBIjANBgkqhkiG9w0BAQEFAAOC
  AQ8AMIIBCgKCAQEAySbGRqBHe1HF/u9W5vmmbKfZrZokGHPZ20eyHAgzMhMiDF6yH1lvv0FhtrNX
  +eYZ2ZKubv/Q9XtFwkCurorBuHhRgrAiDC1aizLp2O6fQKyREtLGHgWp29VK0Qnm3LAARfjDjfwZ
  ix9oK085ejsX8VnhO4aN4sZJFXjs6x2qWTjvSoLXjUVgwjwIh0VuUqC2kTAQMwXDU6ez0pZycNoJ
  JQaitIk4RrdztwyaRwipxc4eHXqMXYt5d8wCICBi4YG/Jdqig5sjjL7+zoLbZnIFWnhw6JfvBPPE
  /4RQnCZrmqf7d0zhFF7/hdqlLfUTzDA1lGwvurLquqA/WAQbodTP/wIDAQABo4IHSTCCB0UwDAYD
  VR0TAQH/BAIwADAfBgNVHSMEGDAWgBSMusoRV3glgB1rCktVv42uYt29jzBZBggrBgEFBQcBAQRN
  MEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJjYS9w
  dWJsaWN3ZWIvc3RhdHVzL29jc3Awgc8GA1UdLgSBxzCBxDCBwaCBvqCBu4aBuGxkYXA6Ly9sZGFw
  c2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBT
  VUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9S
  TUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQz9kZWx0YVJldm9jYXRpb25MaXN0P2Jh
  c2UwHgYDVR0RBBcwFYETamJyYXZvQGZhdm9yaXRhLmNvbTCCARIGA1UdIASCAQkwggEFMGAGCisG
  AQQBgqZyAgowUjBQBggrBgEFBQcCAjBEHkIAQwBlAHIAdABpAGYAaQBjAGEAZABvACAAZABlACAA
  TQBpAGUAbQBiAHIAbwAgAGQAZQAgAEUAbQBwAHIAZQBzAGEwgaAGCisGAQQBgqZyAgQwgZEwgY4G
  CCsGAQUFBwIBFoGBaHR0cHM6Ly93d3cuc2VjdXJpdHlkYXRhLm5ldC5lYy93cC1jb250ZW50L2Rv
  d25sb2Fkcy9Ob3JtYXRpdmFzL1BfZGVfQ2VydGlmaWNhZG9zL1BvbGl0aWNhcyBkZSBDZXJ0aWZp
  Y2FkbyBNaWVtYnJvIGRlIEVtcHJlc2EucGRmMIICogYDVR0fBIICmTCCApUwgeWgQaA/hj1odHRw
  Oi8vb2NzcGd3LnNlY3VyaXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3Nw
  ooGfpIGcMIGZMTkwNwYDVQQDDDBBVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0yIFNF
  Q1VSSVRZIERBVEExMDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1B
  Q0lPTjEdMBsGA1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIHHoIHEoIHB
  hoG+bGRhcDovL2xkYXBzZGNhMi5zZWN1cml0eWRhdGEubmV0LmVjL0NOPUFVVE9SSURBRCBERSBD
  RVJUSUZJQ0FDSU9OIFNVQkNBLTIgU0VDVVJJVFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklD
  QUNJT04gREUgSU5GT1JNQUNJT04sTz1TRUNVUklUWSBEQVRBIFMuQS4gMixDPUVDP2NlcnRpZmlj
  YXRlUmV2b2NhdGlvbkxpc3Q/YmFzZTCB4KCB3aCB2oaB12h0dHBzOi8vcG9ydGFsLW9wZXJhZG9y
  Mi5zZWN1cml0eWRhdGEubmV0LmVjL2VqYmNhL3B1YmxpY3dlYi93ZWJkaXN0L2NlcnRkaXN0P2Nt
  ZD1jcmwmaXNzdWVyPUNOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNVQkNBLTIgU0VDVVJJ
  VFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04sTz1TRUNV
  UklUWSBEQVRBIFMuQS4gMixDPUVDMB0GA1UdDgQWBBTmN2bOeFgOvY2Qkc9MCNpsRiGCoDArBgNV
  HRAEJDAigA8yMDIyMDQyMjE5MzIxM1qBDzIwMjQwNDIxMTkzMjEzWjALBgNVHQ8EBAMCBeAwJwYK
  KwYBBAGCpnIDBQQZDBdHRVJFTlRFIERFIENPTlRBQklMSURBRDAaBgorBgEEAYKmcgMBBAwMCjE3
  MDgwMzMyNTEwGgYKKwYBBAGCpnIDCQQMDApSVU1JTklBSFVJMBEGCisGAQQBgqZyAyIEAwwBLjAo
  BgorBgEEAYKmcgMHBBoMGEFWLiBHRU5FUkFMIEVOUklRVUVaIFMgTjAaBgorBgEEAYKmcgMCBAwM
  CkpPUkdFIExVSVMwHwYKKwYBBAGCpnIDIAQRDA8wMDIwMDEwMDAzNDU4ODQwEwYKKwYBBAGCpnID
  IQQFDANQRlgwFwYKKwYBBAGCpnIDDAQJDAdFQ1VBRE9SMBUGCisGAQQBgqZyAwMEBwwFQlJBVk8w
  KQYKKwYBBAGCpnIDCgQbDBlDT1JQT1JBQ0lPTiBGQVZPUklUQSBDLkEuMB0GCisGAQQBgqZyAwsE
  DwwNMTc5MDAxNjkxOTAwMTASBgorBgEEAYKmcgMdBAQMAk5vMBgGCisGAQQBgqZyAwQECgwIQVJF
  TExBTk8wGgYKKwYBBAGCpnIDCAQMDAowMjIyOTk2NTAwMA0GCSqGSIb3DQEBCwUAA4ICAQDAF1Qx
  EIPHziB1KgwXt4NFhjZ+jnKPgbyoUm/sbk/1fTINV162ci4f/1UU/a9HMjEmkejsdzs9rrhzuowl
  jShd1VM5/2eZK1JPho9eSJCyHqV4SDlz1gC2bRRYficqLNq44x0YLITTEWfnsHnsLhM51eRd2ofY
  q3mDICO/BDMAjgC2RpYJmgTcNeRkujaxjMoABbIuC+XMEvOr6sLTKPl9Ts+fsxYwlAwzhr/uLzA+
  NqIOjzw9OVBfMoZKw76qlCcmy24zLK6hSOBtq2yDWykBIIzCuNOur171EFD7R1ZTajAgAGLghjuA
  FHoIrldoF1EQTcSaI9Etsr3m0miMeWYSgIvy6n/WfpVWeYAIfk7Yk0pv4uLpQQ0xcXuFrI6uVEeV
  oocvQHNEowWT7WhIrHLUcZbcGGQKYTrt66CM30IDd6tS+467ZvDIzDST9j1I3XiM+yOdqp5DJjP6
  c2Ha+qgxhvHvO/Tzj1Wf9ZWEYIVXC7vF8SuVLDUwZHOkz6EZMPMmV/1yQ7WN8IOFmSvN2kTV2BzS
  PvT/EnfgBFxPYhl0OhWx0uBi8qt5O9jcUyKa/AG79twQ9cNI5S2+r9IlafHYYvn7LGB9O5xH1QBE
  9AgMQCC0XWK+Y6yHKizPzES6OxhVIkkItTYS0nvaCjm2gg8MSh1oF8CVxAd6CWWxMETYLA==
  </ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
  ySbGRqBHe1HF/u9W5vmmbKfZrZokGHPZ20eyHAgzMhMiDF6yH1lvv0FhtrNX+eYZ2ZKubv/Q9XtF
  wkCurorBuHhRgrAiDC1aizLp2O6fQKyREtLGHgWp29VK0Qnm3LAARfjDjfwZix9oK085ejsX8Vnh
  O4aN4sZJFXjs6x2qWTjvSoLXjUVgwjwIh0VuUqC2kTAQMwXDU6ez0pZycNoJJQaitIk4Rrdztwya
  Rwipxc4eHXqMXYt5d8wCICBi4YG/Jdqig5sjjL7+zoLbZnIFWnhw6JfvBPPE/4RQnCZrmqf7d0zh
  FF7/hdqlLfUTzDA1lGwvurLquqA/WAQbodTP/w==
  </ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue></ds:KeyValue></ds:KeyInfo><ds:Object Id="Signature233614-Object516833"><etsi:QualifyingProperties Target="#Signature233614"><etsi:SignedProperties Id="Signature233614-SignedProperties424057"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-11-18T20:31:28-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>hyH15hYJtQCgh64J2qerbtP1Nfs=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>1259065857</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-443018"><etsi:Description>comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]>
  </comprobante>
  <mensajes></mensajes>
  </Authorization>
    `,
  BILL_ONE_PRODUCT: `<Authorization>
    <estado>AUTORIZADO</estado>
    <numeroAutorizacion>141220230117922618480012001002000500541116</numeroAutorizacion>
    <fechaAutorizacion>2023-12-14T17:31:01-05:00</fechaAutorizacion>
    <ambiente>PRODUCCIÓN</ambiente>
    <comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?>
   <factura id="comprobante" version="1.0.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>SECURITY DATA SEGURIDAD EN DATOS Y FIRMA DIGITAL S.A.</razonSocial><nombreComercial>SECURITY DATA SEGURIDAD EN DATOS Y FIRMA DIGITAL S.A.</nombreComercial><ruc>1792261848001</ruc><claveAcceso>1412202301179226184800120010020005005410000000116</claveAcceso><codDoc>01</codDoc><estab>001</estab><ptoEmi>002</ptoEmi><secuencial>000500541</secuencial><dirMatriz>AV ALONSO DE TORRES Y AV DEL PARQUE</dirMatriz><agenteRetencion>1</agenteRetencion></infoTributaria><infoFactura><fechaEmision>14/12/2023</fechaEmision><dirEstablecimiento>AV ALONSO DE TORRES Y AV DEL PARQUE</dirEstablecimiento><contribuyenteEspecial>301E</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionComprador>04</tipoIdentificacionComprador><razonSocialComprador>Pepito</razonSocialComprador><identificacionComprador>1206313453001</identificacionComprador><direccionComprador>Aqui no mas</direccionComprador><totalSinImpuestos>18</totalSinImpuestos><totalDescuento>0</totalDescuento><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><baseImponible>18</baseImponible><valor>2.16</valor></totalImpuesto></totalConImpuestos><propina>0</propina><importeTotal>20.16</importeTotal><moneda>DOLAR</moneda><pagos><pago><formaPago>19</formaPago><total>20.16</total><plazo>0</plazo><unidadTiempo>DIAS</unidadTiempo></pago></pagos></infoFactura><detalles><detalle><codigoPrincipal>4830407002</codigoPrincipal><descripcion>FIRMA EN ARCHIVO ON LINE (1ANIO)</descripcion><cantidad>1</cantidad><precioUnitario>18</precioUnitario><descuento>0</descuento><precioTotalSinImpuesto>18</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>18</baseImponible><valor>2.16</valor></impuesto></impuestos></detalle></detalles><infoAdicional><campoAdicional nombre="Sistema">FENIX API</campoAdicional><campoAdicional nombre="Vendedor">CAMUNDA</campoAdicional><campoAdicional nombre="Telefono">0988818807</campoAdicional><campoAdicional nombre="Correo">pepe@gmail.com</campoAdicional><campoAdicional nombre="Forma Pago">TARJETA DE CREDITO UDS-20,16</campoAdicional><campoAdicional nombre="Observacion">C-847089 PERSONA NATURAL 1 ANIOS - ARCHIVO - VALIDACION EN LINEA - F.ON.P.A.N.V1.</campoAdicional><campoAdicional nombre="Codigo">12063165671001</campoAdicional></infoAdicional><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature1014964">
   <ds:SignedInfo Id="Signature-SignedInfo138577">
   <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>
   <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>
   <ds:Reference Id="SignedPropertiesID839260" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature1014964-SignedProperties955166">
   <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
   <ds:DigestValue>K8JWIEfRcR47XN6L7oDxg0fRHYs=</ds:DigestValue>
   </ds:Reference>
   <ds:Reference URI="#Certificate1327863">
   <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
   <ds:DigestValue>NRC2Fxuh0cRC2o/SiZNbM5AkyXg=</ds:DigestValue>
   </ds:Reference>
   <ds:Reference Id="Reference-ID-241635" URI="#comprobante">
   <ds:Transforms>
   <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
   </ds:Transforms>
   <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
   <ds:DigestValue>VkE0o9/8GPYppXhIwXOlNV4gYd0=</ds:DigestValue>
   </ds:Reference>
   </ds:SignedInfo>
   <ds:SignatureValue Id="SignatureValue8528">
   PU5vDf+uim33FUvLq6SqSstqjjnOeR2mUNOXHj19j2rhcLPmYzvJ7ibXgVZPGgiLcVhyDJ/RXbFe
   NBb18gN73Ex8KdcKaREuBuT9Z7qJJfvVSbyIkHxal/MMZq6cN+gzE+i4UnVHLF8JFbkjgyrezYNy
   JEtSZ4SBK6KWFx6+EqrHUrUxos9osIVwCNeROAbNHKSQUruJGJBu4qkDmGdvmMZWJTAtjBflDHau
   OPqhDA5js0pHlfCe1I6aN67wE/KEnkOYP/Q1ekrMKDp3kB1HubN/eYxOuRd7nMddDpGYRLjarfnC
   icx84r+EYQfIWbl+WK6tn4glugUfWhRkQMreUA==
   </ds:SignatureValue>
   <ds:KeyInfo Id="Certificate1327863">
   <ds:X509Data>
   <ds:X509Certificate>
   MIIMKTCCChGgAwIBAgIEAKIiijANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
   BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
   T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
   QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMzA0MjgxNzA2NDNaFw0yNTA0MjcxNzA2NDNaMIGcMSUw
   IwYDVQQDDBxDQVJMT1MgQUxCRVJUTyBERUxHQURPIFBFUkVaMRUwEwYDVQQFEwwyODA0MjMxMjE2
   MjExMDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsG
   A1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIIBIjANBgkqhkiG9w0BAQEF
   AAOCAQ8AMIIBCgKCAQEAkWHY7By9z2VRHr/jM2BM0+D8wRaCV23kPQddfI3WQOSXDBbc5R1Zgw7D
   9TPuCa0wt8ENQbyF9Ct3BQ0dU3gJ0Mxot72GHku/0QK/xt3UHhr1YmdMtotkXN8eJiUSKF1aRcu4
   BU9eqI28ZTWP9UmPT7oSFrygkOSYtDNcQ6DbygZj37Yylf8nX2bwMU/Hvr5EXZLH99rVRWDfLWHQ
   tH6P5v3XEL4zAr4NQk1jRIT/Vv4xlsDGav8ByqG+tdmyKO9BxPnz2kFd2KxAqoygsa354C+W97Z4
   y5uTTc/PY5wCx2HzScZ0IcMWY+JvplSOKHjoTb8qD/Q7bM8a3c+lEawwawIDAQABo4IHcjCCB24w
   DAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSMusoRV3glgB1rCktVv42uYt29jzBZBggrBgEFBQcB
   AQRNMEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJj
   YS9wdWJsaWN3ZWIvc3RhdHVzL29jc3Awgc8GA1UdLgSBxzCBxDCBwaCBvqCBu4aBuGxkYXA6Ly9s
   ZGFwc2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lP
   TiBTVUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElO
   Rk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQz9kZWx0YVJldm9jYXRpb25MaXN0
   P2Jhc2UwLQYDVR0RBCYwJIEiY2FybG9zLmRlbGdhZG9Ac2VjdXJpdHlkYXRhLm5ldC5lYzCCARIG
   A1UdIASCAQkwggEFMGAGCisGAQQBgqZyAgowUjBQBggrBgEFBQcCAjBEHkIAQwBlAHIAdABpAGYA
   aQBjAGEAZABvACAAZABlACAATQBpAGUAbQBiAHIAbwAgAGQAZQAgAEUAbQBwAHIAZQBzAGEwgaAG
   CisGAQQBgqZyAgQwgZEwgY4GCCsGAQUFBwIBFoGBaHR0cHM6Ly93d3cuc2VjdXJpdHlkYXRhLm5l
   dC5lYy93cC1jb250ZW50L2Rvd25sb2Fkcy9Ob3JtYXRpdmFzL1BfZGVfQ2VydGlmaWNhZG9zL1Bv
   bGl0aWNhcyBkZSBDZXJ0aWZpY2FkbyBNaWVtYnJvIGRlIEVtcHJlc2EucGRmMIICogYDVR0fBIIC
   mTCCApUwgeWgQaA/hj1odHRwOi8vb2NzcGd3LnNlY3VyaXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVi
   bGljd2ViL3N0YXR1cy9vY3NwooGfpIGcMIGZMTkwNwYDVQQDDDBBVVRPUklEQUQgREUgQ0VSVElG
   SUNBQ0lPTiBTVUJDQS0yIFNFQ1VSSVRZIERBVEExMDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElG
   SUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsGA1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJ
   BgNVBAYTAkVDMIHHoIHEoIHBhoG+bGRhcDovL2xkYXBzZGNhMi5zZWN1cml0eWRhdGEubmV0LmVj
   L0NOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNVQkNBLTIgU0VDVVJJVFkgREFUQSxPVT1F
   TlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04sTz1TRUNVUklUWSBEQVRBIFMu
   QS4gMixDPUVDP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxpc3Q/YmFzZTCB4KCB3aCB2oaB12h0dHBz
   Oi8vcG9ydGFsLW9wZXJhZG9yMi5zZWN1cml0eWRhdGEubmV0LmVjL2VqYmNhL3B1YmxpY3dlYi93
   ZWJkaXN0L2NlcnRkaXN0P2NtZD1jcmwmaXNzdWVyPUNOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FD
   SU9OIFNVQkNBLTIgU0VDVVJJVFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUg
   SU5GT1JNQUNJT04sTz1TRUNVUklUWSBEQVRBIFMuQS4gMixDPUVDMB0GA1UdDgQWBBRWgaFnO+uM
   VCF6YKigNAMEjaJXwzArBgNVHRAEJDAigA8yMDIzMDQyODE3MDY0M1qBDzIwMjUwNDI3MTcwNjQz
   WjALBgNVHQ8EBAMCBeAwGAYKKwYBBAGCpnIDBQQKDAhDT05UQURPUjAaBgorBgEEAYKmcgMBBAwM
   CjE3MjA4MjQ2MzgwFQYKKwYBBAGCpnIDCQQHDAVRVUlUTzARBgorBgEEAYKmcgMiBAMMAS4wNwYK
   KwYBBAGCpnIDBwQpDCdBTE9OU08gREUgVE9SUkVTIExDIDA4IFkgQVYuIERFTCBQQVJRVUUwHgYK
   KwYBBAGCpnIDAgQQDA5DQVJMT1MgQUxCRVJUTzAfBgorBgEEAYKmcgMgBBEMDzAwMjAwMDAwMDAw
   MDAwMDATBgorBgEEAYKmcgMhBAUMA1BGWDAXBgorBgEEAYKmcgMMBAkMB0VDVUFET1IwFwYKKwYB
   BAGCpnIDAwQJDAdERUxHQURPMEUGCisGAQQBgqZyAwoENww1U0VDVVJJVFkgREFUQSBTRUdVUklE
   QUQgRU4gREFUT1MgWSBGSVJNQSBESUdJVEFMIFMuQS4wHQYKKwYBBAGCpnIDCwQPDA0xNzkyMjYx
   ODQ4MDAxMBIGCisGAQQBgqZyAx0EBAwCTm8wFQYKKwYBBAGCpnIDBAQHDAVQRVJFWjAaBgorBgEE
   AYKmcgMIBAwMCjA5OTk5OTk5OTkwDQYJKoZIhvcNAQELBQADggIBAH07PVz8iTurL8057A6HjIZ0
   vmn23crCuC8KeoqPY/K0XB9kiTuXEVkeaRrQZ5UhWjt1XIf8tEM0fnd8vce1xo70nTID0Okg1/rV
   faoZh/8ipc3pVPb0CLEugKzmWJ9NHJIfD1GH8Rv6AwCVInIV3m8BNNTqJk73tJfEfWcReBSFVHzo
   9V0+zNBy9kZcp+h2Pg6X52aqWQm+acWTIeVl0j9sDPRqvkD1Sg2ac9nP/tFEHTVXtclWKxhoiGWC
   S2AjJtLko2t3I/52J1KUhTZCuToMwnG8fnJNZ5xdueF7HfLUgxRzZ7DSOFYLUPcgX7/eG9woT1Jw
   eKJiLYm9Mh326wdTIw5ycqmkuwI6evVSIwJ71XucBxnKh6VksrBgWYRoTkn6K+1gjcB8pNBxb7tF
   X39KEYK0r3MPRmnITYt7z2NJC1ATDVttjQD1FXTfLUPbtg2h1rk3IDR8D8kjnvWnI6GLL88xLqMd
   yyJg4Hzr6koxq/exkKll5+dYJ9mD5ZoKZgqgQJoyf93gk7rExeurLY9OqYZUVpkxI5Hww5ZPJfI5
   1x/1T/Sc+PXMMdlOKN0YwkJEO5kCE88PRyV+1iQkQb4CS5ucGbChL52IvPmEmBOfpZ6ZHDukgYsX
   yOSRzigGmlgPDTJ5HOqVuMJTcN0yJfBOXRVwCUfv5DX7eyVDfR1f
   </ds:X509Certificate>
   </ds:X509Data>
   <ds:KeyValue>
   <ds:RSAKeyValue>
   <ds:Modulus>
   kWHY7By9z2VRHr/jM2BM0+D8wRaCV23kPQddfI3WQOSXDBbc5R1Zgw7D9TPuCa0wt8ENQbyF9Ct3
   BQ0dU3gJ0Mxot72GHku/0QK/xt3UHhr1YmdMtotkXN8eJiUSKF1aRcu4BU9eqI28ZTWP9UmPT7oS
   FrygkOSYtDNcQ6DbygZj37Yylf8nX2bwMU/Hvr5EXZLH99rVRWDfLWHQtH6P5v3XEL4zAr4NQk1j
   RIT/Vv4xlsDGav8ByqG+tdmyKO9BxPnz2kFd2KxAqoygsa354C+W97Z4y5uTTc/PY5wCx2HzScZ0
   IcMWY+JvplSOKHjoTb8qD/Q7bM8a3c+lEawwaw==
   </ds:Modulus>
   <ds:Exponent>AQAB</ds:Exponent>
   </ds:RSAKeyValue>
   </ds:KeyValue>
   </ds:KeyInfo>
   <ds:Object Id="Signature1014964-Object494810"><etsi:QualifyingProperties Target="#Signature1014964"><etsi:SignedProperties Id="Signature1014964-SignedProperties955166"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-12-14T17:30:02-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>1wAzKAO5CBpL9UQSXgkVo9xin8I=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>10625674</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-241635"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]></comprobante>
    <mensajes></mensajes>
   </Authorization>`,
  BILL_ADITIONAL_FIELDS: `<Authorization>
  <estado>AUTORIZADO</estado>
  <numeroAutorizacion>0112202301179214148600120310500006249534126153323</numeroAutorizacion>
  <fechaAutorizacion>2023-12-01T11:15:09-05:00</fechaAutorizacion>
  <ambiente>PRODUCCIÓN</ambiente>
  <comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8" standalone="no"?><factura xmlns:ns2="http://www.w3.org/2000/09/xmldsig#" id="comprobante" version="2.1.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>PROMOTORA ECUATORIANA DE CAFE DE COLOMBIA S.A. PROCAFECOL ECUADOR</razonSocial><nombreComercial>JUAN VALDEZ</nombreComercial><ruc>1792141486001</ruc><claveAcceso>0112202301179214148600120310500006249534126153317</claveAcceso><codDoc>01</codDoc><estab>031</estab><ptoEmi>050</ptoEmi><secuencial>000624953</secuencial><dirMatriz>PICHINCHA / QUITO / INAQUITO / COREA 126 Y AV. AMAZONAS</dirMatriz></infoTributaria><infoFactura><fechaEmision>01/12/2023</fechaEmision><dirEstablecimiento>PICHINCHA / QUITO / REPUBLICA DEL SALVADOR S/N Y PORTUGAL</dirEstablecimiento><contribuyenteEspecial>826</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionComprador>05</tipoIdentificacionComprador><razonSocialComprador>pepito perez  </razonSocialComprador><identificacionComprador>1206317771</identificacionComprador><totalSinImpuestos>3.12</totalSinImpuestos><totalDescuento>0.00</totalDescuento><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><baseImponible>3.12</baseImponible><tarifa>12</tarifa><valor>0.37</valor></totalImpuesto></totalConImpuestos><propina>0.00</propina><importeTotal>3.49</importeTotal><moneda>DOLAR</moneda><pagos><pago><formaPago>01</formaPago><total>3.49</total><plazo>0</plazo><unidadTiempo>DÍAS</unidadTiempo></pago></pagos></infoFactura><detalles><detalle><codigoPrincipal>133</codigoPrincipal><descripcion>CAPUCCINO 9OZ</descripcion><cantidad>1.0</cantidad><precioUnitario>2.232100</precioUnitario><descuento>0.0</descuento><precioTotalSinImpuesto>2.23</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>2.23</baseImponible><valor>0.27</valor></impuesto></impuestos></detalle><detalle><codigoPrincipal>2011</codigoPrincipal><descripcion>CAMBIO LECHE ALMENDRA</descripcion><cantidad>1.0</cantidad><precioUnitario>0.883900</precioUnitario><descuento>0.0</descuento><precioTotalSinImpuesto>0.88</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>0.88</baseImponible><valor>0.11</valor></impuesto></impuestos></detalle></detalles><infoAdicional><campoAdicional nombre="CORREO 1">kfc@kfc.com.ec</campoAdicional></infoAdicional><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature751718">
 <ds:SignedInfo Id="Signature-SignedInfo125302">
 <ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
 <ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
 <ds:Reference Id="SignedPropertiesID845358" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature751718-SignedProperties199377">
 <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
 <ds:DigestValue>v/6xPZsiAiY6jRB7hvAyDhLIOnQ=</ds:DigestValue>
 </ds:Reference>
 <ds:Reference URI="#Certificate173626">
 <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
 <ds:DigestValue>TCF+pp+Jpr6zvEZ7CNL+AKXfb8o=</ds:DigestValue>
 </ds:Reference>
 <ds:Reference Id="Reference-ID-394797" URI="#comprobante">
 <ds:Transforms>
 <ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
 </ds:Transforms>
 <ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
 <ds:DigestValue>NSGjIZFWE0RvdQo/vn1B7pRw01Q=</ds:DigestValue>
 </ds:Reference>
 </ds:SignedInfo>
 <ds:SignatureValue Id="SignatureValue942905">
 GnQ7VkmzX2xnEblR/J4lgAi21Sbc0TdmT0UptyUl3nJljWRFTQr81Pg5PiRGgvthA3/UdrQ/HSvS
 BbXsMaPrjdV0nqJJ0tcbHrbtnHucd+MW/5sbMQkAKXz8/CvXqk/ed5V1Q5s8/BFSdqC8fFomE/p4
 64r1U5X1gDIRbKN0O62FTw3UfKP+ysMz5FDCVsX4c4PHcPYCYqtlbjCaVhRTzl+5cxSXb0Z8pGma
 m6JCt4lMMZjtAXp2wyGoiEhkOx+dG9FGzBIqah18vEG5G/yC8gKDTKpMNIkUtnmfZdEofMvd4S0S
 PW+5TKGHAKxS4MnWpkQXRMjqisxiP+EYxaB+gw==
 </ds:SignatureValue>
 <ds:KeyInfo Id="Certificate173626">
 <ds:X509Data>
 <ds:X509Certificate>
 MIIJ3zCCB8egAwIBAgIIEhv4Mndi4NIwDQYJKoZIhvcNAQELBQAwgbgxCzAJBgNVBAYTAkVTMUQw
 QgYDVQQHDDtCYXJjZWxvbmEgKHNlZSBjdXJyZW50IGFkZHJlc3MgYXQgd3d3LnVhbmF0YWNhLmNv
 bS9hZGRyZXNzKTEWMBQGA1UECgwNVUFOQVRBQ0EgUy5BLjEVMBMGA1UECwwMVFNQLVVBTkFUQUNB
 MRowGAYDVQQDDBFVQU5BVEFDQSBDQTIgMjAxNjEYMBYGA1UEYQwPVkFURVMtQTY2NzIxNDk5MB4X
 DTIyMDQyMDIyMjgwMFoXDTI0MDQxOTIyMjgwMFowgf8xCzAJBgNVBAYTAkVDMUowSAYDVQQKDEFQ
 Uk9NT1RPUkEgRUNVQVRPUklBTkEgREUgQ0FGRSBERSBDT0xPTUJJQSBTLkEuIFBST0NBRkVDT0wg
 RUNVQURPUjEZMBcGA1UEDAwQQ09OVEFET1IgR0VORVJBTDETMBEGA1UEBAwKRElBWiBEQUxHTzEX
 MBUGA1UEKgwORElFR08gTUFVUklDSU8xGTAXBgNVBAUTEElEQ0VDLTE3MTMzNDE0MjYxIjAgBgNV
 BAMMGURJRUdPIE1BVVJJQ0lPIERJQVogREFMR08xHDAaBgNVBGEME1ZBVEVDLTE3OTIxNDE0ODYw
 MDEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQCgTY4vOKJsKnRyfQWAA+INuMWsI+Xj
 dcCpEO7VufnPuBZydwaxntSR5YbVbdPwhxMTDa63jYb1mSWItUlaKGeAOuAZ/7VI4eGzv5tY6liq
 b0LoYZb4kbzB3kJPnOFGbWS5mJGg/8NoZi2uhR7VGB4HinAPP8SEwQEyTz8I4QuaClbFSGbxTNvS
 3O0+aP9S70UCHXdtiBOLghg/4PDvIwpdvg9iQBgAMEJicnQJUswj4QzB3D9bVk3o6Ek3/nKYJGXJ
 MZUehIXTsVIDj6gQF5atjRMQBetibC95j4leLbgqMR8RoYTtDa1Ph3Vb8iJsErry8ZIXBJISa164
 /mBPbgI5AgMBAAGjggSiMIIEnjCB1wYIKwYBBQUHAQEEgcowgccwVQYIKwYBBQUHMAKGSWh0dHA6
 Ly93d3cudWFuYXRhY2EuY29tL3B1YmxpYy9kb3dubG9hZC90c3BfY2VydGlmaWNhdGVzL3N1Ym9y
 ZGluYXRlMS5jcnQwNgYIKwYBBQUHMAGGKmh0dHA6Ly9vY3NwMS51YW5hdGFjYS5jb20vcHVibGlj
 L3BraS9vY3NwLzA2BggrBgEFBQcwAYYqaHR0cDovL29jc3AyLnVhbmF0YWNhLmNvbS9wdWJsaWMv
 cGtpL29jc3AvMB0GA1UdDgQWBBSuy1m4kwmpNbETyc4nlRrOM+kCfzAMBgNVHRMBAf8EAjAAMB8G
 A1UdIwQYMBaAFH1X52BzzgdGqeKjaPDhEbJ0knP9MIGxBgNVHSAEgakwgaYwgaMGDCsGAQQBgvE2
 ZgICATCBkjA3BggrBgEFBQcCARYraHR0cHM6Ly93d3cudWFuYXRhY2EuY29tL3B1YmxpYy9wa2kv
 ZHBjLWVjLzBXBggrBgEFBQcCAjBLDElDRVJUSUZJQ0FETyBERSBNSUVNQlJPIERFIEVNUFJFU0Eg
 TyBFTiBSRUxBQ0lPTiBERSBERVBFTkRFTkNJQSBFTiBBUkNISVZPMIGPBgNVHR8EgYcwgYQwQKA+
 oDyGOmh0dHA6Ly9jcmwxLnVhbmF0YWNhLmNvbS9wdWJsaWMvcGtpL2NybC9DQTJzdWJvcmRpbmFk
 YS5jcmwwQKA+oDyGOmh0dHA6Ly9jcmwyLnVhbmF0YWNhLmNvbS9wdWJsaWMvcGtpL2NybC9DQTJz
 dWJvcmRpbmFkYS5jcmwwDgYDVR0PAQH/BAQDAgXgMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEF
 BQcDBDCCAf0GA1UdEQSCAfQwggHwgRVkaWVnby5kaWF6QGtmYy5jb20uZWOgGwYLKwYBBAGC8TZm
 AwGgDAwKMTcxMzM0MTQyNqAfBgsrBgEEAYLxNmYDAqAQDA5ESUVHTyBNQVVSSUNJT6AVBgsrBgEE
 AYLxNmYDA6AGDARESUFaoBYGCysGAQQBgvE2ZgMEoAcMBURBTEdPoCEGCysGAQQBgvE2ZgMFoBIM
 EENPTlRBRE9SIEdFTkVSQUygKQYLKwYBBAGC8TZmAwegGgwYQ09SRUEgMTI2IFkgQVYuIEFNQVpP
 TkFToB8GCysGAQQBgvE2ZgMIoBAMDjAwNTkzOTk0MDAyNDk2oBYGCysGAQQBgvE2ZgMJoAcMBVFV
 SVRPoFIGCysGAQQBgvE2ZgMKoEMMQVBST01PVE9SQSBFQ1VBVE9SSUFOQSBERSBDQUZFIERFIENP
 TE9NQklBIFMuQS4gUFJPQ0FGRUNPTCBFQ1VBRE9SoB4GCysGAQQBgvE2ZgMLoA8MDTE3OTIxNDE0
 ODYwMDGgEwYLKwYBBAGC8TZmAwygBAwCRUOgQAYLKwYBBAGC8TZmAzKgMQwvTUlFTUJSTyBERSBF
 TVBSRVNBIE8gRU4gUkVMQUNJT04gREUgREVQRU5ERU5DSUGgGAYLKwYBBAGC8TZmAzOgCQwHQVJD
 SElWTzANBgkqhkiG9w0BAQsFAAOCAgEAiwAnNd3yK2JqhAb05kTYv9fy5ttAQqz8t4Ytp/916ZAs
 7VWbSVmMQ9y/qPhtSSJ54UYmfIPHbkphfb+dG85ZeJ4WF9XA0o9ZhBaGjNkDTnjDcpzn08j2X58p
 DlzpbZxPRje9+Hqf4M6fpdnsAOcIDKjg5AiqJpPdthOAD+LJo3XtoqvgDr3q2a89EBner183negn
 u7AqJtirSN5DOHDyfWiKbRZ4I1N6FMAzZbxm1TTsov9ZWsc2i+ihRjaDHODHe+J780CzU0xaXWgD
 VktVNCElhMvziGnFIdcxvKqhcJmstzsnUGxx6ye6fXd1Far8KkA1t6Ytab4g3pQSnbTBZWD1Rz6+
 Rj4h0RNrAHgdb1BUQliuxi+CwuLkLMfZAxQKlJZclztdop9bMBLCp/BZTFCcyxp9Ccbe0Vypm73y
 uFAHi2Lc3JzJb5t4utfP1ROUkSoO2mmmhf+OTO6CxoHzX4ermLEkw4gqzTBY8fFzc/PbT6V2jJqL
 uACDxyGW/D8yw67DhFcE8vOjAMWKduHzTmOEcRYM/qcv5VMnUeJkJy7uUV4sNq99TnKtaT+9wiX8
 7RY7PHUCFb7QcaNpxOOhUG0Nf7Y305cIB6eW8egO9r4zQrwwpos5KgIbuzum7N8f6DFA4ERA+PsT
 A+50WqVrTf4NHzqv+lj1K6g6DSUcrms=
 </ds:X509Certificate>
 </ds:X509Data>
 <ds:KeyValue>
 <ds:RSAKeyValue>
 <ds:Modulus>
 oE2OLziibCp0cn0FgAPiDbjFrCPl43XAqRDu1bn5z7gWcncGsZ7UkeWG1W3T8IcTEw2ut42G9Zkl
 iLVJWihngDrgGf+1SOHhs7+bWOpYqm9C6GGW+JG8wd5CT5zhRm1kuZiRoP/DaGYtroUe1RgeB4pw
 Dz/EhMEBMk8/COELmgpWxUhm8Uzb0tztPmj/Uu9FAh13bYgTi4IYP+Dw7yMKXb4PYkAYADBCYnJ0
 CVLMI+EMwdw/W1ZN6OhJN/5ymCRlyTGVHoSF07FSA4+oEBeWrY0TEAXrYmwveY+JXi24KjEfEaGE
 7Q2tT4d1W/IibBK68vGSFwSSEmteuP5gT24COQ==
 </ds:Modulus>
 <ds:Exponent>AQAB</ds:Exponent>
 </ds:RSAKeyValue>
 </ds:KeyValue>
 </ds:KeyInfo>
 <ds:Object Id="Signature751718-Object322269"><etsi:QualifyingProperties Target="#Signature751718"><etsi:SignedProperties Id="Signature751718-SignedProperties199377"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-12-01T11:06:25-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>Jgvua2jizhEDwYlK+wheIqRkz6I=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>2.5.4.97=#0c0f56415445532d413636373231343939,CN=UANATACA CA2 2016,OU=TSP-UANATACA,O=UANATACA S.A.,L=Barcelona (see current address at www.uanataca.com/address),C=ES</ds:X509IssuerName><ds:X509SerialNumber>1304909412688912594</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-394797"><etsi:Description>comprobateFirma</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]></comprobante>
  <mensajes></mensajes>
 </Authorization>`,
  BILL_ADITIONAL_FIELDS_2: `<Authorization>
 <estado>AUTORIZADO</estado>
 <numeroAutorizacion>2412202301179032283100120090210000671826226011111</numeroAutorizacion>
 <fechaAutorizacion>2023-12-24T14:42:54-05:00</fechaAutorizacion>
 <ambiente>PRODUCCIÓN</ambiente>
 <comprobante>
     <![CDATA[
     <?xml version="1.0" encoding="UTF-8"?><factura id="comprobante" version="1.0.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>BEBELANDIA S. A.</razonSocial><nombreComercial>BEBEMUNDO</nombreComercial><ruc>1790322831001</ruc><claveAcceso>2412202301179032283100120090210000671826226011210</claveAcceso><codDoc>01</codDoc><estab>009</estab><ptoEmi>021</ptoEmi><secuencial>000067182</secuencial><dirMatriz>Av Eloy Alfaro S/N y Avigiras</dirMatriz></infoTributaria><infoFactura><fechaEmision>24/12/2023</fechaEmision><dirEstablecimiento>AV LA REPUBLICA S/N Y AMAZONAS</dirEstablecimiento><contribuyenteEspecial>5368</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionComprador>05</tipoIdentificacionComprador><razonSocialComprador>pepito perez</razonSocialComprador><identificacionComprador>12063133331</identificacionComprador><totalSinImpuestos>27.10</totalSinImpuestos><totalDescuento>3.02</totalDescuento><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><baseImponible>27.10</baseImponible><valor>3.25</valor></totalImpuesto>
     </totalConImpuestos><propina>0.00</propina><importeTotal>30.35</importeTotal><moneda>DOLAR</moneda><pagos><pago><formaPago>19</formaPago><total>30.35</total><plazo>0</plazo><unidadTiempo>dias</unidadTiempo></pago>
     </pagos><valorRetIva>0.00</valorRetIva><valorRetRenta>0.00</valorRetRenta></infoFactura><detalles><detalle><codigoPrincipal>LAF.142039</codigoPrincipal><codigoAuxiliar>0000900133785</codigoAuxiliar><descripcion>Napis panales xg x100</descripcion><cantidad>1</cantidad><precioUnitario>30.12</precioUnitario><descuento>3.02</descuento><precioTotalSinImpuesto>27.10</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>27.10</baseImponible><valor>3.26</valor></impuesto>
         </impuestos>
     </detalle><detalle><codigoPrincipal>FLX.funda1020x600 recicl</codigoPrincipal><codigoAuxiliar>23521926</codigoAuxiliar><descripcion>Fundon 600x1020 reciclado nuevo logo</descripcion><cantidad>1</cantidad><precioUnitario>0.00</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>0.00</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>0.00</baseImponible><valor>0.00</valor></impuesto>
         </impuestos>
     </detalle>
 </detalles><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature1015504"><ds:SignedInfo Id="Signature-SignedInfo429567"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315" /><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1" /><ds:Reference Id="SignedPropertiesID658975" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature1015504-SignedProperties568681"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" /><ds:DigestValue>7TuueiYymi3pDxQm+VTZyZOIucY=</ds:DigestValue></ds:Reference><ds:Reference URI="#Certificate1688486"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" /><ds:DigestValue>l/q5apGSkqvSV8r8tyRcIHdGDHI=</ds:DigestValue></ds:Reference><ds:Reference Id="Reference-ID-614226" URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature" />
</ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" /><ds:DigestValue>jWsgDG5Nx1tpwpOqaIz5cz8uFkw=</ds:DigestValue></ds:Reference>
</ds:SignedInfo><ds:SignatureValue Id="SignatureValue453031">
mkQJ11zEjXyC9hntGoUe0wS5UjmukKqibUBK+HUIa1XiVRppfj69QfMXmnVD5W/b9cqvrn5Kp3go
5UOvOTJBnkM6sUzVhkEbkbxhLbFMuW0AV3EErLEgYTVdfdfIxwZjYHYLT6T8MbTZoeGSxj9gaeip
l9SBrgex5cQxqG9bCl5VMJSAyjQ0OCkk1er6HAsC0wL5u/iy0JvJdWBvEazCzDkYzYKJvuNShqJR
apiapCTP2hhLJ77FNgXDXTzi7kAZJfTzf5Kl41epzNZI/Gzy/+hTBQYdFKJV+BzRB78KXIWFiJ0L
uQhZad1byTaJh4VOigmW7F7GNz0rgwZZLeBSMA==
</ds:SignatureValue><ds:KeyInfo Id="Certificate1688486"><ds:X509Data><ds:X509Certificate>
MIIL/TCCCeWgAwIBAgIEEa4xHTANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMjA5MDExOTI4NDhaFw0yNDA4MzExOTI4NDhaMIGcMSUw
IwYDVQQDDBxFTFNBIEFMRUpBTkRSQSBQSUxBIENISUNBSVpBMRUwEwYDVQQFEwwwMTA5MjIxNDM4
MjkxMDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsG
A1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIIBIjANBgkqhkiG9w0BAQEF
AAOCAQ8AMIIBCgKCAQEArVoyGqNFLgmYBu+z4DeLNF+q9rrPTKYHP7p8EKAzOIb+vAExj25tEww9
huKJOeHXn0J4CmwZjIfBBo6R9jhoQtrlj6RAeXxO0coP+E3y7H6JpLZzW0m4rpfCXfx3o2wtqqps
ttT7GefQg9aUkmg+ohQ3utAIvwVq/z35O+sFC3fcR6kMIYgz/nQklcrwLNWlDi284LDLUjdxMMBZ
iRqpiTlwUrv/Itkg7vArsgU3B7xQCc9yrP0zQPnhQBWRSag9PCjoD1uiqhWmsJ2L5G7cdAyYhptx
4/2G3h9Lq4ifEIrPhEYi5S83rFpH/UxJH/tFhjntsvGI/6TRXO0rs53q+wIDAQABo4IHRjCCB0Iw
DAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSMusoRV3glgB1rCktVv42uYt29jzBZBggrBgEFBQcB
AQRNMEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJj
YS9wdWJsaWN3ZWIvc3RhdHVzL29jc3Awgc8GA1UdLgSBxzCBxDCBwaCBvqCBu4aBuGxkYXA6Ly9s
ZGFwc2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lP
TiBTVUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElO
Rk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQz9kZWx0YVJldm9jYXRpb25MaXN0
P2Jhc2UwJgYDVR0RBB8wHYEbYWxlamFuZHJhLnBpbGFAYmViZW11bmRvLmVjMIIBEgYDVR0gBIIB
CTCCAQUwYAYKKwYBBAGCpnICCjBSMFAGCCsGAQUFBwICMEQeQgBDAGUAcgB0AGkAZgBpAGMAYQBk
AG8AIABkAGUAIABNAGkAZQBtAGIAcgBvACAAZABlACAARQBtAHAAcgBlAHMAYTCBoAYKKwYBBAGC
pnICBDCBkTCBjgYIKwYBBQUHAgEWgYFodHRwczovL3d3dy5zZWN1cml0eWRhdGEubmV0LmVjL3dw
LWNvbnRlbnQvZG93bmxvYWRzL05vcm1hdGl2YXMvUF9kZV9DZXJ0aWZpY2Fkb3MvUG9saXRpY2Fz
IGRlIENlcnRpZmljYWRvIE1pZW1icm8gZGUgRW1wcmVzYS5wZGYwggKiBgNVHR8EggKZMIIClTCB
5aBBoD+GPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJjYS9wdWJsaWN3ZWIv
c3RhdHVzL29jc3CigZ+kgZwwgZkxOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9O
IFNVQkNBLTIgU0VDVVJJVFkgREFUQTEwMC4GA1UECwwnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9O
IERFIElORk9STUFDSU9OMR0wGwYDVQQKDBRTRUNVUklUWSBEQVRBIFMuQS4gMjELMAkGA1UEBhMC
RUMwgceggcSggcGGgb5sZGFwOi8vbGRhcHNkY2EyLnNlY3VyaXR5ZGF0YS5uZXQuZWMvQ049QVVU
T1JJREFEIERFIENFUlRJRklDQUNJT04gU1VCQ0EtMiBTRUNVUklUWSBEQVRBLE9VPUVOVElEQUQg
REUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTixPPVNFQ1VSSVRZIERBVEEgUy5BLiAyLEM9
RUM/Y2VydGlmaWNhdGVSZXZvY2F0aW9uTGlzdD9iYXNlMIHgoIHdoIHahoHXaHR0cHM6Ly9wb3J0
YWwtb3BlcmFkb3IyLnNlY3VyaXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVibGljd2ViL3dlYmRpc3Qv
Y2VydGRpc3Q/Y21kPWNybCZpc3N1ZXI9Q049QVVUT1JJREFEIERFIENFUlRJRklDQUNJT04gU1VC
Q0EtMiBTRUNVUklUWSBEQVRBLE9VPUVOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1B
Q0lPTixPPVNFQ1VSSVRZIERBVEEgUy5BLiAyLEM9RUMwHQYDVR0OBBYEFEo7LE4tvoV6pR1s4R2c
ibIsrcyEMCsGA1UdEAQkMCKADzIwMjIwOTAxMTkyODQ4WoEPMjAyNDA4MzExOTI4NDhaMAsGA1Ud
DwQEAwIF4DAdBgorBgEEAYKmcgMFBA8MDVNVQiBDT05UQURPUkEwGgYKKwYBBAGCpnIDAQQMDAox
NzEzNzM0OTkyMBUGCisGAQQBgqZyAwkEBwwFUVVJVE8wEQYKKwYBBAGCpnIDIgQDDAEuMDMGCisG
AQQBgqZyAwcEJQwjQVYgRUxPWSBBTEZBUk8gU04gWSBERSBMQVMgQVZJR0lSQVMwHgYKKwYBBAGC
pnIDAgQQDA5FTFNBIEFMRUpBTkRSQTAfBgorBgEEAYKmcgMgBBEMDzc3Nzc3Nzc3Nzc3Nzc3NzAT
BgorBgEEAYKmcgMhBAUMA1BGWDAXBgorBgEEAYKmcgMMBAkMB0VDVUFET1IwFAYKKwYBBAGCpnID
AwQGDARQSUxBMB8GCisGAQQBgqZyAwoEEQwPQkVCRUxBTkRJQSBTIEEgMB0GCisGAQQBgqZyAwsE
DwwNMTc5MDMyMjgzMTAwMTASBgorBgEEAYKmcgMdBAQMAk5vMBgGCisGAQQBgqZyAwQECgwIQ0hJ
Q0FJWkEwGgYKKwYBBAGCpnIDCAQMDAowOTk1NDYwNzE1MA0GCSqGSIb3DQEBCwUAA4ICAQCtMfHh
dU267v4QxW5L3FwZkyuks1M1e8IE+2PxtsOk4RuWl5sNZv74zJcERAhNReDue75TACPEkX4Eta4B
3WMXb5KkttBN5yBx2tVS3l2lX5a2mIKC+eiZTwXTWUfb8EfVNpNcR5en5Aew2pnRQcsM411w5ibU
TRodBR5KaeR4WgwWrahVrX5ZI1v0xKku0ETw8UNXik8avaBQNvL1smHokpC6BmFIz2TmuH+C2ft0
oAaJndN9Ry+s7h9WfdcK6yL1HQo7ZvdLw3txgIaDdAzK1aODSX6Hfc8Na4UOvaXlK9XiRc6goT2g
xzm9QG6Gjo7t6SjO4BzX/cLGUJeD6HJhXZVG3hyASii2N0BM2BvJc2/l9jrjaM3Y5jObk4+uzO21
ZoIQOxd8xv4sF7O7G1qd+aPmrSa26CeIbg33PN4fT1yLAdWmEXT3IeHDdZUCyunb25XD/wrEHHEd
iGkwHrEqWq7p4rmkWPlBlMq9eGBK2EI/mUECHO8iJJYo0mzEp1m55WeO0sAtp6Pwu/AvZnjt9maK
XkTW0wssaBxduJCu+cNlGCEpFTgPUuoXjd9+FXzb7NPaXGec4/5Nov3STbGpsn0E2B80izdm/HYE
gaKKZt0bX4JO5sFpI/Qxdn+rjctRw1HoHk9qqRta9eSJ87HylyJ4eoei8FsYjBoJP+M5/g==
</ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
rVoyGqNFLgmYBu+z4DeLNF+q9rrPTKYHP7p8EKAzOIb+vAExj25tEww9huKJOeHXn0J4CmwZjIfB
Bo6R9jhoQtrlj6RAeXxO0coP+E3y7H6JpLZzW0m4rpfCXfx3o2wtqqpsttT7GefQg9aUkmg+ohQ3
utAIvwVq/z35O+sFC3fcR6kMIYgz/nQklcrwLNWlDi284LDLUjdxMMBZiRqpiTlwUrv/Itkg7vAr
sgU3B7xQCc9yrP0zQPnhQBWRSag9PCjoD1uiqhWmsJ2L5G7cdAyYhptx4/2G3h9Lq4ifEIrPhEYi
5S83rFpH/UxJH/tFhjntsvGI/6TRXO0rs53q+w==
</ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue>
</ds:KeyValue>
</ds:KeyInfo><ds:Object Id="Signature1015504-Object810684"><etsi:QualifyingProperties Target="#Signature1015504"><etsi:SignedProperties Id="Signature1015504-SignedProperties568681"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-12-24T14:42:53-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1" /><ds:DigestValue>n/XW/jNuStruXnOoolhnoptIfCw=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>296628509</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-614226"><etsi:Description>comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]>
</comprobante>
<mensajes></mensajes>
</Authorization>`,
  CREDIT_NOTE: `<Authorization>
<estado>AUTORIZADO</estado>
<numeroAutorizacion>2411202304179001691900120011010047297422411123419</numeroAutorizacion>
<fechaAutorizacion>2023-11-27T17:51:53-05:00</fechaAutorizacion>
<ambiente>PRODUCCIÓN</ambiente>
<comprobante>
    <![CDATA[
    <?xml version="1.0" encoding="UTF-8"?><notaCredito id="comprobante" version="1.1.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>CORPORACION FAVORITA C.A.</razonSocial><nombreComercial>CORPORACION FAVORITA C.A.</nombreComercial><ruc>1790016919001</ruc><claveAcceso>2411202304179001691900120011010047297422411000019</claveAcceso><codDoc>04</codDoc><estab>001</estab><ptoEmi>101</ptoEmi><secuencial>004729742</secuencial><dirMatriz>AV. GENERAL ENRIQUEZ VIA COTOGCHOA</dirMatriz></infoTributaria><infoNotaCredito><fechaEmision>24/11/2023</fechaEmision><dirEstablecimiento>AV.GRAL ENRIQUEZ SN VIA COTOGCHOA</dirEstablecimiento><tipoIdentificacionComprador>04</tipoIdentificacionComprador><razonSocialComprador>pepito perez</razonSocialComprador><identificacionComprador>1711236854001</identificacionComprador><contribuyenteEspecial>5368</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><codDocModificado>01</codDocModificado><numDocModificado>139-109-000384072</numDocModificado><fechaEmisionDocSustento>24/11/2023</fechaEmisionDocSustento><totalSinImpuestos>0.00</totalSinImpuestos><valorModificacion>0.07</valorModificacion><moneda>DOLAR</moneda><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><baseImponible>0.00</baseImponible><valor>0.00</valor><valorDevolucionIva>0.00</valorDevolucionIva></totalImpuesto><totalImpuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><baseImponible>0.07</baseImponible><valor>0.00</valor></totalImpuesto></totalConImpuestos><motivo>Descuento Plan de recompensas MaxiRecargas</motivo></infoNotaCredito><detalles><detalle><codigoInterno>786104256530</codigoInterno><codigoAdicional>786104256530</codigoAdicional><descripcion>MAXIRECARGAS TARIFA 0</descripcion><cantidad>1.0000</cantidad><precioUnitario>0.0700</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>0.07</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>0</codigoPorcentaje><tarifa>0.00</tarifa><baseImponible>0.07</baseImponible><valor>0.00</valor></impuesto></impuestos></detalle></detalles><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature934795"><ds:SignedInfo Id="Signature-SignedInfo168114"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod><ds:Reference Id="SignedPropertiesID339416" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature934795-SignedProperties75153"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>fXUW5HJ+3kgXdgOFZsz3ul7wBig=</ds:DigestValue></ds:Reference><ds:Reference URI="#Certificate1804750"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>a648tWCIkwzcu7CZEVX3TlmJ9YQ=</ds:DigestValue></ds:Reference><ds:Reference Id="Reference-ID-3385" URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>gy+D2VJshUssthmYrMJeYitgBKA=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue Id="SignatureValue179696">
geLcQEJ81TUUsILUC3jUN5oJnDwpL3Ce1ewd8p9uZjkyz8GDVMbNTTpLs5tQf2qpzTdGOPrczE2P
JQAzO5WDiZjyDwCpt7JPKbbRpX4wTz7mBMgW5ep/Sn3d1jYzQeUMCEY/Gv7ojsdWuL3eidDWOf43
hLNtOTEXy8iej9rizGPovp1H+71aLXqyml7rdnQr56j7jzn7SH0GN8DezJT8zelkW0sziA1sUVMc
s/WneEZ3OhR5lgWVVRAq98Lkk7by4P+fb5fSwRjaF6MkUvB0+wzVDQdtMaicxhkHcAoOyzjq9Dva
Rjp/7mPLU6/sCj6XU7R26oXvbOUZxi6Jcdichw==
</ds:SignatureValue><ds:KeyInfo Id="Certificate1804750"><ds:X509Data><ds:X509Certificate>
MIIL/TCCCeWgAwIBAgIESwvSATANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMjA0MjIxOTMyMTNaFw0yNDA0MjExOTMyMTNaMIGZMSIw
IAYDVQQDDBlKT1JHRSBMVUlTIEJSQVZPIEFSRUxMQU5PMRUwEwYDVQQFEwwyMjA0MjIxNDQxNTcx
MDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsGA1UE
CgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIIBIjANBgkqhkiG9w0BAQEFAAOC
AQ8AMIIBCgKCAQEAySbGRqBHe1HF/u9W5vmmbKfZrZokGHPZ20eyHAgzMhMiDF6yH1lvv0FhtrNX
+eYZ2ZKubv/Q9XtFwkCurorBuHhRgrAiDC1aizLp2O6fQKyREtLGHgWp29VK0Qnm3LAARfjDjfwZ
ix9oK085ejsX8VnhO4aN4sZJFXjs6x2qWTjvSoLXjUVgwjwIh0VuUqC2kTAQMwXDU6ez0pZycNoJ
JQaitIk4RrdztwyaRwipxc4eHXqMXYt5d8wCICBi4YG/Jdqig5sjjL7+zoLbZnIFWnhw6JfvBPPE
/4RQnCZrmqf7d0zhFF7/hdqlLfUTzDA1lGwvurLquqA/WAQbodTP/wIDAQABo4IHSTCCB0UwDAYD
VR0TAQH/BAIwADAfBgNVHSMEGDAWgBSMusoRV3glgB1rCktVv42uYt29jzBZBggrBgEFBQcBAQRN
MEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJjYS9w
dWJsaWN3ZWIvc3RhdHVzL29jc3Awgc8GA1UdLgSBxzCBxDCBwaCBvqCBu4aBuGxkYXA6Ly9sZGFw
c2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBT
VUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9S
TUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQz9kZWx0YVJldm9jYXRpb25MaXN0P2Jh
c2UwHgYDVR0RBBcwFYETamJyYXZvQGZhdm9yaXRhLmNvbTCCARIGA1UdIASCAQkwggEFMGAGCisG
AQQBgqZyAgowUjBQBggrBgEFBQcCAjBEHkIAQwBlAHIAdABpAGYAaQBjAGEAZABvACAAZABlACAA
TQBpAGUAbQBiAHIAbwAgAGQAZQAgAEUAbQBwAHIAZQBzAGEwgaAGCisGAQQBgqZyAgQwgZEwgY4G
CCsGAQUFBwIBFoGBaHR0cHM6Ly93d3cuc2VjdXJpdHlkYXRhLm5ldC5lYy93cC1jb250ZW50L2Rv
d25sb2Fkcy9Ob3JtYXRpdmFzL1BfZGVfQ2VydGlmaWNhZG9zL1BvbGl0aWNhcyBkZSBDZXJ0aWZp
Y2FkbyBNaWVtYnJvIGRlIEVtcHJlc2EucGRmMIICogYDVR0fBIICmTCCApUwgeWgQaA/hj1odHRw
Oi8vb2NzcGd3LnNlY3VyaXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3Nw
ooGfpIGcMIGZMTkwNwYDVQQDDDBBVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0yIFNF
Q1VSSVRZIERBVEExMDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1B
Q0lPTjEdMBsGA1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIHHoIHEoIHB
hoG+bGRhcDovL2xkYXBzZGNhMi5zZWN1cml0eWRhdGEubmV0LmVjL0NOPUFVVE9SSURBRCBERSBD
RVJUSUZJQ0FDSU9OIFNVQkNBLTIgU0VDVVJJVFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklD
QUNJT04gREUgSU5GT1JNQUNJT04sTz1TRUNVUklUWSBEQVRBIFMuQS4gMixDPUVDP2NlcnRpZmlj
YXRlUmV2b2NhdGlvbkxpc3Q/YmFzZTCB4KCB3aCB2oaB12h0dHBzOi8vcG9ydGFsLW9wZXJhZG9y
Mi5zZWN1cml0eWRhdGEubmV0LmVjL2VqYmNhL3B1YmxpY3dlYi93ZWJkaXN0L2NlcnRkaXN0P2Nt
ZD1jcmwmaXNzdWVyPUNOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNVQkNBLTIgU0VDVVJJ
VFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04sTz1TRUNV
UklUWSBEQVRBIFMuQS4gMixDPUVDMB0GA1UdDgQWBBTmN2bOeFgOvY2Qkc9MCNpsRiGCoDArBgNV
HRAEJDAigA8yMDIyMDQyMjE5MzIxM1qBDzIwMjQwNDIxMTkzMjEzWjALBgNVHQ8EBAMCBeAwJwYK
KwYBBAGCpnIDBQQZDBdHRVJFTlRFIERFIENPTlRBQklMSURBRDAaBgorBgEEAYKmcgMBBAwMCjE3
MDgwMzMyNTEwGgYKKwYBBAGCpnIDCQQMDApSVU1JTklBSFVJMBEGCisGAQQBgqZyAyIEAwwBLjAo
BgorBgEEAYKmcgMHBBoMGEFWLiBHRU5FUkFMIEVOUklRVUVaIFMgTjAaBgorBgEEAYKmcgMCBAwM
CkpPUkdFIExVSVMwHwYKKwYBBAGCpnIDIAQRDA8wMDIwMDEwMDAzNDU4ODQwEwYKKwYBBAGCpnID
IQQFDANQRlgwFwYKKwYBBAGCpnIDDAQJDAdFQ1VBRE9SMBUGCisGAQQBgqZyAwMEBwwFQlJBVk8w
KQYKKwYBBAGCpnIDCgQbDBlDT1JQT1JBQ0lPTiBGQVZPUklUQSBDLkEuMB0GCisGAQQBgqZyAwsE
DwwNMTc5MDAxNjkxOTAwMTASBgorBgEEAYKmcgMdBAQMAk5vMBgGCisGAQQBgqZyAwQECgwIQVJF
TExBTk8wGgYKKwYBBAGCpnIDCAQMDAowMjIyOTk2NTAwMA0GCSqGSIb3DQEBCwUAA4ICAQDAF1Qx
EIPHziB1KgwXt4NFhjZ+jnKPgbyoUm/sbk/1fTINV162ci4f/1UU/a9HMjEmkejsdzs9rrhzuowl
jShd1VM5/2eZK1JPho9eSJCyHqV4SDlz1gC2bRRYficqLNq44x0YLITTEWfnsHnsLhM51eRd2ofY
q3mDICO/BDMAjgC2RpYJmgTcNeRkujaxjMoABbIuC+XMEvOr6sLTKPl9Ts+fsxYwlAwzhr/uLzA+
NqIOjzw9OVBfMoZKw76qlCcmy24zLK6hSOBtq2yDWykBIIzCuNOur171EFD7R1ZTajAgAGLghjuA
FHoIrldoF1EQTcSaI9Etsr3m0miMeWYSgIvy6n/WfpVWeYAIfk7Yk0pv4uLpQQ0xcXuFrI6uVEeV
oocvQHNEowWT7WhIrHLUcZbcGGQKYTrt66CM30IDd6tS+467ZvDIzDST9j1I3XiM+yOdqp5DJjP6
c2Ha+qgxhvHvO/Tzj1Wf9ZWEYIVXC7vF8SuVLDUwZHOkz6EZMPMmV/1yQ7WN8IOFmSvN2kTV2BzS
PvT/EnfgBFxPYhl0OhWx0uBi8qt5O9jcUyKa/AG79twQ9cNI5S2+r9IlafHYYvn7LGB9O5xH1QBE
9AgMQCC0XWK+Y6yHKizPzES6OxhVIkkItTYS0nvaCjm2gg8MSh1oF8CVxAd6CWWxMETYLA==
</ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
ySbGRqBHe1HF/u9W5vmmbKfZrZokGHPZ20eyHAgzMhMiDF6yH1lvv0FhtrNX+eYZ2ZKubv/Q9XtF
wkCurorBuHhRgrAiDC1aizLp2O6fQKyREtLGHgWp29VK0Qnm3LAARfjDjfwZix9oK085ejsX8Vnh
O4aN4sZJFXjs6x2qWTjvSoLXjUVgwjwIh0VuUqC2kTAQMwXDU6ez0pZycNoJJQaitIk4Rrdztwya
Rwipxc4eHXqMXYt5d8wCICBi4YG/Jdqig5sjjL7+zoLbZnIFWnhw6JfvBPPE/4RQnCZrmqf7d0zh
FF7/hdqlLfUTzDA1lGwvurLquqA/WAQbodTP/w==
</ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue></ds:KeyValue></ds:KeyInfo><ds:Object Id="Signature934795-Object604389"><etsi:QualifyingProperties Target="#Signature934795"><etsi:SignedProperties Id="Signature934795-SignedProperties75153"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-11-27T17:51:50-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>hyH15hYJtQCgh64J2qerbtP1Nfs=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>1259065857</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-3385"><etsi:Description>comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></notaCredito>]]>
</comprobante>
<mensajes></mensajes>
</Authorization>`,
};
