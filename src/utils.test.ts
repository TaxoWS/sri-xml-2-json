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

  it('takes the first tax when an item has multiple impuestos (array)', () => {
    const details = {
      detalle: {
        descripcion: 'PRODUCTO MULTI IMPUESTO',
        precioTotalSinImpuesto: '10.00',
        impuestos: {
          impuesto: [
            { codigo: '2', codigoPorcentaje: '4', baseImponible: '10.00', valor: '1.50' },
            { codigo: '3', codigoPorcentaje: '3', baseImponible: '10.00', valor: '1.40' },
          ],
        },
      },
    };

    const [producto] = mappingProducts(details);

    expect(producto.impuestos.codigo).toBe(2);
    expect(producto.impuestos.nombre).toBe('IVA');
    expect(producto.impuestos.porcentaje).toBe('15%');
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
