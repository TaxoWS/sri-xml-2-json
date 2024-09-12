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
  BILL_WITH_TAX_ERROR: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<Authorization>
<estado>AUTORIZADO</estado>
<numeroAutorizacion>0205202301172178932700120010010000058090205302410</numeroAutorizacion>
<fechaAutorizacion>2023-05-02T10:30:22-05:00</fechaAutorizacion>
<ambiente>PRODUCCIÓN</ambiente>
<comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8" standalone="no"?><factura id="comprobante" version="1.1.0">
  <infoTributaria>
    <ambiente>2</ambiente>
    <tipoEmision>1</tipoEmision>
    <razonSocial>YESSLAB</razonSocial>
    <nombreComercial>VEGA TOAPANTA YESSICA NATALI </nombreComercial>
    <ruc>1721789327001</ruc>
    <claveAcceso>0205202301172178932700120010010000058090205302410</claveAcceso>
    <codDoc>01</codDoc>
    <estab>001</estab>
    <ptoEmi>001</ptoEmi>
    <secuencial>000005809</secuencial>
    <dirMatriz>QUITO / JIPIJAPA / ISLA GENOVESA N41-64 E ISLA FLOREANA </dirMatriz>
  </infoTributaria>
  <infoFactura>
    <fechaEmision>02/05/2023</fechaEmision>
    <obligadoContabilidad>NO</obligadoContabilidad>
    <tipoIdentificacionComprador>04</tipoIdentificacionComprador>
    <razonSocialComprador>MARIA FERNANDA SANCHEZ GAVI</razonSocialComprador>
    <identificacionComprador>1723506232001</identificacionComprador>
    <direccionComprador>River Mall</direccionComprador>
    <totalSinImpuestos>220.00</totalSinImpuestos>
    <totalDescuento>0.00</totalDescuento>
    <totalConImpuestos>
      <totalImpuesto>
        <codigo>2</codigo>
        <codigoPorcentaje>2</codigoPorcentaje>
        <baseImponible>0.00</baseImponible>
        <valor>0.00</valor>
      </totalImpuesto>
    </totalConImpuestos>
    <propina>0.00</propina>
    <importeTotal>220.00</importeTotal>
    <moneda>DOLAR</moneda>
    <pagos>
      <pago>
        <formaPago>20</formaPago>
        <total>220.00</total>
        <plazo>15</plazo>
        <unidadTiempo>DIAS</unidadTiempo>
      </pago>
    </pagos>
  </infoFactura>
  <detalles>
    <detalle>
      <codigoPrincipal>COROCEROMANTCFIB</codigoPrincipal>
      <descripcion>CORONA CEROMERO ANTERIOR</descripcion>
      <cantidad>3.00</cantidad>
      <precioUnitario>55.0000</precioUnitario>
      <descuento>0.00</descuento>
      <precioTotalSinImpuesto>165.00</precioTotalSinImpuesto>
      <detallesAdicionales>
        <detAdicional nombre="PACIENTE: " valor="YADIRA MONCAYO (CITY DENT SUR)"/>
        <detAdicional nombre="PIEZA(S): " valor="21-22-23 PUENTE"/>
        <detAdicional nombre="O.T. Nro:" valor="4544"/>
      </detallesAdicionales>
      <impuestos>
        <impuesto>
          <codigo>2</codigo>
          <codigoPorcentaje>0</codigoPorcentaje>
          <tarifa>0.00</tarifa>
          <baseImponible>165.00</baseImponible>
          <valor>0.00</valor>
        </impuesto>
      </impuestos>
    </detalle>
    <detalle>
      <codigoPrincipal>COROCEROMPOSTCFIB</codigoPrincipal>
      <descripcion>CORONA CEROMERO POSTERIOR</descripcion>
      <cantidad>1.00</cantidad>
      <precioUnitario>55.0000</precioUnitario>
      <descuento>0.00</descuento>
      <precioTotalSinImpuesto>55.00</precioTotalSinImpuesto>
      <detallesAdicionales>
        <detAdicional nombre="PIEZA(S): " valor="44"/>
      </detallesAdicionales>
      <impuestos>
        <impuesto>
          <codigo>2</codigo>
          <codigoPorcentaje>0</codigoPorcentaje>
          <tarifa>0.00</tarifa>
          <baseImponible>55.00</baseImponible>
          <valor>0.00</valor>
        </impuesto>
      </impuestos>
    </detalle>
  </detalles>
  <infoAdicional>
    <campoAdicional nombre="Direccion">River Mall</campoAdicional>
    <campoAdicional nombre="Email">fernandisan@hotmail.com</campoAdicional>
  </infoAdicional>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature406393">
<ds:SignedInfo Id="Signature-SignedInfo156414">
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
<ds:Reference Id="SignedPropertiesID252644" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature406393-SignedProperties737453">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>tPFu0suJJZXuhnTRl3u/Fs6LiaA=</ds:DigestValue>
</ds:Reference>
<ds:Reference URI="#Certificate1291696">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>c7DFOv9oYYmL3sxIalmZ2gH49T4=</ds:DigestValue>
</ds:Reference>
<ds:Reference Id="Reference-ID-77842" URI="#comprobante">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>xBmCGNoYGVM+ZPbr9wIx+G9gJew=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue Id="SignatureValue910429">
xndpT83oad2xGR6CmYX8yrZ3qlZQJ9+LD36CaePgP8TKCQwgRHEaKjRPdphxFiwomRfbhjzPEG64
zJT1a+wugo5/ZCKVHco4KPop6nAqera6enUatdoJ45uasbByFiK7sx8oHxhiN+EuTq/QX2nPyfld
cdlNqcmjXqKgJUEqK5za8l//3ADGrhTMRYYYOky2TuAQsp10pELIOyTo73ICw311GHW9wQWXooHH
Jjy/l0llOD/W59tCe1PNDZR98ijIETOqvUYGfLRHqBDvn5tzGOha3jz9IkuqgQPIay75PrAoeB2N
k811dOxtIjzaG/nadJK8x1sXAA56Tg9ohd24HA==
</ds:SignatureValue>
<ds:KeyInfo Id="Certificate1291696">
<ds:X509Data>
<ds:X509Certificate>
MIIL1DCCCbygAwIBAgIEBfA7DDANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMzAxMjQxNzE1MTZaFw0yNTAxMjMxNzE1MTZaMIGcMSUw
IwYDVQQDDBxZRVNTSUNBIE5BVEFMSSBWRUdBIFRPQVBBTlRBMRUwEwYDVQQFEwwyNDAxMjMxMjI0
NTYxMDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsG
A1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDIxCzAJBgNVBAYTAkVDMIIBIjANBgkqhkiG9w0BAQEF
AAOCAQ8AMIIBCgKCAQEA2qQd65skoaE0219Y1xgNd0IfhGDh0XfV9Ty5s+uuMlSvvRcg5ZQsH9lx
F0ePDl3hcvhh5GxFMl1tqKbIKX0CX6GvzeD7s0x6GiOX75a5LjyC0z2NWEK8qcaYmOaE8sfcNxIj
yVRsTTZ8sVz4dts94wOqG8W+7QiHy69jIoLn5Zx1GkScY7QU7y0rzVgdVWpAKl+/GK6uHcOnaIeY
GjPZ7gyuNlNPxRIQcRE3ZfopZPhtOg+n88SiIvZml9Ep+PG50KFqc9pFVoHOxoP43bCHxtWIUtYh
4jDrxlLCk2SqVq4wzTgDrbQuu9AZBS4i7Q+voG6+3C6Yd8UsGqwpUToqBwIDAQABo4IHHTCCBxkw
DAYDVR0TAQH/BAIwADAfBgNVHSMEGDAWgBSMusoRV3glgB1rCktVv42uYt29jzBZBggrBgEFBQcB
AQRNMEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJj
YS9wdWJsaWN3ZWIvc3RhdHVzL29jc3Awgc8GA1UdLgSBxzCBxDCBwaCBvqCBu4aBuGxkYXA6Ly9s
ZGFwc2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lP
TiBTVUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElO
Rk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQz9kZWx0YVJldm9jYXRpb25MaXN0
P2Jhc2UwIwYDVR0RBBwwGoEYeWVzc25hdGFsaXZlZ2FAZ21haWwuY29tMIIBBgYDVR0gBIH+MIH7
MFoGCisGAQQBgqZyAgcwTDBKBggrBgEFBQcCAjA+HjwAQwBlAHIAdABpAGYAaQBjAGEAZABvACAA
ZABlACAAUABlAHIAcwBvAG4AYQAgAE4AYQB0AHUAcgBhAGwwgZwGCisGAQQBgqZyAgEwgY0wgYoG
CCsGAQUFBwIBFn5odHRwczovL3d3dy5zZWN1cml0eWRhdGEubmV0LmVjL3dwLWNvbnRlbnQvZG93
bmxvYWRzL05vcm1hdGl2YXMvUF9kZV9DZXJ0aWZpY2Fkb3MvUG9saXRpY2FzIGRlIENlcnRpZmlj
YWRvIFBlcnNvbmEgTmF0dXJhbC5wZGYwggKiBgNVHR8EggKZMIIClTCB5aBBoD+GPWh0dHA6Ly9v
Y3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJjYS9wdWJsaWN3ZWIvc3RhdHVzL29jc3CigZ+k
gZwwgZkxOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNVQkNBLTIgU0VDVVJJ
VFkgREFUQTEwMC4GA1UECwwnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9O
MR0wGwYDVQQKDBRTRUNVUklUWSBEQVRBIFMuQS4gMjELMAkGA1UEBhMCRUMwgceggcSggcGGgb5s
ZGFwOi8vbGRhcHNkY2EyLnNlY3VyaXR5ZGF0YS5uZXQuZWMvQ049QVVUT1JJREFEIERFIENFUlRJ
RklDQUNJT04gU1VCQ0EtMiBTRUNVUklUWSBEQVRBLE9VPUVOVElEQUQgREUgQ0VSVElGSUNBQ0lP
TiBERSBJTkZPUk1BQ0lPTixPPVNFQ1VSSVRZIERBVEEgUy5BLiAyLEM9RUM/Y2VydGlmaWNhdGVS
ZXZvY2F0aW9uTGlzdD9iYXNlMIHgoIHdoIHahoHXaHR0cHM6Ly9wb3J0YWwtb3BlcmFkb3IyLnNl
Y3VyaXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVibGljd2ViL3dlYmRpc3QvY2VydGRpc3Q/Y21kPWNy
bCZpc3N1ZXI9Q049QVVUT1JJREFEIERFIENFUlRJRklDQUNJT04gU1VCQ0EtMiBTRUNVUklUWSBE
QVRBLE9VPUVOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTixPPVNFQ1VSSVRZ
IERBVEEgUy5BLiAyLEM9RUMwHQYDVR0OBBYEFLU3AHyxwclnrMbbe66+0JgI4Q2HMCsGA1UdEAQk
MCKADzIwMjMwMTI0MTcxNTE2WoEPMjAyNTAxMjMxNzE1MTZaMAsGA1UdDwQEAwIF4DAaBgorBgEE
AYKmcgMBBAwMCjE3MjE3ODkzMjcwFQYKKwYBBAGCpnIDCQQHDAVRVUlUTzARBgorBgEEAYKmcgMi
BAMMAS4wNAYKKwYBBAGCpnIDBwQmDCRJU0xBIEdFTk9WRVNBIE40MSA2NCBZIElTTEEgRkxPUkVB
TkEwHgYKKwYBBAGCpnIDAgQQDA5ZRVNTSUNBIE5BVEFMSTAfBgorBgEEAYKmcgMgBBEMDzAwMjAw
MTAwMDU1NTA5ODARBgorBgEEAYKmcgMjBAMMAS4wEwYKKwYBBAGCpnIDIQQFDANQRlgwFwYKKwYB
BAGCpnIDDAQJDAdFQ1VBRE9SMBQGCisGAQQBgqZyAwMEBgwEVkVHQTARBgorBgEEAYKmcgMeBAMM
AS4wHQYKKwYBBAGCpnIDCwQPDA0xNzIxNzg5MzI3MDAxMBEGCisGAQQBgqZyAx0EAwwBLjAYBgor
BgEEAYKmcgMEBAoMCFRPQVBBTlRBMBoGCisGAQQBgqZyAwgEDAwKMDk5NTk4MzExMDANBgkqhkiG
9w0BAQsFAAOCAgEAKxw9hfoMjh1yEpfdYiJ7h6JMUMRCS2kn57qZTeAtrwe/r2qoaqhQJ/l2Y9s/
RlugzwbIm/lxkoZY5n6wVAKFWx5yvuJbSWTtQ9wqGI7exV/WtZY29xsICMmMtJ2DRoLah6cFFBnD
4n9iUQPfZXu1TuJR37Bcvt3GWzZIaFLkNwVG++lUx+WnN2Cxy2+fkZ1TjiE1DA+qm+Nz+z8tFNUM
eCI8BR5XFjXOp96riOFLXsAFH73z15HsITtusevdr+5JUuj3AamsLmxSGyFchNNejeF4BHE+03Sd
K+00gDneB8nomovKgnBCdPSOkag3700ugGKSwWEFlLa4hQv0SxoKj+pUKUrx3E6L2gmrNZcSfBYz
PIVy3rTA3W6sb5ndEx4HWIO/1o3S2HNDbfDfwUeQT8xNr9kxbfFL/GLMt5DYv4QoQ504/ZgMnVCZ
hQzwWlCS46t6MJ+mbwYzVBwYfJy63C1kDED/1I/D9oEfniu5kKq8zvwuzlvwJaO1RndR/tDgg9ti
NMmR6qsSYj0isZufCGkJHbLlxr26rltKXwU3UMqOjXMeYbP+8FAw8RTOJmEQMc6IgdT12XfoTJlS
1O7qxpWmsqNkDmGwxBdt0+/unQYVJcm3JiOYjHTDDkFn5y/nfPkR5KhqO+77zvG26MsjJdJ3PuKC
7jgJ0m2bzIR3R2k=
</ds:X509Certificate>
</ds:X509Data>
<ds:KeyValue>
<ds:RSAKeyValue>
<ds:Modulus>
2qQd65skoaE0219Y1xgNd0IfhGDh0XfV9Ty5s+uuMlSvvRcg5ZQsH9lxF0ePDl3hcvhh5GxFMl1t
qKbIKX0CX6GvzeD7s0x6GiOX75a5LjyC0z2NWEK8qcaYmOaE8sfcNxIjyVRsTTZ8sVz4dts94wOq
G8W+7QiHy69jIoLn5Zx1GkScY7QU7y0rzVgdVWpAKl+/GK6uHcOnaIeYGjPZ7gyuNlNPxRIQcRE3
ZfopZPhtOg+n88SiIvZml9Ep+PG50KFqc9pFVoHOxoP43bCHxtWIUtYh4jDrxlLCk2SqVq4wzTgD
rbQuu9AZBS4i7Q+voG6+3C6Yd8UsGqwpUToqBw==
</ds:Modulus>
<ds:Exponent>AQAB</ds:Exponent>
</ds:RSAKeyValue>
</ds:KeyValue>
</ds:KeyInfo>
<ds:Object Id="Signature406393-Object851767"><etsi:QualifyingProperties Target="#Signature406393"><etsi:SignedProperties Id="Signature406393-SignedProperties737453"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-05-02T10:30:21-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>DPW6s3eFn3c89QbEPA6P71NWPVg=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>99629836</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-77842"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]></comprobante>
<mensajes/>
</Authorization>
`,
  RETENTION: `<Authorization>
  <estado>AUTORIZADO</estado>
  <numeroAutorizacion>2411202307179028338000120010160023856290238562917</numeroAutorizacion>
  <fechaAutorizacion>2023-11-27T12:28:17-05:00</fechaAutorizacion>
  <ambiente>PRODUCCIÓN</ambiente>
  <comprobante>
      <![CDATA[
      <?xml version="1.0" encoding="UTF-8"?><comprobanteRetencion id="comprobante" version="1.0.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>BANCO DINERS CLUB DEL ECUADOR S.A.</razonSocial><nombreComercial>DINERS CLUB</nombreComercial><ruc>1790283380001</ruc><claveAcceso>2411202307179028338000120010160023856290238562345</claveAcceso><codDoc>07</codDoc><estab>001</estab><ptoEmi>016</ptoEmi><secuencial>002385629</secuencial><dirMatriz>QUITO - AV. AMAZONAS 4560 Y ALFONSO PEREIRA</dirMatriz></infoTributaria><infoCompRetencion><fechaEmision>24/11/2023</fechaEmision><dirEstablecimiento>QUITO - AV. AMAZONAS 4560 Y ALFONSO PEREIRA</dirEstablecimiento><contribuyenteEspecial>5368</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionSujetoRetenido>05</tipoIdentificacionSujetoRetenido><razonSocialSujetoRetenido>PONCE PEPITO</razonSocialSujetoRetenido><identificacionSujetoRetenido>1912369214</identificacionSujetoRetenido><periodoFiscal>11/2023</periodoFiscal></infoCompRetencion><impuestos><impuesto><codigo>1</codigo><codigoRetencion>323E</codigoRetencion><baseImponible>15.45</baseImponible><porcentajeRetener>2.00</porcentajeRetener><valorRetenido>0.31</valorRetenido><codDocSustento>12</codDocSustento><numDocSustento>000000000128967</numDocSustento><fechaEmisionDocSustento>24/11/2023</fechaEmisionDocSustento></impuesto>
  </impuestos><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature873547"><ds:SignedInfo Id="Signature-SignedInfo864206"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod><ds:Reference Id="SignedPropertiesID368670" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature873547-SignedProperties967500"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>uBoWRb2ukUAQvRhN25m4lyqNnlo=</ds:DigestValue></ds:Reference><ds:Reference URI="#Certificate1340485"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>ko+YwiT3HddbFMFhumFy0oG7U20=</ds:DigestValue></ds:Reference><ds:Reference Id="Reference-ID-652647" URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>OISt9J4nSo5k5LkRRMJBhXIXEpw=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue Id="SignatureValue223573">
H6aUNIbilGlIo9xXCtNyGikV3wvHe3PPm63aD+YU3l2Rdv0yY7x7taq+V1J26ETh+sQ8J9/idj+C
VD+aLfrXBqWvvy+TvxGLRnJ9v+WXQKCqKyPXOa105aTQVFI6hUcV2APxBj2mzU/1IgHzMvNVal6s
J2k4vrKz1TuN6SdkImJ6gLMzeYf5o+TsYc6rfvbvH82OkQ52noC23K96tkJokajigh01hESb+xlN
ojNPCvLyfLX4R11QKyUIZOZx5Lrq2nziuZ76uK6s/cTcNhrDRMEP1GeWFtX0p1nl/RzX1vFX/Pd5
5gAFhE2GARR1WIHPqf8FVxZ2MB9oKshfjuguSg==
</ds:SignatureValue><ds:KeyInfo Id="Certificate1340485"><ds:X509Data><ds:X509Certificate>
MIIMHjCCCgagAwIBAgIEI+4Q3zANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMjEwMTgyMjI5MzdaFw0yNDEwMTcyMjI5MzdaMIGeMScw
JQYDVQQDDB5DRVNBUiBBVUdVU1RPIE1BUlRJTkVaIE5BUlZBRVoxFTATBgNVBAUTDDE4MTAyMjE3
MzkyNjEwMC4GA1UECwwnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OMR0w
GwYDVQQKDBRTRUNVUklUWSBEQVRBIFMuQS4gMjELMAkGA1UEBhMCRUMwggEiMA0GCSqGSIb3DQEB
AQUAA4IBDwAwggEKAoIBAQCdbeHPyeRWxKDf13SGhXL7bt95duFuT3LcUgeOt6zeISt7NaLWyzjr
HwEFb6Y7UgYrzUn5pjC5voMxCthCZDM43sL8NU0rL2tOiuSYXLkCiD6dEAu6/ZGJRclX0XT0FJzw
WEYf1cuaud2P88RdskW/h9XxQKbe4wkfWSBYVdZJsN9VmUqtsJoO+ShVloR5HoDEfYXGoObIZeZa
P8EmvCbC4origXWbpabYW13QD+LEH2Co+vXelSyjb9oE46HDNBAyYRcpOJaYlPphAfOD1XbiIyIF
zUWJfAenjdFoNmPVksWlygJqSN54DOkqyjo591iTY73SjPFqdrpbXsX73Lp/AgMBAAGjggdlMIIH
YTAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFIy6yhFXeCWAHWsKS1W/ja5i3b2PMFkGCCsGAQUF
BwEBBE0wSzBJBggrBgEFBQcwAYY9aHR0cDovL29jc3Bndy5zZWN1cml0eWRhdGEubmV0LmVjL2Vq
YmNhL3B1YmxpY3dlYi9zdGF0dXMvb2NzcDCBzwYDVR0uBIHHMIHEMIHBoIG+oIG7hoG4bGRhcDov
L2xkYXBzZGNhMi5zZWN1cml0eWRhdGEubmV0LmVjL0NOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FD
SU9OIFNVQkNBLTIgU0VDVVJJVFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUg
SU5GT1JNQUNJT04sTz1TRUNVUklUWSBEQVRBIFMuQS4gMixDPUVDP2RlbHRhUmV2b2NhdGlvbkxp
c3Q/YmFzZTAmBgNVHREEHzAdgRtjbWFydGluZXpAZGluZXJzY2x1Yi5jb20uZWMwggESBgNVHSAE
ggEJMIIBBTBgBgorBgEEAYKmcgIKMFIwUAYIKwYBBQUHAgIwRB5CAEMAZQByAHQAaQBmAGkAYwBh
AGQAbwAgAGQAZQAgAE0AaQBlAG0AYgByAG8AIABkAGUAIABFAG0AcAByAGUAcwBhMIGgBgorBgEE
AYKmcgIEMIGRMIGOBggrBgEFBQcCARaBgWh0dHBzOi8vd3d3LnNlY3VyaXR5ZGF0YS5uZXQuZWMv
d3AtY29udGVudC9kb3dubG9hZHMvTm9ybWF0aXZhcy9QX2RlX0NlcnRpZmljYWRvcy9Qb2xpdGlj
YXMgZGUgQ2VydGlmaWNhZG8gTWllbWJybyBkZSBFbXByZXNhLnBkZjCCAqIGA1UdHwSCApkwggKV
MIHloEGgP4Y9aHR0cDovL29jc3Bndy5zZWN1cml0eWRhdGEubmV0LmVjL2VqYmNhL3B1YmxpY3dl
Yi9zdGF0dXMvb2NzcKKBn6SBnDCBmTE5MDcGA1UEAwwwQVVUT1JJREFEIERFIENFUlRJRklDQUNJ
T04gU1VCQ0EtMiBTRUNVUklUWSBEQVRBMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xHTAbBgNVBAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMQswCQYDVQQG
EwJFQzCBx6CBxKCBwYaBvmxkYXA6Ly9sZGFwc2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1B
VVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURB
RCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIs
Qz1FQz9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0P2Jhc2UwgeCggd2ggdqGgddodHRwczovL3Bv
cnRhbC1vcGVyYWRvcjIuc2VjdXJpdHlkYXRhLm5ldC5lYy9lamJjYS9wdWJsaWN3ZWIvd2ViZGlz
dC9jZXJ0ZGlzdD9jbWQ9Y3JsJmlzc3Vlcj1DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBT
VUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9S
TUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQzAdBgNVHQ4EFgQU5DPlqJp5ZGuYLZ7g
ISfrEJ7xOBswKwYDVR0QBCQwIoAPMjAyMjEwMTgyMjI5MzdagQ8yMDI0MTAxNzIyMjkzN1owCwYD
VR0PBAQDAgXgMCcGCisGAQQBgqZyAwUEGQwXR0VSRU5URSBERSBDT05UQUJJTElEQUQwGgYKKwYB
BAGCpnIDAQQMDAoxNzEyNDkxNjQ0MBUGCisGAQQBgqZyAwkEBwwFUVVJVE8wEQYKKwYBBAGCpnID
IgQDDAEuMDMGCisGAQQBgqZyAwcEJQwjQVYuIEFNQVpPTkFTIDQ1NjAgWSBBTEZPTlNPIFBFUkVJ
UkEwHQYKKwYBBAGCpnIDAgQPDA1DRVNBUiBBVUdVU1RPMB8GCisGAQQBgqZyAyAEEQwPMDAyMDAx
MDAwNDQ3NjI1MBMGCisGAQQBgqZyAyEEBQwDUEZYMBcGCisGAQQBgqZyAwwECQwHRUNVQURPUjAY
BgorBgEEAYKmcgMDBAoMCE1BUlRJTkVaMDIGCisGAQQBgqZyAwoEJAwiQkFOQ08gRElORVJTIENM
VUIgREVMIEVDVUFET1IgUy5BLjAdBgorBgEEAYKmcgMLBA8MDTE3OTAyODMzODAwMDEwEgYKKwYB
BAGCpnIDHQQEDAJObzAXBgorBgEEAYKmcgMEBAkMB05BUlZBRVowGgYKKwYBBAGCpnIDCAQMDAow
OTgwNjkxODA5MA0GCSqGSIb3DQEBCwUAA4ICAQAHO/lHMjpUiy0oM9+pvXjfd3ehoWrf8tSAh0zn
MIqvQp+czhLdaGaoajwt0gK44fk3TMTnwVLQPWa/SNzEV8aLoZKs8YE5SNYLFuUH7d3ma2IEM/fR
lZikt6i8amwjuXa2dVGDPTD+2tTNarumZ5voIw3I6m9F7G8P70iJdhfVb/DcWiEtP/ex0Q/JQDo5
LCF7uwdnasBFKGegrbl9ZodhDJPcJNCr+qahLzkqVRExGE57L3Jz8bxJM0Pwb6K30212GC2xChvq
/AopMnIkBa2mGJzs2Zg7t3LuCC9SWgNs5H5IgEan981zwQa54TnFSC1BmglERUR19iNz1oydym2V
LrJUeFgi6Epe2figxm5wk1LItM6ABT1aJ9e8+Qgh7RMdIF6CIy1rGwDvTJANI5vGedyJ1DcAihmB
wmoc1r51Lcq0ABu3pam/57SmJi/PJyUlvJ1BY2JeXkH+ZTo88f7eYGIP/Mldgjq1FCglllhIMJRE
ctsejFSTEPY+r+jXAWcvnVptmXBEcZ+s9dkkmGDwxDycrZUCCO9Qh1suuG15Lzmg2DZFTzlQSONa
4F4JFu8l/EOmgxh+dIzTjnolmEfB7V+Hyvc6csM96r+e9mfyUU9eRSmQAse4g6/tA4jUxmLP0fTn
J3rCPTUJK3c39pc1tSHH1lSRKrPTnRKMeQDdOg==
</ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
nW3hz8nkVsSg39d0hoVy+27feXbhbk9y3FIHjres3iErezWi1ss46x8BBW+mO1IGK81J+aYwub6D
MQrYQmQzON7C/DVNKy9rTorkmFy5Aog+nRALuv2RiUXJV9F09BSc8FhGH9XLmrndj/PEXbJFv4fV
8UCm3uMJH1kgWFXWSbDfVZlKrbCaDvkoVZaEeR6AxH2FxqDmyGXmWj/BJrwmwuKK4oF1m6Wm2Ftd
0A/ixB9gqPr13pUso2/aBOOhwzQQMmEXKTiWmJT6YQHzg9V24iMiBc1FiXwHp43RaDZj1ZLFpcoC
akjeeAzpKso6OfdYk2O90ozxana6W17F+9y6fw==
</ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue></ds:KeyValue></ds:KeyInfo><ds:Object Id="Signature873547-Object728423"><etsi:QualifyingProperties Target="#Signature873547"><etsi:SignedProperties Id="Signature873547-SignedProperties967500"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-11-27T12:28:15-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>KU0Qns4Hmrbor/x2kh/5OHW61b0=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>602804447</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-652647"><etsi:Description>Comprobante generado por Binaria</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></comprobanteRetencion>]]>
</comprobante>
<mensajes></mensajes>
</Authorization>`,
  RETENTION_WITH_SUPPORTING_AND_ADDITIONAL_FIELDS: `<Authorization>
<estado>AUTORIZADO</estado>
<numeroAutorizacion>0111202307179199236900120011000000016231234567814</numeroAutorizacion>
<fechaAutorizacion>2023-11-08T16:50:32-05:00</fechaAutorizacion>
<ambiente>PRODUCCIÓN</ambiente>
<comprobante>
    <![CDATA[
    <?xml version="1.0" encoding="UTF-8" standalone="no"?><comprobanteRetencion xmlns:ns2="http://www.w3.org/2000/09/xmldsig#" id="comprobante" version="2.0.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>LONGTERM FOREST PARTNERS S.A.S.</razonSocial><nombreComercial>LONGTERM FOREST PARTNERS S.A.S.</nombreComercial><ruc>1801992369001</ruc><claveAcceso>0111202307179199236900120011000000016231234567345</claveAcceso><codDoc>07</codDoc><estab>001</estab><ptoEmi>100</ptoEmi><secuencial>000001623</secuencial><dirMatriz>SANTA LUCIA ALTA DE LOS ESTABLOS SITE CENTER CUMBAYA A DOS CUADRAS DE FARMACIA MEDICITY</dirMatriz><agenteRetencion>1</agenteRetencion></infoTributaria><infoCompRetencion><fechaEmision>01/11/2023</fechaEmision><dirEstablecimiento>El Ejido, Av. Amazonas E4-69 y Av. Patria</dirEstablecimiento><contribuyenteEspecial>1144</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionSujetoRetenido>04</tipoIdentificacionSujetoRetenido><parteRel>NO</parteRel><razonSocialSujetoRetenido>PONCE PEPITO</razonSocialSujetoRetenido><identificacionSujetoRetenido>1123369214001</identificacionSujetoRetenido><periodoFiscal>11/2023</periodoFiscal></infoCompRetencion><docsSustento><docSustento><codSustento>01</codSustento><codDocSustento>01</codDocSustento><numDocSustento>002003000000089</numDocSustento><fechaEmisionDocSustento>01/11/2023</fechaEmisionDocSustento><fechaRegistroContable>01/11/2023</fechaRegistroContable><numAutDocSustento>0111202301170236921400120020030000000893705370315</numAutDocSustento><pagoLocExt>01</pagoLocExt><paisEfecPago>593</paisEfecPago><totalSinImpuestos>1500.00</totalSinImpuestos><importeTotal>1680.00</importeTotal><impuestosDocSustento><impuestoDocSustento><codImpuestoDocSustento>2</codImpuestoDocSustento><codigoPorcentaje>2</codigoPorcentaje><baseImponible>1500.00</baseImponible><tarifa>12.00</tarifa><valorImpuesto>180.00</valorImpuesto></impuestoDocSustento></impuestosDocSustento><retenciones><retencion><codigo>1</codigo><codigoRetencion>320</codigoRetencion><baseImponible>1500.00</baseImponible><porcentajeRetener>8.00</porcentajeRetener><valorRetenido>120.00</valorRetenido></retencion><retencion><codigo>2</codigo><codigoRetencion>3</codigoRetencion><baseImponible>180.00</baseImponible><porcentajeRetener>100.00</porcentajeRetener><valorRetenido>180.00</valorRetenido></retencion></retenciones><pagos><pago><formaPago>20</formaPago><total>1680.00</total></pago></pagos></docSustento></docsSustento><infoAdicional><campoAdicional nombre="Notificaciones">Se envian a la direcciones siguientes:</campoAdicional><campoAdicional nombre="emailCliente">dgarzon@seragroforest.com;rodrigo.ramos@siglobpo.com;miponpa@gmail.com</campoAdicional><campoAdicional nombre="direccion">Cumbaya - Santa Lucia - Av. del Establo</campoAdicional><campoAdicional nombre="comentario">PONCE MIGUEL FC. 89 RENTA OFICINA NOVIEMBRE 2023</campoAdicional><campoAdicional nombre="telefono">02999999</campoAdicional></infoAdicional><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature638384"><ds:SignedInfo Id="Signature-SignedInfo747158"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><ds:Reference Id="SignedPropertiesID520434" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature638384-SignedProperties711172"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>w3KD3hgkVhtak1Ppr3gjaJlcQmw=</ds:DigestValue></ds:Reference><ds:Reference URI="#Certificate1382381"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>Eg2vJ3zZsUls512X6/ZiCYBn8eA=</ds:DigestValue></ds:Reference><ds:Reference Id="Reference-ID-384776" URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/></ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>UK56dHnOVZHuIUfTY+zewDWhAeM=</ds:DigestValue></ds:Reference></ds:SignedInfo><ds:SignatureValue Id="SignatureValue527653">
K+2I46LH59wx95CjZh4jXMjvzOTjHNDk//8x3ESmJ5zkO9Ixzs28/vU+Dv/cGNAqXaqVqk9g+9Yc
vVFGJX1R7ixeeWoBDbhmgJ+TVjvjEfZLZqrnNJdlgFGv5iEXSH6keayo3kb8NnCYfoYnlOvrER+s
0VNCLEfWpGnh4UOHTzeEhmRmb5h21MfDnDqAatEAe6ilJH82ycaOv/6iraKk289+G6UkvAArBgzI
awHELR0SkqCQW5h9M6DPojhH2mUymnI5Gzu0oZUIGwwnSEyheV755PuB3z409D9CtJNFxRkv76Ku
RbcEyE6z4Z374c7bvfHu+r4X+Ey430vS3Y8qAw==
</ds:SignatureValue><ds:KeyInfo Id="Certificate1382381"><ds:X509Data><ds:X509Certificate>
MIIJnTCCB4WgAwIBAgIIB9KL+N+4i8EwDQYJKoZIhvcNAQELBQAwgbgxCzAJBgNVBAYTAkVTMUQw
QgYDVQQHDDtCYXJjZWxvbmEgKHNlZSBjdXJyZW50IGFkZHJlc3MgYXQgd3d3LnVhbmF0YWNhLmNv
bS9hZGRyZXNzKTEWMBQGA1UECgwNVUFOQVRBQ0EgUy5BLjEVMBMGA1UECwwMVFNQLVVBTkFUQUNB
MRowGAYDVQQDDBFVQU5BVEFDQSBDQTIgMjAxNjEYMBYGA1UEYQwPVkFURVMtQTY2NzIxNDk5MB4X
DTIzMDIyNDE4MDIwMFoXDTI1MDIyMzE4MDIwMFowgdAxCzAJBgNVBAYTAkVDMSgwJgYDVQQKDB9M
T05HVEVSTSBGT1JFU1QgUEFSVE5FUlMgUy5BLlMuMRgwFgYDVQQMDA9HRVJFTlRFIEdFTkVSQUwx
DjAMBgNVBAQMBVJPTUFOMRYwFAYDVQQqDA1KT1JHRSBBVUdVU1RPMRkwFwYDVQQFExBJRENFQy0x
NzA0ODk3OTcyMRwwGgYDVQQDDBNKT1JHRSBBVUdVU1RPIFJPTUFOMRwwGgYDVQRhDBNWQVRFQy0x
NzkxOTkyMzY5MDAxMIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAi4Y7A+5OYz9Uh2p7
6n2jUvRvvPx83aLH9fBkZn5XbgQzWF7zeWeu7NIy/fR6c2YshcgnL8SOLn4M5bQYKiFckCdptCjY
od9kMhrL/smfaU/N6g7i6xCVJH58CidlofQvT8R96LGGyhzKHszZa/X8p29JPMhTWh/X7BqYVjh/
XqAfHs0JaVoEgN8Kq939VJLQTMGt1sABxGsql/1/MI8V1p7IBgkqjFcd7QCwEzaWiEv8MNUxZNsO
fapFq3YBcjt7YaoYEsqd9p3GcJ4t11IH2jyHe1jL43IzofCGkqhQOrLlUhs5uEwy0vada7UsGyOb
kJC5pQ05ANAMh0d8qMFZFwIDAQABo4IEjzCCBIswGwYLKwYBBAGC8TZmAwEEDAwKMTcwNDg5Nzk3
MjAeBgsrBgEEAYLxNmYDCwQPDA0xNzkxOTkyMzY5MDAxMIHXBggrBgEFBQcBAQSByjCBxzBVBggr
BgEFBQcwAoZJaHR0cDovL3d3dy51YW5hdGFjYS5jb20vcHVibGljL2Rvd25sb2FkL3RzcF9jZXJ0
aWZpY2F0ZXMvc3Vib3JkaW5hdGUxLmNydDA2BggrBgEFBQcwAYYqaHR0cDovL29jc3AxLnVhbmF0
YWNhLmNvbS9wdWJsaWMvcGtpL29jc3AvMDYGCCsGAQUFBzABhipodHRwOi8vb2NzcDIudWFuYXRh
Y2EuY29tL3B1YmxpYy9wa2kvb2NzcC8wHQYDVR0OBBYEFB29Ci5v20yn4qQW7tYaebDuuQfOMAwG
A1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUfVfnYHPOB0ap4qNo8OERsnSSc/0wgY4GA1UdIASBhjCB
gzCBgAYMKwYBBAGC8TZmAgMBMHAwNwYIKwYBBQUHAgEWK2h0dHBzOi8vd3d3LnVhbmF0YWNhLmNv
bS9wdWJsaWMvcGtpL2RwYy1lYy8wNQYIKwYBBQUHAgIwKQwnQ0VSVElGSUNBRE8gREUgUkVQUkVT
RU5UQU5URSBFTiBBUkNISVZPMIGPBgNVHR8EgYcwgYQwQKA+oDyGOmh0dHA6Ly9jcmwxLnVhbmF0
YWNhLmNvbS9wdWJsaWMvcGtpL2NybC9DQTJzdWJvcmRpbmFkYS5jcmwwQKA+oDyGOmh0dHA6Ly9j
cmwyLnVhbmF0YWNhLmNvbS9wdWJsaWMvcGtpL2NybC9DQTJzdWJvcmRpbmFkYS5jcmwwDgYDVR0P
AQH/BAQDAgXgMB0GA1UdJQQWMBQGCCsGAQUFBwMCBggrBgEFBQcDBDCCAdAGA1UdEQSCAccwggHD
gRpvcGVyYWNpb25lc0BleHBlcnRvLmNvbS5lY6AbBgsrBgEEAYLxNmYDAaAMDAoxNzA0ODk3OTcy
oB4GCysGAQQBgvE2ZgMCoA8MDUpPUkdFIEFVR1VTVE+gFgYLKwYBBAGC8TZmAwOgBwwFUk9NQU6g
IAYLKwYBBAGC8TZmAwWgEQwPR0VSRU5URSBHRU5FUkFMoE4GCysGAQQBgvE2ZgMHoD8MPUJBUlJJ
TzogU0FOVEEgTFVDSUEgQUxUQSBDQUxMRTogREUgTE9TIEVTVEFCTE9TIFMgTiBZIENBTExFIEOg
HwYLKwYBBAGC8TZmAwigEAwOMDA1OTM5OTcyMjI4NzegFgYLKwYBBAGC8TZmAwmgBwwFUVVJVE+g
MAYLKwYBBAGC8TZmAwqgIQwfTE9OR1RFUk0gRk9SRVNUIFBBUlRORVJTIFMuQS5TLqAeBgsrBgEE
AYLxNmYDC6APDA0xNzkxOTkyMzY5MDAxoBMGCysGAQQBgvE2ZgMMoAQMAkVDoCQGCysGAQQBgvE2
ZgMyoBUME1JFUFJFU0VOVEFOVEUgTEVHQUygGAYLKwYBBAGC8TZmAzOgCQwHQVJDSElWTzANBgkq
hkiG9w0BAQsFAAOCAgEAWc0KghhsJ4Mh422qlGWEfDkJ7U6HPsZZwCQM66XyPOBdO0RncO7SUaOC
rxbrGsPq//bF2UNKexELsU0SQmt4kD7ETfTJ2E1P6fNh1Nn9Jc1GuIUbp6TGDmVbHIcBut8Rjzf0
901tJdr/TmJLog2v7OsdS94NWTnB7G9oI9ZoBVS2pKq4b/De3hplpaWtrb+1opmOXR1EwYsIt2mJ
p4LpL4mkBtpmhARs2mIam4bzJuGHAOu2oIfJut+RYwoCY5ygmKwi2q+rXgvJKOLyNwWANtyZJ5vz
uPlOEfH3dqVIS67PTb9NYE13w0dJACTdiHz87SS8gXjbZvIupIzvfWQ+mAOrx4OpiHE7tXSeMpY9
n/XmaCGkjDvt05O5cAq07YewvbWwQd2qBKja0wUtPaMWSJoKl+uu8sKJrYbwSLxATaLixpzYB1cz
oV7IDT+uPkgzmQQrFrNrI1BZjXgPoz9c3dVvmfrlXNIo0TltHkgzwgM+zps0bLwH6VykNB3LPo9z
xHHnZoAVVgsehSEghTkcQMeEo1P4BCRBQpW3iyPIphpUSWQvHJddLiIm/WTqJMLmyUi7s0v7MH97
sT6etLvCXlZabRCoeNccWPH+yZ/R21zk2vSIJIzDaV0mGHGrNsMgm81vL0ajNTGCkpkIDFQd+CMO
eg2fU3nhLOPkwC+GlSo=
</ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
i4Y7A+5OYz9Uh2p76n2jUvRvvPx83aLH9fBkZn5XbgQzWF7zeWeu7NIy/fR6c2YshcgnL8SOLn4M
5bQYKiFckCdptCjYod9kMhrL/smfaU/N6g7i6xCVJH58CidlofQvT8R96LGGyhzKHszZa/X8p29J
PMhTWh/X7BqYVjh/XqAfHs0JaVoEgN8Kq939VJLQTMGt1sABxGsql/1/MI8V1p7IBgkqjFcd7QCw
EzaWiEv8MNUxZNsOfapFq3YBcjt7YaoYEsqd9p3GcJ4t11IH2jyHe1jL43IzofCGkqhQOrLlUhs5
uEwy0vada7UsGyObkJC5pQ05ANAMh0d8qMFZFw==
</ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue></ds:KeyValue></ds:KeyInfo><ds:Object Id="Signature638384-Object740781"><etsi:QualifyingProperties Target="#Signature638384"><etsi:SignedProperties Id="Signature638384-SignedProperties711172"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-11-08T16:50:19-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>1x3BHUfPm50w1sJRSWFZGoGzDBs=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>2.5.4.97=#0c0f56415445532d413636373231343939,CN=UANATACA CA2 2016,OU=TSP-UANATACA,O=UANATACA S.A.,L=Barcelona (see current address at www.uanataca.com/address),C=ES</ds:X509IssuerName><ds:X509SerialNumber>563666804396297153</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-384776"><etsi:Description>comprobateFirma</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></comprobanteRetencion>]]>
</comprobante>
<mensajes></mensajes>
</Authorization>`,
  BILL_WITHOUT_PAYMENTS: `<Authorization>
  <estado>AUTORIZADO</estado>
  <numeroAutorizacion>0103202401019000624700120040010001288770190006219</numeroAutorizacion>
  <fechaAutorizacion>2024-03-01T21:11:48-05:00</fechaAutorizacion>
  <ambiente>PRODUCCIÓN</ambiente>
  <comprobante>
      <![CDATA[
      <?xml version="1.0" encoding="UTF-8" standalone="yes"?><factura id="comprobante" version="1.1.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>ASOCIACION MUTUALISTA DE AHORRO Y CREDITO PARA LA VIVIENDA AZUAY</razonSocial><nombreComercial>MUTUALISTA AZUAY</nombreComercial><ruc>0190006247001</ruc><claveAcceso>0103202401019000624700120040010001288770190006219</claveAcceso><codDoc>01</codDoc><estab>004</estab><ptoEmi>001</ptoEmi><secuencial>000128877</secuencial><dirMatriz>Cuenca, Hermano Miguel 9-19 y Bolivar</dirMatriz></infoTributaria><infoFactura><fechaEmision>01/03/2024</fechaEmision><dirEstablecimiento>AV. DE LAS AMÉRICAS Y CAMINO DEL TEJAR</dirEstablecimiento><contribuyenteEspecial>3257</contribuyenteEspecial><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionComprador>05</tipoIdentificacionComprador><razonSocialComprador>AYORA BRITO LOURDES PATRICIA</razonSocialComprador><identificacionComprador>0927632273</identificacionComprador><direccionComprador>AV. 12 DE ABRIL 1-23 Y HERRERIAS</direccionComprador><totalSinImpuestos>0.36</totalSinImpuestos><totalDescuento>0.00</totalDescuento><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><baseImponible>0.36</baseImponible><tarifa>12</tarifa><valor>0.04</valor></totalImpuesto>
  </totalConImpuestos><propina>0.00</propina><importeTotal>0.40</importeTotal><moneda>DOLAR</moneda></infoFactura><detalles><detalle><codigoPrincipal>9039</codigoPrincipal><codigoAuxiliar>3301</codigoAuxiliar><descripcion>COSTO.TRANSF.SPI M.A.VIRTUAL</descripcion><cantidad>1.00</cantidad><precioUnitario>0.36</precioUnitario><descuento>0.00</descuento><precioTotalSinImpuesto>0.36</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>0.36</baseImponible><valor>0.04</valor></impuesto>
    </impuestos>
  </detalle>
</detalles><infoAdicional><campoAdicional nombre="telefono">4096449</campoAdicional><campoAdicional nombre="celular">0979014899</campoAdicional><campoAdicional nombre="email">DGALIAPERU@HOTMAIL.COM</campoAdicional></infoAdicional><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" Id="Signature-221546281"><ds:SignedInfo><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><ds:Reference URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
    </ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>tbcH0MgIVhljsW4CybIeY0nv9LM=</ds:DigestValue></ds:Reference><ds:Reference Type="http://uri.etsi.org/01903#SignedProperties" URI="#SignedProperties-42219498"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>gW29FziCG7wdGCJ8o42jH5RaQ9w=</ds:DigestValue></ds:Reference>
</ds:SignedInfo><ds:SignatureValue>
Ju3TkMBSHAyIWe3NCEu6Lav3+g68CjpR9HycrVkGowyvxw6E4Gy3EixN4jfI4gZC
QoJYaQkMORm/j7ZWPoUz5YaLCkNeA/OuaXGHCRfcq0VyqZ7H0XLAEDzuLMYIxKaj
UjXLm4tTk0CiISpsTf+q66R1OT8TlrZ+ZWn867DmbrHGyciUZNplwjF4zQ31VQCQ
ctyGsMiHGqBq7wxyYd8PmTeobdn7ipEQzgwwkHN+Ep7g7jn+oWZKJSgMfG9qEfAP
dL5xTb+oY6tgMTGcbcmVNp54LdZfqn85f4ky2qSUsBbGg6vrtdrXaCVQ6Nr9WLfw
Vu+IidQ8XLRashszOzEbyw==
</ds:SignatureValue><ds:KeyInfo><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
x3n37HYK0wb4PtGEUuUN4Gv2ZID0XcCLZJtXv8uUsIkhCgXVxsL6YxLvG9OjNBoV
Lj4513Php3xjbfMktiEOxGc1gcEggQoWygRPIA0CEeKMH2rDa+KHvUXKUPzqwF9/
SkPWyw78ZBJz/Ul8SDQn7C7le6WFZz8l+rAqVQkfuUn5i3n7rEW/nsDP/YQwuk0b
RP8gmItXqS8wnsxNkqe/gCH3wjRNpASvzDDPV2tbiGRC/6m8x+9PbPN6t7RQ7dAo
va12ZdOov1NYtmvh1lHBaq7ijQSAeJUdtVLqSiWHREqTuZsy6ofAHSa1RGAZ3S5O
reGLaOCK98J2gbPUBJbItQ==
      </ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue>
  </ds:KeyValue><ds:X509Data><ds:X509IssuerSerial><ds:X509IssuerName>CN=AC BANCO CENTRAL DEL ECUADOR, L=QUITO, OU=ENTIDAD DE CERTIFICACION DE INFORMACION-ECIBCE, O=BANCO CENTRAL DEL ECUADOR, C=EC</ds:X509IssuerName><ds:X509SerialNumber>1534019208</ds:X509SerialNumber></ds:X509IssuerSerial><ds:X509SubjectName>CN=MARIA GABRIELA MENDIETA GUERRERO, 2.5.4.5=0000326790, L=QUITO, OU=ENTIDAD DE CERTIFICACION DE INFORMACION-ECIBCE, O=BANCO CENTRAL DEL ECUADOR, C=EC</ds:X509SubjectName><ds:X509Certificate>
MIIKJzCCCA+gAwIBAgIEW29GiDANBgkqhkiG9w0BAQsFADCBoTELMAkGA1UEBhMC
RUMxIjAgBgNVBAoTGUJBTkNPIENFTlRSQUwgREVMIEVDVUFET1IxNzA1BgNVBAsT
LkVOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTi1FQ0lCQ0Ux
DjAMBgNVBAcTBVFVSVRPMSUwIwYDVQQDExxBQyBCQU5DTyBDRU5UUkFMIERFTCBF
Q1VBRE9SMB4XDTIyMTAyNjE0MDcwNVoXDTI0MTAyNjE0MzcwNVowgbgxCzAJBgNV
BAYTAkVDMSIwIAYDVQQKExlCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMTcwNQYD
VQQLEy5FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04tRUNJ
QkNFMQ4wDAYDVQQHEwVRVUlUTzE8MBEGA1UEBRMKMDAwMDMyNjc5MDAnBgNVBAMT
IE1BUklBIEdBQlJJRUxBIE1FTkRJRVRBIEdVRVJSRVJPMIIBIjANBgkqhkiG9w0B
AQEFAAOCAQ8AMIIBCgKCAQEAx3n37HYK0wb4PtGEUuUN4Gv2ZID0XcCLZJtXv8uU
sIkhCgXVxsL6YxLvG9OjNBoVLj4513Php3xjbfMktiEOxGc1gcEggQoWygRPIA0C
EeKMH2rDa+KHvUXKUPzqwF9/SkPWyw78ZBJz/Ul8SDQn7C7le6WFZz8l+rAqVQkf
uUn5i3n7rEW/nsDP/YQwuk0bRP8gmItXqS8wnsxNkqe/gCH3wjRNpASvzDDPV2tb
iGRC/6m8x+9PbPN6t7RQ7dAova12ZdOov1NYtmvh1lHBaq7ijQSAeJUdtVLqSiWH
REqTuZsy6ofAHSa1RGAZ3S5OreGLaOCK98J2gbPUBJbItQIDAQABo4IFTDCCBUgw
CwYDVR0PBAQDAgeAMGcGA1UdIARgMF4wXAYLKwYBBAGCqDsCAgEwTTBLBggrBgEF
BQcCARY/aHR0cDovL3d3dy5lY2kuYmNlLmVjL3BvbGl0aWNhLWNlcnRpZmljYWRv
L3BlcnNvbmEtanVyaWRpY2EucGRmMIGRBggrBgEFBQcBAQSBhDCBgTA+BggrBgEF
BQcwAYYyaHR0cDovL29jc3AuZWNpLmJjZS5lYy9lamJjYS9wdWJsaWN3ZWIvc3Rh
dHVzL29jc3AwPwYIKwYBBQUHMAGGM2h0dHA6Ly9vY3NwMS5lY2kuYmNlLmVjL2Vq
YmNhL3B1YmxpY3dlYi9zdGF0dXMvb2NzcDBQBgorBgEEAYKoOwMKBEITQEFTT0NJ
QUNJT04gTVVUVUFMSVNUQSBERSBBSE9SUk8gWSBDUkVESVRPIFBBUkEgTEEgVklW
SUVOREEgQVpVQVkwHQYKKwYBBAGCqDsDCwQPEw0wMTkwMDA2MjQ3MDAxMBoGCisG
AQQBgqg7AwEEDBMKMDEwNTY4MTczODAeBgorBgEEAYKoOwMCBBATDk1BUklBIEdB
QlJJRUxBMBgGCisGAQQBgqg7AwMEChMITUVORElFVEEwGAYKKwYBBAGCqDsDBAQK
EwhHVUVSUkVSTzAkBgorBgEEAYKoOwMFBBYTFEFTSVNURU5URSBGSU5BTkNJRVJP
MCwGCisGAQQBgqg7AwcEHhMcSEVSTUFOTyBNSUdVRUwgWSBCT0xJVkFSIEVTUTAZ
BgorBgEEAYKoOwMIBAsTCTA3NTAwNTA1MDAWBgorBgEEAYKoOwMJBAgTBkN1ZW5j
YTAXBgorBgEEAYKoOwMMBAkTB0VDVUFET1IwIAYKKwYBBAGCqDsDMwQSExBTT0ZU
V0FSRS1BUkNISVZPMCEGA1UdEQQaMBiBFm1tZW5kaWV0YUBtdXRhenVheS5jb20w
ggHhBgNVHR8EggHYMIIB1DCCAdCgggHMoIIByIaB1mxkYXA6Ly9iY2VxbGRhcHN1
YnAxLmJjZS5lYy9jbj1DUkwxNjAxLGNuPUFDJTIwQkFOQ08lMjBDRU5UUkFMJTIw
REVMJTIwRUNVQURPUixsPVFVSVRPLG91PUVOVElEQUQlMjBERSUyMENFUlRJRklD
QUNJT04lMjBERSUyMElORk9STUFDSU9OLUVDSUJDRSxvPUJBTkNPJTIwQ0VOVFJB
TCUyMERFTCUyMEVDVUFET1IsYz1FQz9jZXJ0aWZpY2F0ZVJldm9jYXRpb25MaXN0
P2Jhc2WGNGh0dHA6Ly93d3cuZWNpLmJjZS5lYy9DUkwvZWNpX2JjZV9lY19jcmxm
aWxlY29tYi5jcmykgbYwgbMxCzAJBgNVBAYTAkVDMSIwIAYDVQQKExlCQU5DTyBD
RU5UUkFMIERFTCBFQ1VBRE9SMTcwNQYDVQQLEy5FTlRJREFEIERFIENFUlRJRklD
QUNJT04gREUgSU5GT1JNQUNJT04tRUNJQkNFMQ4wDAYDVQQHEwVRVUlUTzElMCMG
A1UEAxMcQUMgQkFOQ08gQ0VOVFJBTCBERUwgRUNVQURPUjEQMA4GA1UEAxMHQ1JM
MTYwMTArBgNVHRAEJDAigA8yMDIyMTAyNjE0MDcwNVqBDzIwMjQxMDI2MTQzNzA1
WjAfBgNVHSMEGDAWgBRIot8jHx34LFF6jAPNSTKlCcGUqzAdBgNVHQ4EFgQUXgdS
AOOt2J7YWgDtZq20OTx4FKkwCQYDVR0TBAIwADAZBgkqhkiG9n0HQQAEDDAKGwRW
OC4xAwIEsDANBgkqhkiG9w0BAQsFAAOCAgEAj0t3Pd9fPoGyheyA5vYKDAkfMYZk
WVMhg/r68MUMU2ll/aFr+79C1raCgqLVQurB88HA8RPAzgkXySNUw4yMMQWP8Zg4
k0LgbtUZm1qVXQacWKa77rbpSHdQauzzP6P/x7dHPg+zjl0GTFfkyMAsddruyUOO
0MhYo7srsxSC8S833eo3P2a6E6Jmf/YrgeiMjyDuiOJ5J89bcO8/7mA4Ej6HImCh
XGrWKvQKGBAHK7j320nFfFKGa9f5QtOcHEKyIhfYLxwFKdD4/rtXWNJF+qJTb9Ha
2eTSBeNUb97ocbstfx/F/eX6X/YToLXSw36nZJ9qzfhF5kX1iL1MM3pJlI1JfEJW
3bDrpJBwyVPzV7HBd2mHZU5oGcNt26TjF4RcNzo4tGP2+LauO7wtIjMDdb7OERpH
G+iu/8s6KEtH30jSVvbYZG5OxsQEX+6yHXXpNhARR/hcfXYsdM8ltac/3IZRtCaT
PVtOphi4+MBNoESVW4rcgY4lxxqCQFcmIOIOOmFe/e2LqOmjfgQlgE0gYCYSVaA4
ly+letlnO93q0QONfMcst2yvpQLKQN60lF7H4pWUqCWRrBq+ps3TWw2Jf4eSbW5s
RJJ7iGulTwOZ6/6coCNOevIB5MEaZGJ9eezJfiDhdijrFaDu+UTCJhMFRCBB3//r
hpgEd93qthJqous=
    </ds:X509Certificate></ds:X509Data>
</ds:KeyInfo><ds:Object><etsi:QualifyingProperties xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Target="#Signature-221546281"><etsi:SignedProperties Id="SignedProperties-42219498"><etsi:SignedSignatureProperties><etsi:SigningTime>2024-03-01T21:11:40.713Z</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>MSFvOPcmcf71/EjylztmeNPspao=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AC BANCO CENTRAL DEL ECUADOR, L=QUITO, OU=ENTIDAD DE CERTIFICACION DE INFORMACION-ECIBCE, O=BANCO CENTRAL DEL ECUADOR, C=EC</ds:X509IssuerName><ds:X509SerialNumber>1534019208</ds:X509SerialNumber></etsi:IssuerSerial>
          </etsi:Cert>
        </etsi:SigningCertificate>
      </etsi:SignedSignatureProperties>
    </etsi:SignedProperties>
  </etsi:QualifyingProperties>
</ds:Object></ds:Signature></factura>]]>
</comprobante>
<mensajes></mensajes>
</Authorization>`,
  ORGINAL: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<autorizacion>
    <estado>AUTORIZADO</estado>
    <numeroAutorizacion>0101202301010219347100120120100003731490037314918</numeroAutorizacion>
    <fechaAutorizacion>2023-01-09T23:25:36-05:00</fechaAutorizacion>
    <ambiente>PRODUCCIÓN</ambiente>
    <comprobante>
        <![CDATA[
        
        <?xml version="1.0" encoding="UTF-8" standalone="no"?><factura id="comprobante" version="1.1.0"><infoTributaria><ambiente>2</ambiente><tipoEmision>1</tipoEmision><razonSocial>BALAREZO ULLAURI LEONARDO PAUL</razonSocial><nombreComercial>PRIMAX SAYAUSI</nombreComercial><ruc>0102193471001</ruc><claveAcceso>0101202301010219347100120120100003731490037314918</claveAcceso><codDoc>01</codDoc><estab>012</estab><ptoEmi>010</ptoEmi><secuencial>000373149</secuencial><dirMatriz>SAYAUSI                                        TELEFONO: 6006951</dirMatriz></infoTributaria><infoFactura><fechaEmision>01/01/2023</fechaEmision><dirEstablecimiento>AV.ORDONEZ</dirEstablecimiento><obligadoContabilidad>SI</obligadoContabilidad><tipoIdentificacionComprador>05</tipoIdentificacionComprador><razonSocialComprador>LEON UYAGUARI MONICA</razonSocialComprador><identificacionComprador>0301906053</identificacionComprador><totalSinImpuestos>8.93</totalSinImpuestos><totalSubsidio>5.20</totalSubsidio><totalDescuento>0.00</totalDescuento><totalConImpuestos><totalImpuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><baseImponible>8.93</baseImponible><valor>1.07</valor></totalImpuesto>
</totalConImpuestos><propina>0.00</propina><importeTotal>10.00</importeTotal><moneda>DOLAR</moneda><placa>PBI5429</placa><pagos><pago><formaPago>01</formaPago><total>10.00</total></pago>
</pagos>
</infoFactura><detalles><detalle><codigoPrincipal>0101           </codigoPrincipal><descripcion>ECOPAIS</descripcion><cantidad>4.17</cantidad><precioUnitario>2.1427</precioUnitario><precioSinSubsidio>3.3907</precioSinSubsidio><descuento>0.00</descuento><precioTotalSinImpuesto>8.93</precioTotalSinImpuesto><impuestos><impuesto><codigo>2</codigo><codigoPorcentaje>2</codigoPorcentaje><tarifa>12</tarifa><baseImponible>8.93</baseImponible><valor>1.07</valor></impuesto>
</impuestos>
</detalle>
</detalles><infoAdicional><campoAdicional nombre="Email1">primax.sayausi.electronicas@gmail.com</campoAdicional><campoAdicional nombre="Direccion:">CUENCA</campoAdicional><campoAdicional nombre="Vendedor  :">EH</campoAdicional><campoAdicional nombre="Valor Sin Subsidio:">14.13</campoAdicional><campoAdicional nombre="Ahorro: Subsidio :">5.20</campoAdicional><campoAdicional nombre="PLACA:">PBI5429</campoAdicional><campoAdicional nombre="Contribuyente Especial.">ResolucioN Nro: NAC-GTRRIOC21-00001375-E</campoAdicional></infoAdicional><ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature294026"><ds:SignedInfo Id="Signature-SignedInfo373782"><ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/><ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/><ds:Reference Id="SignedPropertiesID364917" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature294026-SignedProperties968748"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>g2KicLnaOaIyZr0Z1o4AlH9KTRI=</ds:DigestValue></ds:Reference><ds:Reference URI="#Certificate1822387"><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>Ynm2n/I7PG+eJMr3xdEPCl7/Iks=</ds:DigestValue></ds:Reference><ds:Reference Id="Reference-ID-726502" URI="#comprobante"><ds:Transforms><ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
</ds:Transforms><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>lOG3wU1CoEsp0QMgpjrjiXEEWTY=</ds:DigestValue></ds:Reference>
</ds:SignedInfo><ds:SignatureValue Id="SignatureValue684011">
CQ2c7Kk1IUEG34cGUI5Jrf/4DkgthLKoIjOO2A8AtmdaS9e5kSho4l105iRn1dx0ktXsUT9zxg8M
LDn4SGkP3GwqcIHaL+WWnBPcj/Mb6plpU/cftWk080oWkEXpaNOy3i1/B/5033R5wqh1e2dKJOzT
FtUBlbT9rWQ3nVwdMriAepVmjjUpoyC9PQkwhe4k5fsUHy85lSS1Wr2hhPiyxN3VfxlaIcaYIorw
CwclMr23E+HvIYmbetJ9V8GzQeegbWsAQKyDACPTs8ZquCSCxeMElNEdpg+QLjCrYNcdPdrjTccq
Ns9CyrtHnF35a+oEA299pKWfRjLJOqVQm6E3yQ==
</ds:SignatureValue><ds:KeyInfo Id="Certificate1822387"><ds:X509Data><ds:X509Certificate>
MIILvjCCCaagAwIBAgIEfgtDJDANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTIgU0VDVVJJVFkgREFUQTAeFw0yMTA1MDIyMzMyMDdaFw0yMzA1MDIyMzMyMDdaMIGeMScw
JQYDVQQDDB5MRU9OQVJETyBQQVVMIEJBTEFSRVpPIFVMTEFVUkkxFTATBgNVBAUTDDAyMDUyMTE4
NDIwNDEwMC4GA1UECwwnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OMR0w
GwYDVQQKDBRTRUNVUklUWSBEQVRBIFMuQS4gMjELMAkGA1UEBhMCRUMwggEiMA0GCSqGSIb3DQEB
AQUAA4IBDwAwggEKAoIBAQDIDGKeDKvf7/PvXoj/udiI2SJgN802J4YK5aLCRLnb1LwLT75JDVXm
YRoQrs1Hau0AjmnIdY6wHa7sxGX9sPmCpkjm9DWXeq7HhgdvwCozE9rIcRj5Wno+7aQqV4lF5Hw4
wZhPF0cy/1tsU7v7a34pZkRL6FoPQH+CYxb/aHAuqocovey5RiQLC2WUbDNxY/GubC5viYXHyTJB
IwdOpZMxYIp51ecv4Yo7fV+263zgf9OzaFwNCWCVmv1lZ4VK5lTh3IlAaIcaQRlaQssD3NXDwEAm
AO8RWLeat8uOB/mMgemdUnWr7Oe5yv4yy5R9GwLWRFnOYz48RElP/KB5IqknAgMBAAGjggcFMIIH
ATAMBgNVHRMBAf8EAjAAMB8GA1UdIwQYMBaAFIy6yhFXeCWAHWsKS1W/ja5i3b2PMFkGCCsGAQUF
BwEBBE0wSzBJBggrBgEFBQcwAYY9aHR0cDovL29jc3Bndy5zZWN1cml0eWRhdGEubmV0LmVjL2Vq
YmNhL3B1YmxpY3dlYi9zdGF0dXMvb2NzcDCBzwYDVR0uBIHHMIHEMIHBoIG+oIG7hoG4bGRhcDov
L2xkYXBzZGNhMi5zZWN1cml0eWRhdGEubmV0LmVjL0NOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FD
SU9OIFNVQkNBLTIgU0VDVVJJVFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUg
SU5GT1JNQUNJT04sTz1TRUNVUklUWSBEQVRBIFMuQS4gMixDPUVDP2RlbHRhUmV2b2NhdGlvbkxp
c3Q/YmFzZTAdBgNVHREEFjAUgRJsYmFsYXJlekB5YWhvby5jb20wggEGBgNVHSAEgf4wgfswWgYK
KwYBBAGCpnICBzBMMEoGCCsGAQUFBwICMD4ePABDAGUAcgB0AGkAZgBpAGMAYQBkAG8AIABkAGUA
IABQAGUAcgBzAG8AbgBhACAATgBhAHQAdQByAGEAbDCBnAYKKwYBBAGCpnICATCBjTCBigYIKwYB
BQUHAgEWfmh0dHBzOi8vd3d3LnNlY3VyaXR5ZGF0YS5uZXQuZWMvd3AtY29udGVudC9kb3dubG9h
ZHMvTm9ybWF0aXZhcy9QX2RlX0NlcnRpZmljYWRvcy9Qb2xpdGljYXMgZGUgQ2VydGlmaWNhZG8g
UGVyc29uYSBOYXR1cmFsLnBkZjCCAqIGA1UdHwSCApkwggKVMIHloEGgP4Y9aHR0cDovL29jc3Bn
dy5zZWN1cml0eWRhdGEubmV0LmVjL2VqYmNhL3B1YmxpY3dlYi9zdGF0dXMvb2NzcKKBn6SBnDCB
mTE5MDcGA1UEAwwwQVVUT1JJREFEIERFIENFUlRJRklDQUNJT04gU1VCQ0EtMiBTRUNVUklUWSBE
QVRBMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04xHTAb
BgNVBAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAyMQswCQYDVQQGEwJFQzCBx6CBxKCBwYaBvmxkYXA6
Ly9sZGFwc2RjYTIuc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNB
Q0lPTiBTVUJDQS0yIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERF
IElORk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDIsQz1FQz9jZXJ0aWZpY2F0ZVJldm9j
YXRpb25MaXN0P2Jhc2UwgeCggd2ggdqGgddodHRwczovL3BvcnRhbC1vcGVyYWRvcjIuc2VjdXJp
dHlkYXRhLm5ldC5lYy9lamJjYS9wdWJsaWN3ZWIvd2ViZGlzdC9jZXJ0ZGlzdD9jbWQ9Y3JsJmlz
c3Vlcj1DTj1BVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0yIFNFQ1VSSVRZIERBVEEs
T1U9RU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OLE89U0VDVVJJVFkgREFU
QSBTLkEuIDIsQz1FQzAdBgNVHQ4EFgQUjdc3waaNtB3yrOHYrl+aL6PHu/EwKwYDVR0QBCQwIoAP
MjAyMTA1MDIyMzMyMDdagQ8yMDIzMDUwMjIzMzIwN1owCwYDVR0PBAQDAgXgMBoGCisGAQQBgqZy
AwEEDAwKMDEwMjE5MzQ3MTAVBgorBgEEAYKmcgMJBAcMBVFVSVRPMBEGCisGAQQBgqZyAyIEAwwB
LjAeBgorBgEEAYKmcgMHBBAMDk1BTlRBIE9FNC0gNTczMB0GCisGAQQBgqZyAwIEDwwNTEVPTkFS
RE8gUEFVTDAfBgorBgEEAYKmcgMgBBEMDzAwMTAwMjAwMDExMzkzMDARBgorBgEEAYKmcgMjBAMM
AS4wEwYKKwYBBAGCpnIDIQQFDANQRlgwFwYKKwYBBAGCpnIDDAQJDAdFQ1VBRE9SMBgGCisGAQQB
gqZyAwMECgwIQkFMQVJFWk8wEQYKKwYBBAGCpnIDHgQDDAEuMB0GCisGAQQBgqZyAwsEDwwNMDEw
MjE5MzQ3MTAwMTARBgorBgEEAYKmcgMdBAMMAS4wFwYKKwYBBAGCpnIDBAQJDAdVTExBVVJJMBwG
CisGAQQBgqZyAwgEDgwMNTkzOTkyMDQ4Nzk0MA0GCSqGSIb3DQEBCwUAA4ICAQAtZESlYHcX567Y
T9Ko8Tbwi8Z1RF6eTJGl9BeZQBKpFnbW5klSUoojTq/KUi7hN1xOnqG0+xzGuXVmobDVx13qNGmR
6gpQ1MZG9bhNtWjDdv1NxxbgEwGVfCb0hFfHwq4ASP9w/w/ry/AHNvcGkWnEjE5s5ZXEI2krqXX5
5+cHgyVFEfMKTDSSRtTQy0U0AwHdpkcD9J77Cqo44EpqTpHvN2asnHwmrdCWXpZtypV/gLGSI1Xe
eStVVfTfi70iqkhe4pDg0q5JKpvMa6j349+6uuqijcnbKA2gq8usB7BTxTVe61yFCSrePsv9RLKG
fR3auf/FGC+JHVf/jg8T4F43u8CeFeYF0SIoCRFw0F5eZMEPGUvGeORI+/O9uKyeleT9pthxjY59
ItRGGHL18ZxyZaAl/4HGcOuMckBhxfdI63W5dBBB054+vsKPxlFAaJJjutFZrclYmQO9V8O5zVaL
oaVrVNtwS+2touEBoM6AWiw7YBtxAQ72+JKUXDkniC+DOIFmBGGpn1e50oQRUE2jQE8HREj/CbEa
/BmnX6eBSjgLnmOXs0s5sLUhzVgSXncWTun6aCKZdjX64zyLE7pKfiRiKIsl8lEl8t1RBh1l0rps
aXQMhINuUyPc4Sxw9qkJjQLkoJPkQTZAZx/X7tVWVtL+3/FbcgITLY7VUCRDCA==
</ds:X509Certificate></ds:X509Data><ds:KeyValue><ds:RSAKeyValue><ds:Modulus>
yAxingyr3+/z716I/7nYiNkiYDfNNieGCuWiwkS529S8C0++SQ1V5mEaEK7NR2rtAI5pyHWOsB2u
7MRl/bD5gqZI5vQ1l3qux4YHb8AqMxPayHEY+Vp6Pu2kKleJReR8OMGYTxdHMv9bbFO7+2t+KWZE
S+haD0B/gmMW/2hwLqqHKL3suUYkCwtllGwzcWPxrmwub4mFx8kyQSMHTqWTMWCKedXnL+GKO31f
tut84H/Ts2hcDQlglZr9ZWeFSuZU4dyJQGiHGkEZWkLLA9zVw8BAJgDvEVi3mrfLjgf5jIHpnVJ1
q+znucr+MsuUfRsC1kRZzmM+PERJT/ygeSKpJw==
</ds:Modulus><ds:Exponent>AQAB</ds:Exponent></ds:RSAKeyValue>
</ds:KeyValue>
</ds:KeyInfo><ds:Object Id="Signature294026-Object301558"><etsi:QualifyingProperties Target="#Signature294026"><etsi:SignedProperties Id="Signature294026-SignedProperties968748"><etsi:SignedSignatureProperties><etsi:SigningTime>2023-01-09T23:13:00-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>NK9vaX/2H7Iv86HiAgb8pJZeC9Q=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-2 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 2,C=EC</ds:X509IssuerName><ds:X509SerialNumber>2114667300</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-726502"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></factura>]]>

</comprobante>
<mensajes/>
</autorizacion>`,

  CREDIT_NOTE_ADDITIONAL_INFORMATION: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<autorizacion>
<estado>AUTORIZADO</estado>
<numeroAutorizacion>0807202404099226219200120021020007947940810324019</numeroAutorizacion>
<fechaAutorizacion>2024-07-08T10:39:29-05:00</fechaAutorizacion>
<ambiente>PRODUCCIÓN</ambiente>
<comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?>
<notaCredito id="comprobante" version="1.1.0">
  <infoTributaria>
    <ambiente>2</ambiente>
    <tipoEmision>1</tipoEmision>
    <razonSocial>LETERAGO DEL ECUADOR S.A.</razonSocial>
    <nombreComercial>LETERAGO</nombreComercial>
    <ruc>0992262192001</ruc>
    <claveAcceso>0807202404099226219200120021020007947940810324019</claveAcceso>
    <codDoc>04</codDoc>
    <estab>002</estab>
    <ptoEmi>102</ptoEmi>
    <secuencial>000794794</secuencial>
    <dirMatriz>Manuel Cordova Galarza km 6</dirMatriz>
  </infoTributaria>
  <infoNotaCredito>
    <fechaEmision>08/07/2024</fechaEmision>
    <dirEstablecimiento>Sta. Leonor 10 Solares 5A y 6A - Guayaquil - Guayas</dirEstablecimiento>
    <tipoIdentificacionComprador>04</tipoIdentificacionComprador>
    <razonSocialComprador>FARMACIA COMUNITARIA NATIVIDAD</razonSocialComprador>
    <identificacionComprador>0106156730001</identificacionComprador>
    <contribuyenteEspecial>345</contribuyenteEspecial>
    <obligadoContabilidad>SI</obligadoContabilidad>
    <codDocModificado>01</codDocModificado>
    <numDocModificado>002-102-001307731</numDocModificado>
    <fechaEmisionDocSustento>31/08/2023</fechaEmisionDocSustento>
    <totalSinImpuestos>12.000000</totalSinImpuestos>
    <valorModificacion>12.000000</valorModificacion>
    <moneda>DOLAR</moneda>
    <totalConImpuestos>
      <totalImpuesto>
        <codigo>2</codigo>
        <codigoPorcentaje>0</codigoPorcentaje>
        <baseImponible>12.0000000000</baseImponible>
        <valor>0.000000</valor>
      </totalImpuesto>
    </totalConImpuestos>
    <motivo>Producto a Vencer</motivo>
  </infoNotaCredito>
  <detalles>
    <detalle>
      <codigoInterno>7702605160174</codigoInterno>
      <codigoAdicional>053-001-GE16017</codigoAdicional>
      <descripcion>AMLODIPINO 5mg CAJA x 10 TABLETAS</descripcion>
      <cantidad>6.000000</cantidad>
      <precioUnitario>3.000000</precioUnitario>
      <descuento>6.00</descuento>
      <precioTotalSinImpuesto>12.00</precioTotalSinImpuesto>
      <detallesAdicionales>
        <detAdicional nombre="detAdicionalBoni" valor="0"></detAdicional>
        <detAdicional nombre="detAdicionalLote_Vence" valor="C01570E_01/08/2024"></detAdicional>
        <detAdicional nombre="detAdicionalDescuento" valor="33.33"></detAdicional>
      </detallesAdicionales>
      <impuestos>
        <impuesto>
          <codigo>2</codigo>
          <codigoPorcentaje>0</codigoPorcentaje>
          <tarifa>0</tarifa>
          <baseImponible>12.00</baseImponible>
          <valor>0.00</valor>
        </impuesto>
      </impuestos>
    </detalle>
  </detalles>
  <infoAdicional>
    <campoAdicional nombre="infoAdicionalComprobante">NCMC</campoAdicional>
    <campoAdicional nombre="infoAdicionalDevoClien">0</campoAdicional>
    <campoAdicional nombre="infoAdicionalDirecCliente">CALLE  MANANTIAL S/N Y FRANCISCO VIDAL</campoAdicional>
    <campoAdicional nombre="infoAdicionalVendedor">GE021 - GE Herrera Jessenia</campoAdicional>
    <campoAdicional nombre="infoAdicionalObser">5295 - 596 RP 05/07/2024 01/07/2024</campoAdicional>
    <campoAdicional nombre="infoAdicionalZona">0</campoAdicional>
    <campoAdicional nombre="infoAdicionalDsctTotal">6.00</campoAdicional>
    <campoAdicional nombre="infoAdicionalContribuyente">Gran Contribuyente NAC-GCFOIOC21-00000915-E</campoAdicional>
    <campoAdicional nombre="infoAdicionalCliente">51491 - SANCHEZ CABRERA JORDY ADRIAN</campoAdicional>
  </infoAdicional>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature683875">
<ds:SignedInfo Id="Signature-SignedInfo540228">
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>
<ds:Reference Id="SignedPropertiesID691858" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature683875-SignedProperties22188">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
<ds:DigestValue>8oFsLmtqZfeOtaAIckJt/QvP0xE=</ds:DigestValue>
</ds:Reference>
<ds:Reference URI="#Certificate1759647">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
<ds:DigestValue>gqWnlWTuDrJ1tWUMPtjNF5ID6w4=</ds:DigestValue>
</ds:Reference>
<ds:Reference Id="Reference-ID-803532" URI="#comprobante">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
<ds:DigestValue>kB6ykFmWWk0RPa+YtcIZ8W+hj/0=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue Id="SignatureValue30127">
pRWqcjuSK/eaeLKgRjKNL45fDz8C//0FbfjWocH4dl9KZp0NIKH9mW6l88P/SbrOwx0A/aLM1FGB
ipEsNh4McYLv3MseL2BJ41qJQAMwGQi4KneiXjI4rF7BG+3IWT4R9UfFl2TCZoZhqn1e45JdemLI
O61t8tNMrhp4vP6+lBIIiKNHpSOhA/BXx9rtLTUVsgWVDa2Y24zKyOTE+d4ENzfPrt7RnDDO8oy3
mPAtPYLVNWd+UdRzXyjTe5DjJU4r1IpvvpwrjrmZWY4AiP4Qzv93fVQoEkbKt41vTBkWW5yXXG/x
/mJ7DSkJnlWJK18ZaGWXw+RQGLKrad2aR1ZFGQ==
</ds:SignatureValue>
<ds:KeyInfo Id="Certificate1759647">
<ds:X509Data>
<ds:X509Certificate>
MIILdjCCCV6gAwIBAgIELVU8ujANBgkqhkiG9w0BAQsFADCBmTELMAkGA1UEBhMCRUMxHTAbBgNV
BAoMFFNFQ1VSSVRZIERBVEEgUy5BLiAxMTAwLgYDVQQLDCdFTlRJREFEIERFIENFUlRJRklDQUNJ
T04gREUgSU5GT1JNQUNJT04xOTA3BgNVBAMMMEFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTEgU0VDVVJJVFkgREFUQTAeFw0yMTAyMTgyMDE2MThaFw0yNTAyMTgyMDE2MThaMIGbMQsw
CQYDVQQGEwJFQzEdMBsGA1UECgwUU0VDVVJJVFkgREFUQSBTLkEuIDExMDAuBgNVBAsMJ0VOVElE
QUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEVMBMGA1UEBRMMMTgwMjIxMTUyNjQ3
MSQwIgYDVQQDDBtBTUlMQ0FSIFJFTkUgSkFDT01FIEdVRVJST04wggEiMA0GCSqGSIb3DQEBAQUA
A4IBDwAwggEKAoIBAQCs99hBeGdqLWLjGbE/NBXtNLscj12DpupDpJh+oOmb2QdpC9h+NnxI4L3c
SsCmmfvcsvE0832tlWDTZFBiIdAQvB0hh3/fF9cyn2m06h/YN6Eah/fUBef4oZCvGx5lYipCnkFA
YG+sjqnexvA4KRMUhp43XYyaQVEhtE0XWlpWsZafCFQOGypzcpdfUHw+7IRNM5xP2jaW6+am58eq
PXX/85/Thg7vP1l9WZYlPbO60bYKYMbiKy1Z0DjOxz3MnGpJQnUyxY/rFWfOOMXBrDhb62UyHupf
NOZUbVZptG65tS1toSRD4UW9iTtq88hF8HLm6y2+IhISpjwBiuN0LTl9AgMBAAGjggbAMIIGvDBZ
BggrBgEFBQcBAQRNMEswSQYIKwYBBQUHMAGGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5l
dC5lYy9lamJjYS9wdWJsaWN3ZWIvc3RhdHVzL29jc3AwHQYDVR0OBBYEFI3PyUi9PfJSfM0LBZ4i
Dv5S+Bg0MAwGA1UdEwEB/wQCMAAwHwYDVR0jBBgwFoAUXA+FpHQQ/K0BLBoAPZMXCfo5AdYwKwYD
VR0QBCQwIoAPMjAyMTAyMTgyMDE2MThagQ8yMDI1MDIxODIwMTYxOFowgcwGA1UdLgSBxDCBwTCB
vqCBu6CBuIaBtWxkYXA6Ly9sZGFwc2Quc2VjdXJpdHlkYXRhLm5ldC5lYy9DTj1BVVRPUklEQUQg
REUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0xIFNFQ1VSSVRZIERBVEEsT1U9RU5USURBRCBERSBDRVJU
SUZJQ0FDSU9OIERFIElORk9STUFDSU9OLE89U0VDVVJJVFkgREFUQSBTLkEuIDEsQz1FQz9kZWx0
YVJldm9jYXRpb25MaXN0P2Jhc2UwawYDVR0gBGQwYjBgBgorBgEEAYKmcgIKMFIwUAYIKwYBBQUH
AgIwRB5CAEMAZQByAHQAaQBmAGkAYwBhAGQAbwAgAGQAZQAgAE0AaQBlAG0AYgByAG8AIABkAGUA
IABFAG0AcAByAGUAcwBhMIICngYDVR0fBIIClTCCApEwgeWgQaA/hj1odHRwOi8vb2NzcGd3LnNl
Y3VyaXR5ZGF0YS5uZXQuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3NwooGfpIGcMIGZMTkw
NwYDVQQDDDBBVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUJDQS0xIFNFQ1VSSVRZIERBVEEx
MDAuBgNVBAsMJ0VOVElEQUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTjEdMBsGA1UE
CgwUU0VDVVJJVFkgREFUQSBTLkEuIDExCzAJBgNVBAYTAkVDMIHEoIHBoIG+hoG7bGRhcDovL2xk
YXBzZC5zZWN1cml0eWRhdGEubmV0LmVjL0NOPUFVVE9SSURBRCBERSBDRVJUSUZJQ0FDSU9OIFNV
QkNBLTEgU0VDVVJJVFkgREFUQSxPVT1FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JN
QUNJT04sTz1TRUNVUklUWSBEQVRBIFMuQS4gMSxDPUVDP2NlcnRpZmljYXRlUmV2b2NhdGlvbkxp
c3Q/YmFzZTCB36CB3KCB2YaB1mh0dHBzOi8vcG9ydGFsLW9wZXJhZG9yLnNlY3VyaXR5ZGF0YS5u
ZXQuZWMvZWpiY2EvcHVibGljd2ViL3dlYmRpc3QvY2VydGRpc3Q/Y21kPWNybCZpc3N1ZXI9Q049
QVVUT1JJREFEIERFIENFUlRJRklDQUNJT04gU1VCQ0EtMSBTRUNVUklUWSBEQVRBLE9VPUVOVElE
QUQgREUgQ0VSVElGSUNBQ0lPTiBERSBJTkZPUk1BQ0lPTixPPVNFQ1VSSVRZIERBVEEgUy5BLiAx
LEM9RUMwCwYDVR0PBAQDAgXgMCIGA1UdEQQbMBmBF2FqYWNvbWVAbGV0ZXJhZ28uY29tLmVjMBoG
CisGAQQBgqZyAwEEDAwKMDQwMTAzNjI0OTAcBgorBgEEAYKmcgMCBA4MDEFNSUxDQVIgUkVORTAW
BgorBgEEAYKmcgMDBAgMBkpBQ09NRTAXBgorBgEEAYKmcgMEBAkMB0dVRVJST04wIwYKKwYBBAGC
pnIDBQQVDBNDT05UQURPUiBUUklCVVRBUklPMFIGCisGAQQBgqZyAwcERAxCQVVUT1BJUyBNQU5V
RUwgQ09SRE9WQSBHQUxBUlpBIFM3LTMzMiBZIENBTExFIE9FMkYgREUgTEFTIFZJT0xFVEFTMBsG
CisGAQQBgqZyAwgEDQwLNTkzMjIzNTAyNTUwFQYKKwYBBAGCpnIDCQQHDAVRVUlUTzAoBgorBgEE
AYKmcgMKBBoMGExFVEVSQUdPIERFTCBFQ1VBRE9SIFMuQTAdBgorBgEEAYKmcgMLBA8MDTA5OTIy
NjIxOTIwMDEwFwYKKwYBBAGCpnIDDAQJDAdFQ1VBRE9SMBIGCisGAQQBgqZyAx0EBAwCTm8wHwYK
KwYBBAGCpnIDIAQRDA8wMDIwMDEwMDAxNTg3MjcwEwYKKwYBBAGCpnIDIQQFDANQRlgwEQYKKwYB
BAGCpnIDIgQDDAEuMA0GCSqGSIb3DQEBCwUAA4ICAQBaKtOfyYvQA+DJ+LM2o1nv3bwGkmkXFkE+
qC7Fgnpvr/R1EieCfOvRyLw2xIkC7LQoIEOG/OrqVBVXacErFYD98brlY/YW1y70Y9T2rGxt3Zvs
XF3JEmCQybUBf5JP+Me0wkYdTW1b1CqI75cwc5polVAtAj4045aklaNHfiIqt+HUm91FFLUMQYbo
pn6znvw4ycxx1RsZPbPMLTGurwQuvi840WblgE2ifKd1uGi0bqiYq72cCDJZtL3y4b8lvZfzgbvE
zhywuYCzvpVJ6JjC1KONw9ZGh1GszaljlNMkAm0Q/FzRdmgZzrePLZfdaeTGgZEobjLu57avXPXo
2hd6Iv+XNXDbSLSJVZUavTgo9YObJG+WcKme2kKeD+sqt7Xi/zID/Pv/1GJHGlw3xeSZOU8R33e+
tNJ2x+dTMKe0IUsMWCjBHseY9N5Lyy+x2Bvxy2BmjOiUYGhydxPSLYxidGEGPE8XI3Lu4P2JCABT
e7NT4yXjlHcJZHa3IWKJmwl91ZHRNK8AT3QUNZZ7q3taMjDSB/Q4ln62SaifNWLtai6gcdZvAklA
Psa1Vg8nmU5G/kxxE0OA69Vc8r/UMmbQ+CqD2POtpIfnU9IYKCLhudBFzSoM6CVm+jtkZZAc1ng8
r2UZixcQuNhhGOG43BJGJMA1EnRP0i5azfMDoSI/1Q==
</ds:X509Certificate>
</ds:X509Data>
<ds:KeyValue>
<ds:RSAKeyValue>
<ds:Modulus>
rPfYQXhnai1i4xmxPzQV7TS7HI9dg6bqQ6SYfqDpm9kHaQvYfjZ8SOC93ErAppn73LLxNPN9rZVg
02RQYiHQELwdIYd/3xfXMp9ptOof2DehGof31AXn+KGQrxseZWIqQp5BQGBvrI6p3sbwOCkTFIae
N12MmkFRIbRNF1paVrGWnwhUDhsqc3KXX1B8PuyETTOcT9o2luvmpufHqj11//Of04YO7z9ZfVmW
JT2zutG2CmDG4istWdA4zsc9zJxqSUJ1MsWP6xVnzjjFwaw4W+tlMh7qXzTmVG1WabRuubUtbaEk
Q+FFvYk7avPIRfBy5ustviISEqY8AYrjdC05fQ==
</ds:Modulus>
<ds:Exponent>AQAB</ds:Exponent>
</ds:RSAKeyValue>
</ds:KeyValue>
</ds:KeyInfo>
<ds:Object Id="Signature683875-Object769775"><etsi:QualifyingProperties Target="#Signature683875"><etsi:SignedProperties Id="Signature683875-SignedProperties22188"><etsi:SignedSignatureProperties><etsi:SigningTime>2024-07-08T10:32:42-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>xvNmy3S9NaRp/VnTs6/h4S0BzxA=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUBCA-1 SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A. 1,C=EC</ds:X509IssuerName><ds:X509SerialNumber>760560826</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-803532"><etsi:Description>comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></notaCredito>]]></comprobante>
<mensajes/>
</autorizacion>`,

  RETENTION_SALE: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?>
<autorizacion>
<estado>AUTORIZADO</estado>
<numeroAutorizacion>2308202407099253457500120010010000363781154101214</numeroAutorizacion>
<fechaAutorizacion>2024-08-30T16:07:03-05:00</fechaAutorizacion>
<ambiente>PRODUCCIÓN</ambiente>
<comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?><comprobanteRetencion id="comprobante" version="2.0.0">
  <infoTributaria>
    <ambiente>2</ambiente>
    <tipoEmision>1</tipoEmision>
    <razonSocial>OPERFEL SA</razonSocial>
    <ruc>0992534575001</ruc>
    <claveAcceso>2308202407099253457500120010010000363781154101214</claveAcceso>
    <codDoc>07</codDoc>
    <estab>001</estab>
    <ptoEmi>001</ptoEmi>
    <secuencial>000036378</secuencial>
    <dirMatriz>Via Daule Km 14.5</dirMatriz>
  </infoTributaria>
  <infoCompRetencion>
    <fechaEmision>23/08/2024</fechaEmision>
    <dirEstablecimiento>COOP LOS MANGUITOS, Calle 28 DE AGOSTO, VIA A DAULE Kim 14.5</dirEstablecimiento>
    <obligadoContabilidad>SI</obligadoContabilidad>
    <tipoIdentificacionSujetoRetenido>04</tipoIdentificacionSujetoRetenido>
    <parteRel>NO</parteRel>
    <razonSocialSujetoRetenido>CORPORACION DE REPRESENTACIONES Y SERVICIOS TECNICOS COREPTEC S.A.</razonSocialSujetoRetenido>
    <identificacionSujetoRetenido>1791286448001</identificacionSujetoRetenido>
    <periodoFiscal>08/2024</periodoFiscal>
  </infoCompRetencion>
  <docsSustento>
    <docSustento>
      <codSustento>01</codSustento>
      <codDocSustento>01</codDocSustento>
      <numDocSustento>001011000041074</numDocSustento>
      <fechaEmisionDocSustento>23/08/2024</fechaEmisionDocSustento>
      <fechaRegistroContable>23/08/2024</fechaRegistroContable>
      <numAutDocSustento>2308202401179128644800120010110000410741234567617</numAutDocSustento>
      <pagoLocExt>01</pagoLocExt>
      <totalSinImpuestos>3292.00</totalSinImpuestos>
      <importeTotal>3785.80</importeTotal>
      <impuestosDocSustento>
        <impuestoDocSustento>
          <codImpuestoDocSustento>2</codImpuestoDocSustento>
          <codigoPorcentaje>4</codigoPorcentaje>
          <baseImponible>3292.00</baseImponible>
          <tarifa>15</tarifa>
          <valorImpuesto>493.80</valorImpuesto>
        </impuestoDocSustento>
      </impuestosDocSustento>
      <retenciones>
        <retencion>
          <codigo>1</codigo>
          <codigoRetencion>312</codigoRetencion>
          <baseImponible>3292</baseImponible>
          <porcentajeRetener>1.75</porcentajeRetener>
          <valorRetenido>57.61</valorRetenido>
        </retencion>
      </retenciones>
      <pagos>
        <pago>
          <formaPago>20</formaPago>
          <total>3785.80</total>
        </pago>
      </pagos>
    </docSustento>
    <docSustento>
      <codSustento>01</codSustento>
      <codDocSustento>01</codDocSustento>
      <numDocSustento>001011000041074</numDocSustento>
      <fechaEmisionDocSustento>23/08/2024</fechaEmisionDocSustento>
      <fechaRegistroContable>23/08/2024</fechaRegistroContable>
      <numAutDocSustento>2308202401179128644800120010110000410741234567617</numAutDocSustento>
      <pagoLocExt>01</pagoLocExt>
      <totalSinImpuestos>3292.00</totalSinImpuestos>
      <importeTotal>3785.80</importeTotal>
      <impuestosDocSustento>
        <impuestoDocSustento>
          <codImpuestoDocSustento>2</codImpuestoDocSustento>
          <codigoPorcentaje>4</codigoPorcentaje>
          <baseImponible>3292.00</baseImponible>
          <tarifa>15</tarifa>
          <valorImpuesto>493.80</valorImpuesto>
        </impuestoDocSustento>
      </impuestosDocSustento>
      <retenciones>
        <retencion>
          <codigo>2</codigo>
          <codigoRetencion>9</codigoRetencion>
          <baseImponible>493.8</baseImponible>
          <porcentajeRetener>10</porcentajeRetener>
          <valorRetenido>49.38</valorRetenido>
        </retencion>
      </retenciones>
      <pagos>
        <pago>
          <formaPago>20</formaPago>
          <total>3785.80</total>
        </pago>
      </pagos>
    </docSustento>
  </docsSustento>
  <infoAdicional>
    <campoAdicional nombre="Email">milton.Pullupaxi@coreptec.com</campoAdicional>
    <campoAdicional nombre="Direccion">QUITO, CUMBAYA</campoAdicional>
    <campoAdicional nombre="Telefono">023550032</campoAdicional>
    <campoAdicional nombre="Agente de Retención">1</campoAdicional>
  </infoAdicional>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature802476">
<ds:SignedInfo Id="Signature-SignedInfo821710">
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"/>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"/>
<ds:Reference Id="SignedPropertiesID285365" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature802476-SignedProperties117545">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>BARi+K1IMwBm1Hjb8sjimq3DlMo=</ds:DigestValue>
</ds:Reference>
<ds:Reference URI="#Certificate1992965">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>xYnquhVqcwNbMTvZG0kToEEIZmg=</ds:DigestValue>
</ds:Reference>
<ds:Reference Id="Reference-ID-350710" URI="#comprobante">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"/>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/>
<ds:DigestValue>zIF+Wy7579/wIj2V9qUmqFT3BuY=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue Id="SignatureValue12039">
eB/NuRR4MJcsfd0G1kj9C7TD/5F4qpio6YTEkdwS1q//fSLm8/6HxZBr5jvEzN8wKGBxSGyzrbGX
LDAp/sm0/sn+CGJveVjl9kpTC6ZpnN2Oj638rf8CwQsvxJi0q4du1jaBEOF7hf5waO6E/S+aDf0p
dDhvZT219SESrP4Agq/cV+AkakKkxpp0p/IfiTw+w+VpjtEElzSFEURdFLSDOzcCV2B3yc3d++7J
SkGlsCgkRZESazGusq/YWzhsRavy2GLUKErgWMrZw5I2TYucGoZJWVkujX1hZJ4gqLPAyvzBmKn5
/p06AJHwKnmyYWUocPPDPLEQsGqD0jicae7eGA==
</ds:SignatureValue>
<ds:KeyInfo Id="Certificate1992965">
<ds:X509Data>
<ds:X509Certificate>
MIIJqjCCCJKgAwIBAgIEXcxrQDANBgkqhkiG9w0BAQsFADCBkzELMAkGA1UEBhMCRUMxGzAZBgNV
BAoTElNFQ1VSSVRZIERBVEEgUy5BLjEwMC4GA1UECxMnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9O
IERFIElORk9STUFDSU9OMTUwMwYDVQQDEyxBVVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUIg
U0VDVVJJVFkgREFUQTAeFw0yMDA0MDMxOTAxMzdaFw0yNTA0MDMxOTMxMzdaMIGVMQswCQYDVQQG
EwJFQzEbMBkGA1UEChMSU0VDVVJJVFkgREFUQSBTLkEuMTAwLgYDVQQLEydFTlRJREFEIERFIENF
UlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04xNzATBgNVBAUTDDAzMDQyMDE0MjM0ODAgBgNVBAMT
GVZJQ1RPUiBKT1NFIE5BREVSIEdBUlpPTkkwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIB
AQDODzqbuspvUUtuKrXt2CGSblC5pYojpBnqnEpA6FlCBfOTFn83vjmri3jwN70/z0hc4D0Vnf59
Fypvbq7v//HjkfNG/gJRvQ/73PrVzpGqIX+vvb6a27A7au8YO4/D2P7krEfe4mbkR3341MrTGeeS
jrqv8Xxfz28euIihjpqi+rShHnftP1QxgE68TD0D2NEGmQViBq8N2toXo6rzv03w9nDpj42DdS55
+8WWJ6BOx3euHzH6n42RKyvxrqA50uCAsFU25W/yot7ram8cBO+K5/MsLKWCkkX4o0D3Ao5oVmyB
UpQpZSKjZhK1AqqhwkooMnASbl/vVrKOE3LAAsvhAgMBAAGjggYAMIIF/DALBgNVHQ8EBAMCBeAw
WQYIKwYBBQUHAQEETTBLMEkGCCsGAQUFBzABhj1odHRwOi8vb2NzcGd3LnNlY3VyaXR5ZGF0YS5u
ZXQuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9vY3NwMIHMBgNVHSAEgcQwgcEwQAYKKwYBBAGC
pnICCTAyMDAGCCsGAQUFBwICMCQaIkNlcnRpZmljYWRvIGRlIFJlcHJlc2VudGFudGUgTGVnYWww
fQYKKwYBBAGCpnICAzBvMG0GCCsGAQUFBwIBFmFodHRwczovL3d3dy5zZWN1cml0eWRhdGEubmV0
LmVjL2xleWVzX25vcm1hdGl2YXMvUG9saXRpY2FzIGRlIENlcnRpZmljYWRvIFJlcHJlc2VudGFu
dGUgTGVnYWwucGRmMBwGCisGAQQBgqZyAwoEDhMMT1BFUkZFTCBTLkEuMB0GCisGAQQBgqZyAwsE
DxMNMDk5MjUzNDU3NTAwMTAaBgorBgEEAYKmcgMBBAwTCjA5MTI3Mjk0NjQwGwYKKwYBBAGCpnID
AgQNEwtWSUNUT1IgSk9TRTAVBgorBgEEAYKmcgMDBAcTBU5BREVSMBcGCisGAQQBgqZyAwQECRMH
R0FSWk9OSTAfBgorBgEEAYKmcgMFBBETD0dFUkVOVEUgR0VORVJBTDA3BgorBgEEAYKmcgMHBCkT
JzI4IERFIEFHT1NUTyBTL04gWSBDQUxMRSBMT1MgTUFOR1VJVE9TIDAbBgorBgEEAYKmcgMIBA0T
CzU5MzQ0NTQ5NjY2MBkGCisGAQQBgqZyAwkECxMJR1VBWUFRVUlMMBcGCisGAQQBgqZyAwwECRMH
RUNVQURPUjAfBgorBgEEAYKmcgMgBBETDzAwMTAwMjAwMDAzNjI2MjAgBgorBgEEAYKmcgMhBBIT
EFNFQ0RBVEs0MzYyNkggICAwHQYDVR0RBBYwFIEScm5hZGVyQG9wZXJmZWwuY29tMIICewYDVR0f
BIICcjCCAm4wggJqoIICZqCCAmKGPWh0dHA6Ly9vY3NwZ3cuc2VjdXJpdHlkYXRhLm5ldC5lYy9l
amJjYS9wdWJsaWN3ZWIvc3RhdHVzL29jc3CGgdVsZGFwOi8vZGlyZWN0LnNlY3VyaXR5ZGF0YS5u
ZXQuZWMvY249Q1JMNjYyLGNuPUFVVE9SSURBRCUyMERFJTIwQ0VSVElGSUNBQ0lPTiUyMFNVQiUy
MFNFQ1VSSVRZJTIwREFUQSxvdT1FTlRJREFEJTIwREUlMjBDRVJUSUZJQ0FDSU9OJTIwREUlMjBJ
TkZPUk1BQ0lPTixvPVNFQ1VSSVRZJTIwREFUQSUyMFMuQS4sYz1FQz9jZXJ0aWZpY2F0ZVJldm9j
YXRpb25MaXN0P2Jhc2WGgZ5odHRwczovL2RpcmVjdC5zZWN1cml0eWRhdGEubmV0LmVjL35jcmwv
YXV0b3JpZGFkX2RlX2NlcnRpZmljYWNpb25fc3ViX3NlY3VyaXR5X2RhdGFfZW50aWRhZF9kZV9j
ZXJ0aWZpY2FjaW9uX2RlX2luZm9ybWFjaW9uX2N1cml0eV9kYXRhX3MuYS5fY19lY19jcmxmaWxl
LmNybKSBpzCBpDELMAkGA1UEBhMCRUMxGzAZBgNVBAoTElNFQ1VSSVRZIERBVEEgUy5BLjEwMC4G
A1UECxMnRU5USURBRCBERSBDRVJUSUZJQ0FDSU9OIERFIElORk9STUFDSU9OMTUwMwYDVQQDEyxB
VVRPUklEQUQgREUgQ0VSVElGSUNBQ0lPTiBTVUIgU0VDVVJJVFkgREFUQTEPMA0GA1UEAxMGQ1JM
NjYyMCsGA1UdEAQkMCKADzIwMjAwNDAzMTkwMTM3WoEPMjAyNTA0MDMxOTMxMzdaMB8GA1UdIwQY
MBaAFPcvTOB152KjeJZbBrYucTvMbD+QMB0GA1UdDgQWBBREguSwUKulPChPRC2274K0E2dX+zAJ
BgNVHRMEAjAAMBkGCSqGSIb2fQdBAAQMMAobBFY4LjEDAgOoMA0GCSqGSIb3DQEBCwUAA4IBAQAp
ssojzqKsqNYa/0KUzNjXacoWQngQ3Dbpq7WbA8XDIKdMPRbamXEL60ilokJ5co1ONp2SEYRac8h0
k8SfnLYfAuCBOy53OGE2HKkwzfftBG2douzpCNttZRnVLMBcT0aGJv3GTdn3/Z649zyqKT4B6DtS
qD2LSE2w6KeWteuvQY071mvT60+d/mE6CScynsh8lpPZ+7ehmLVdWhmdw9m4wXvatvwDgZQj/xOg
aTc51jp33njiggA9Kf8pRcgkzlSHGxEcP6ZCs3k+NlOpEwrQjuTn/u381O+Lz0qiK3AEGl4afIac
v1duRk2qBvnZnQfSlx+VhKqBKXJIwztWLzlX
</ds:X509Certificate>
</ds:X509Data>
<ds:KeyValue>
<ds:RSAKeyValue>
<ds:Modulus>
zg86m7rKb1FLbiq17dghkm5QuaWKI6QZ6pxKQOhZQgXzkxZ/N745q4t48De9P89IXOA9FZ3+fRcq
b26u7//x45HzRv4CUb0P+9z61c6RqiF/r72+mtuwO2rvGDuPw9j+5KxH3uJm5Ed9+NTK0xnnko66
r/F8X89vHriIoY6aovq0oR537T9UMYBOvEw9A9jRBpkFYgavDdraF6Oq879N8PZw6Y+Ng3UuefvF
liegTsd3rh8x+p+NkSsr8a6gOdLggLBVNuVv8qLe62pvHATviufzLCylgpJF+KNA9wKOaFZsgVKU
KWUio2YStQKqocJKKDJwEm5f71ayjhNywALL4Q==
</ds:Modulus>
<ds:Exponent>AQAB</ds:Exponent>
</ds:RSAKeyValue>
</ds:KeyValue>
</ds:KeyInfo>
<ds:Object Id="Signature802476-Object55298"><etsi:QualifyingProperties Target="#Signature802476"><etsi:SignedProperties Id="Signature802476-SignedProperties117545"><etsi:SignedSignatureProperties><etsi:SigningTime>2024-08-30T21:07:01+00:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"/><ds:DigestValue>NFEDRb4CLbawTxvrGJI7VIbDHi8=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AUTORIDAD DE CERTIFICACION SUB SECURITY DATA,OU=ENTIDAD DE CERTIFICACION DE INFORMACION,O=SECURITY DATA S.A.,C=EC</ds:X509IssuerName><ds:X509SerialNumber>1573677888</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-350710"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></comprobanteRetencion>]]></comprobante>
<mensajes/>
</autorizacion>
`,
  PURCHASE_SETTLEMENT: `<?xml version="1.0" encoding="UTF-8" standalone="yes"?><autorizacion><estado>AUTORIZADO</estado><numeroAutorizacion>3108202403091651386400120010020000005851234567815</numeroAutorizacion><fechaAutorizacion>2024-09-03T19:06:37-05:00</fechaAutorizacion><ambiente>PRODUCCIÓN</ambiente><comprobante><![CDATA[<?xml version="1.0" encoding="UTF-8"?>
<liquidacionCompra id="comprobante" version="1.1.0">
<infoTributaria>
<ambiente>2</ambiente>
<tipoEmision>1</tipoEmision>
<razonSocial>PLUAS ESPINOZA GUIDO ROBERTO</razonSocial>
<nombreComercial>PLUAS ESPINOZA GUIDO ROBERTO</nombreComercial>
<ruc>0916513864001</ruc>
<claveAcceso>3108202403091651386400120010020000005851234567815</claveAcceso>
<codDoc>03</codDoc>
<estab>001</estab>
<ptoEmi>002</ptoEmi>
<secuencial>000000585</secuencial>
<dirMatriz>DIAGONAL AL DESVIO DEL RCTO. EL SALTO SN</dirMatriz>
<agenteRetencion>1</agenteRetencion>
</infoTributaria>
<infoLiquidacionCompra>
<fechaEmision>31/08/2024</fechaEmision>
<dirEstablecimiento>DIAGONAL AL DESVIO DEL RCTO. EL SALTO SN</dirEstablecimiento>
<obligadoContabilidad>SI</obligadoContabilidad>
<tipoIdentificacionProveedor>05</tipoIdentificacionProveedor>
<razonSocialProveedor>MARTINEZ CEREZO LEONARDO</razonSocialProveedor>
<identificacionProveedor>0929990109</identificacionProveedor>
<totalSinImpuestos>6857.80</totalSinImpuestos>
<totalDescuento>0.00</totalDescuento>
<totalConImpuestos>
<totalImpuesto>
<codigo>2</codigo>
<codigoPorcentaje>0</codigoPorcentaje>
<baseImponible>6857.80</baseImponible>
<valor>0.00</valor>
</totalImpuesto>
</totalConImpuestos>
<importeTotal>6857.80</importeTotal>
<moneda>DOLAR</moneda>
<pagos>
<pago>
<formaPago>20</formaPago>
<total>6857.80</total>
<plazo>0</plazo>
<unidadTiempo>DIAS</unidadTiempo>
</pago>
</pagos>
</infoLiquidacionCompra>
<detalles>
<detalle>
<codigoPrincipal>ACASGCORT</codigoPrincipal>
<codigoAuxiliar>ACASGCORT</codigoAuxiliar>
<descripcion>ARROZ CASCARA G. CORTO</descripcion>
<cantidad>201.700000</cantidad>
<precioUnitario>34.000</precioUnitario>
<descuento>0.00</descuento>
<precioTotalSinImpuesto>6857.80</precioTotalSinImpuesto>
<impuestos>
<impuesto>
<codigo>2</codigo>
<codigoPorcentaje>0</codigoPorcentaje>
<tarifa>0</tarifa>
<baseImponible>6857.80</baseImponible>
<valor>0.00</valor>
</impuesto>
</impuestos>
</detalle>
</detalles>
<infoAdicional>
<campoAdicional nombre="Direccion">LOS QUEMADOS</campoAdicional>
<campoAdicional nombre="Categorizado: ">AGENTE DE RETENCION</campoAdicional>
<campoAdicional nombre="Resolucion No.: ">RESOLUCION No. NAC-DNCRASC20-00000001</campoAdicional>
</infoAdicional>
<ds:Signature xmlns:ds="http://www.w3.org/2000/09/xmldsig#" xmlns:etsi="http://uri.etsi.org/01903/v1.3.2#" Id="Signature717868">
<ds:SignedInfo Id="Signature-SignedInfo283962">
<ds:CanonicalizationMethod Algorithm="http://www.w3.org/TR/2001/REC-xml-c14n-20010315"></ds:CanonicalizationMethod>
<ds:SignatureMethod Algorithm="http://www.w3.org/2000/09/xmldsig#rsa-sha1"></ds:SignatureMethod>
<ds:Reference Id="SignedPropertiesID831706" Type="http://uri.etsi.org/01903#SignedProperties" URI="#Signature717868-SignedProperties231623">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
<ds:DigestValue>glYRFXyjIJK5vb/gbh3zU5xjioY=</ds:DigestValue>
</ds:Reference>
<ds:Reference URI="#Certificate1971757">
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
<ds:DigestValue>JljgPVYNtNSza7xd/3y/+CCfK14=</ds:DigestValue>
</ds:Reference>
<ds:Reference Id="Reference-ID-434354" URI="#comprobante">
<ds:Transforms>
<ds:Transform Algorithm="http://www.w3.org/2000/09/xmldsig#enveloped-signature"></ds:Transform>
</ds:Transforms>
<ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod>
<ds:DigestValue>sKWaf2YbmoAU7AP6ud5On+u85c8=</ds:DigestValue>
</ds:Reference>
</ds:SignedInfo>
<ds:SignatureValue Id="SignatureValue84739">
fxfDqI9BGQG/eLPt2qLKq6UqdV+DqpJNcCsmI2bsG4fL8STfPHtW9Babi3y4px03rGK8bujn4Vv2
d2LLfGVpSp+PMydsTg/8KaP0Cdwyp0nILxMaR/ttCydUtrBP6tSfDmHY+5/IiilWkUePwbB+IX/q
729xchLRST8bKEpBsUZH35E7ddlhg37cCxlXj3c9dHY8C+PfdSq2MUmU5U6Uwxp0Dl/RT5D/znER
2AOyK8cudzc6toQm4txKj4Bvr/BcO8aCxU+Wp5frnox0X533ItGdwomsR6ZAWWdfid6zjcqA38p/
VKMh5NJmC2eVIZwERnpJ3BWytJ8eLQI1M9i6WQ==
</ds:SignatureValue>
<ds:KeyInfo Id="Certificate1971757">
<ds:X509Data>
<ds:X509Certificate>
MIIJnTCCB4WgAwIBAgIEW3EYajANBgkqhkiG9w0BAQsFADCBoTELMAkGA1UEBhMCRUMxIjAgBgNV
BAoTGUJBTkNPIENFTlRSQUwgREVMIEVDVUFET1IxNzA1BgNVBAsTLkVOVElEQUQgREUgQ0VSVElG
SUNBQ0lPTiBERSBJTkZPUk1BQ0lPTi1FQ0lCQ0UxDjAMBgNVBAcTBVFVSVRPMSUwIwYDVQQDExxB
QyBCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMB4XDTIyMTIxNzEyNDgwNVoXDTI0MTIxNzEzMTgw
NVowgbQxCzAJBgNVBAYTAkVDMSIwIAYDVQQKExlCQU5DTyBDRU5UUkFMIERFTCBFQ1VBRE9SMTcw
NQYDVQQLEy5FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04tRUNJQkNFMQ4w
DAYDVQQHEwVRVUlUTzE4MBEGA1UEBRMKMDAwMDgxNjc5NzAjBgNVBAMTHEdVSURPIFJPQkVSVE8g
UExVQVMgRVNQSU5PWkEwggEiMA0GCSqGSIb3DQEBAQUAA4IBDwAwggEKAoIBAQDFAPFeqrrw6YSF
wsz8RbRnvOyTv1s5NN8X/W+qYoico4lFnF8Wa3nrONm49o0XTJZPlLuZRWOaXiAQwiF2GFjix/b/
jIPmRCzMA8Wano61ZBu+Vx9bzxlNdWCPiIkPUBbEs/gGPBQ0w3a6DHmwm3hlXbOJZUVn9LmEaUT9
Ee3NBZq3z15EUHnc1dau4MO0KhZnnjXgcXzfrH2TOKC2D5aVzyZc5jyYYU5IC3FGWbEAh7ZSymza
1wPkdRxVUUcXP/d0FAQzR8vaWkaSLABqg4JMQClT4wd1/I1law4eLqET/vwjpa88Ixg0CB9r1t7G
5uFKjxWLWaugM/Iujhvu6n5xAgMBAAGjggTGMIIEwjALBgNVHQ8EBAMCB4AwZgYDVR0gBF8wXTBb
BgsrBgEEAYKoOwIBATBMMEoGCCsGAQUFBwIBFj5odHRwOi8vd3d3LmVjaS5iY2UuZWMvcG9saXRp
Y2EtY2VydGlmaWNhZG8vcGVyc29uYS1uYXR1cmFsLnBkZjCBkQYIKwYBBQUHAQEEgYQwgYEwPgYI
KwYBBQUHMAGGMmh0dHA6Ly9vY3NwLmVjaS5iY2UuZWMvZWpiY2EvcHVibGljd2ViL3N0YXR1cy9v
Y3NwMD8GCCsGAQUFBzABhjNodHRwOi8vb2NzcDEuZWNpLmJjZS5lYy9lamJjYS9wdWJsaWN3ZWIv
c3RhdHVzL29jc3AwGgYKKwYBBAGCqDsDAQQMEwowOTE2NTEzODY0MB0GCisGAQQBgqg7AwIEDxMN
R1VJRE8gUk9CRVJUTzAVBgorBgEEAYKoOwMDBAcTBVBMVUFTMBgGCisGAQQBgqg7AwQEChMIRVNQ
SU5PWkEwIQYKKwYBBAGCqDsDBwQTExFSRUNJTlRPIEVMIFNBTFRPIDAaBgorBgEEAYKoOwMIBAwT
CjA5MTY1MTM4NjQwFQYKKwYBBAGCqDsDCQQHEwVEYXVsZTAXBgorBgEEAYKoOwMMBAkTB0VDVUFE
T1IwHQYKKwYBBAGCqDsDCwQPEw0wOTE2NTEzODY0MDAxMCAGCisGAQQBgqg7AzMEEhMQU09GVFdB
UkUtQVJDSElWTzAjBgNVHREEHDAagRhhbGV4X3ZpbnVlemFAaG90bWFpbC5jb20wggHhBgNVHR8E
ggHYMIIB1DCCAdCgggHMoIIByIaB1mxkYXA6Ly9iY2VxbGRhcHN1YnAxLmJjZS5lYy9jbj1DUkwx
NzAzLGNuPUFDJTIwQkFOQ08lMjBDRU5UUkFMJTIwREVMJTIwRUNVQURPUixsPVFVSVRPLG91PUVO
VElEQUQlMjBERSUyMENFUlRJRklDQUNJT04lMjBERSUyMElORk9STUFDSU9OLUVDSUJDRSxvPUJB
TkNPJTIwQ0VOVFJBTCUyMERFTCUyMEVDVUFET1IsYz1FQz9jZXJ0aWZpY2F0ZVJldm9jYXRpb25M
aXN0P2Jhc2WGNGh0dHA6Ly93d3cuZWNpLmJjZS5lYy9DUkwvZWNpX2JjZV9lY19jcmxmaWxlY29t
Yi5jcmykgbYwgbMxCzAJBgNVBAYTAkVDMSIwIAYDVQQKExlCQU5DTyBDRU5UUkFMIERFTCBFQ1VB
RE9SMTcwNQYDVQQLEy5FTlRJREFEIERFIENFUlRJRklDQUNJT04gREUgSU5GT1JNQUNJT04tRUNJ
QkNFMQ4wDAYDVQQHEwVRVUlUTzElMCMGA1UEAxMcQUMgQkFOQ08gQ0VOVFJBTCBERUwgRUNVQURP
UjEQMA4GA1UEAxMHQ1JMMTcwMzArBgNVHRAEJDAigA8yMDIyMTIxNzEyNDgwNVqBDzIwMjQxMjE3
MTMxODA1WjAfBgNVHSMEGDAWgBRIot8jHx34LFF6jAPNSTKlCcGUqzAdBgNVHQ4EFgQU5dXoKRFL
pxXlymEWmUL02pfG7ekwCQYDVR0TBAIwADAZBgkqhkiG9n0HQQAEDDAKGwRWOC4xAwIEsDANBgkq
hkiG9w0BAQsFAAOCAgEAeLmqDdlNNIP5H/eJuUjDMGZQxmHxrFkmhCAgfzWV8RcLSYXIGDDe1Ymp
gtj9T8Jq0SyGFQwHBpuoBdiABqmnKSQHB59ggqutf/cMbMnEafWXejz6yI3OK5CHfm6U/PF1BYnr
pVQ4Wey5Y8XQCncUHy+5tdV/2v6x0dQlC7Wn1K4JwkVKavvyOQygLY9iECCxsTHm/KAxSZEp5i8D
HuuTv4aOhjnVJxSX19qy+YR9yIUepeYcUs9ZHqghVgzbGsyNsz1PuT99HEo6rBWI9RzZ0zIomFfD
WnawZXt2FxtIUNt3klctkwuOCuIwbnIORtxv3qBPrI4GPsWffeyHhseliZ1rQQPyGQ8XAt6etKrW
Q0qXpR/UNpOZYx2vf8gyQN+8s/8WDN8G3fRnPjkg0dqq+oIoUtg4o1/XTUzX6ZaXCfmYfMTgwH/a
2jR8cryhiLYsUJw7Z1K/hNuZfvLnT6VpUghFSlYRtvGq0C+Ep3pYAqbo8v8/GCWotfq/o9t/RUzj
7iHrYfJcXNb7Ib04iTkmfrK1P52lRPULXIakb4eJWcuRWrBP18HcGL8jTmNgk4dO6Wb4LvaS5u8z
iaRJSePqfBLDAeUnVJrJ6OJ07Dn6eoPM9MjRNEYhu0ARkKhDEl+cbTNw6p1myE427/KrYAhkTKtA
i88p+juT1/dRTl/0D5A=
</ds:X509Certificate>
</ds:X509Data>
<ds:KeyValue>
<ds:RSAKeyValue>
<ds:Modulus>
xQDxXqq68OmEhcLM/EW0Z7zsk79bOTTfF/1vqmKInKOJRZxfFmt56zjZuPaNF0yWT5S7mUVjml4g
EMIhdhhY4sf2/4yD5kQszAPFmp6OtWQbvlcfW88ZTXVgj4iJD1AWxLP4BjwUNMN2ugx5sJt4ZV2z
iWVFZ/S5hGlE/RHtzQWat89eRFB53NXWruDDtCoWZ5414HF836x9kzigtg+Wlc8mXOY8mGFOSAtx
RlmxAIe2Usps2tcD5HUcVVFHFz/3dBQEM0fL2lpGkiwAaoOCTEApU+MHdfyNZWsOHi6hE/78I6Wv
PCMYNAgfa9bexubhSo8Vi1mroDPyLo4b7up+cQ==
</ds:Modulus>
<ds:Exponent>AQAB</ds:Exponent>
</ds:RSAKeyValue>
</ds:KeyValue>
</ds:KeyInfo>
<ds:Object Id="Signature717868-Object55375"><etsi:QualifyingProperties Target="#Signature717868"><etsi:SignedProperties Id="Signature717868-SignedProperties231623"><etsi:SignedSignatureProperties><etsi:SigningTime>2024-09-03T19:06:34-05:00</etsi:SigningTime><etsi:SigningCertificate><etsi:Cert><etsi:CertDigest><ds:DigestMethod Algorithm="http://www.w3.org/2000/09/xmldsig#sha1"></ds:DigestMethod><ds:DigestValue>epk8f9EOtB2MrtvlqTfDmhhuEts=</ds:DigestValue></etsi:CertDigest><etsi:IssuerSerial><ds:X509IssuerName>CN=AC BANCO CENTRAL DEL ECUADOR,L=QUITO,OU=ENTIDAD DE CERTIFICACION DE INFORMACION-ECIBCE,O=BANCO CENTRAL DEL ECUADOR,C=EC</ds:X509IssuerName><ds:X509SerialNumber>1534138474</ds:X509SerialNumber></etsi:IssuerSerial></etsi:Cert></etsi:SigningCertificate></etsi:SignedSignatureProperties><etsi:SignedDataObjectProperties><etsi:DataObjectFormat ObjectReference="#Reference-ID-434354"><etsi:Description>contenido comprobante</etsi:Description><etsi:MimeType>text/xml</etsi:MimeType></etsi:DataObjectFormat></etsi:SignedDataObjectProperties></etsi:SignedProperties></etsi:QualifyingProperties></ds:Object></ds:Signature></liquidacionCompra>]]></comprobante><mensajes/></autorizacion>`,
};
