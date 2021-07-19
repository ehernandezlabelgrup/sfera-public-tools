const initialStates = {
  ultimaVenta: {
    id: '',
    codigo: '',
    importe: 0,
    importe_iva: 0,
    importe_a_pagar: 0,
    importe_base: 0,
    devolucion: 0,
    importe_entregado: 0,
    usuario: {
      nombre: '',
    },
  },
  cart: {
    id: 0,
    importe_a_pagar: 0,
    importe_base: 0,
    importe_iva: 0,
    carritoLinea: [],
  },
  carritoLinea: {
    id: 0,
    linea: 0,
    venta_tipo_id: '',
    descripcion: '',
    codigo: '',
    unidades: '',
    importe_pvp: '',
    importe_pvp_iva: '',
    importe_base_total: '',
    importe_a_pagar: '',
    importe_total_iva: '',
    importe_dto_directo: '',
    importe_dto_porcentaje: 0,
    importe_cobertura: '',
    importe_cobertura_total: '',
    importe_apo: '',
    importe_iva: '',
    importe_re: '',
    tipo_impuesto_id: '',
    iva_factor: '',
    articulo_id: 0,
  },
}

export default initialStates