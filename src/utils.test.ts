import { describe, it, expect } from 'vitest';
import { mappingProducts } from './utils';

describe('mappingProducts', () => {
  it('maps a single tax object into nombre/porcentaje (happy path)', () => {
    const details = {
      detalle: {
        descripcion: 'PRODUCTO A',
        precioTotalSinImpuesto: '10.00',
        impuestos: {
          impuesto: {
            codigo: '2',
            codigoPorcentaje: '2',
            baseImponible: '10.00',
            valor: '1.20',
          },
        },
      },
    };

    const [producto] = mappingProducts(details);

    expect(producto.impuestos.codigo).toBe(2);
    expect(producto.impuestos.nombre).toBe('IVA');
    expect(producto.impuestos.porcentaje).toBe('12%');
  });

  it('does not crash when the item has no <impuesto> node (empty impuestos)', () => {
    const details = {
      detalle: {
        descripcion: 'PRODUCTO SIN IMPUESTO',
        precioTotalSinImpuesto: '5.00',
        impuestos: '', // self-closing / empty node → string after xml2js
      },
    };

    expect(() => mappingProducts(details)).not.toThrow();
    const [producto] = mappingProducts(details);
    expect(producto.impuestos).toEqual({});
  });

  it('does not crash when the item has no impuestos property at all', () => {
    const details = {
      detalle: {
        descripcion: 'PRODUCTO SIN NODO IMPUESTOS',
        precioTotalSinImpuesto: '5.00',
      },
    };

    expect(() => mappingProducts(details)).not.toThrow();
    const [producto] = mappingProducts(details);
    expect(producto.impuestos).toEqual({});
  });

  it('keeps every tax when an item has multiple impuestos (ICE + IVA)', () => {
    // Caso real: factura CNT con ICE (valor 0) e IVA 15% (valor 787.50).
    // El IVA no debe perderse por venir en segundo lugar.
    const details = {
      detalle: {
        descripcion: 'SWAN IF 90CA 256K JAVAUSIM0701 *',
        precioTotalSinImpuesto: '5250.00',
        impuestos: {
          impuesto: [
            { codigo: '3', codigoPorcentaje: '3093', baseImponible: '0.00', valor: '0.00' },
            { codigo: '2', codigoPorcentaje: '4', baseImponible: '5250.00', valor: '787.50' },
          ],
        },
      },
    };

    const [producto] = mappingProducts(details);

    expect(Array.isArray(producto.impuestos)).toBe(true);
    expect(producto.impuestos).toHaveLength(2);

    expect(producto.impuestos[0].nombre).toBe('ICE');
    expect(producto.impuestos[0].valor).toBe(0);

    expect(producto.impuestos[1].nombre).toBe('IVA');
    expect(producto.impuestos[1].porcentaje).toBe('15%');
    expect(producto.impuestos[1].valor).toBe(787.5);
  });

  it('maps IVA 15% (codigoPorcentaje "4")', () => {
    const details = {
      detalle: {
        descripcion: 'PRODUCTO IVA 15',
        precioTotalSinImpuesto: '10.00',
        impuestos: {
          impuesto: {
            codigo: '2',
            codigoPorcentaje: '4',
            baseImponible: '10.00',
            valor: '1.50',
          },
        },
      },
    };

    const [producto] = mappingProducts(details);
    expect(producto.impuestos.porcentaje).toBe('15%');
  });

  it('handles multiple detalles as an array', () => {
    const details = {
      detalle: [
        {
          descripcion: 'CON IMPUESTO',
          precioTotalSinImpuesto: '10.00',
          impuestos: { impuesto: { codigo: '2', codigoPorcentaje: '2' } },
        },
        {
          descripcion: 'SIN IMPUESTO',
          precioTotalSinImpuesto: '5.00',
          impuestos: '',
        },
      ],
    };

    expect(() => mappingProducts(details)).not.toThrow();
    const productos = mappingProducts(details);
    expect(productos).toHaveLength(2);
    expect(productos[0].impuestos.nombre).toBe('IVA');
    expect(productos[1].impuestos).toEqual({});
  });
});
