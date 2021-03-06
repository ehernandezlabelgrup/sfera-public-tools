import React, { useState } from 'react'
import './Info.scss'

import noExistInsideArticleMaster from '../../../assets/img/gridIcons/ic_info_stock_no_esta.svg'
import substituted from '../../../assets/img/gridIcons/ic_info_sustitucion.svg'
import IcInfoAlerta from '../../../assets/img/gridIcons/ic_info_alerta.svg'
import IcInfoEfg from '../../../assets/img/gridIcons/ic_info_efg.svg'
import IcInfoRojo from '../../../assets/img/gridIcons/ic_info_rojo.svg'
import IcInfoNaranja from '../../../assets/img/gridIcons/ic_info_naranja.svg'
import IcInfoVerde from '../../../assets/img/gridIcons/ic_info_verde.svg'
import IcInfoEreceta from '../../../assets/img/gridIcons/ic_info_ereceta.svg'
import IcInfoErecetaAnulada from '../../../assets/img/gridIcons/ic_info_ereceta_anulada.svg'
import IcInfoRecetaDispensada from '../../../assets/img/gridIcons/ic_info_receta_dispensada.svg'
import IcInfoErecetaNotificada from '../../../assets/img/gridIcons/ic_info_ereceta_notificada.svg'
import IcInfoEuro from '../../../assets/img/gridIcons/ic_info_euro.svg'
import IcInfoEuroRojo from '../../../assets/img/gridIcons/ic_info_euro_rojo.svg'
import IcInfoIncompleto from '../../../assets/img/gridIcons/ic_info_incompleto.svg'
import IcInfoInteraccion from '../../../assets/img/gridIcons/ic_info_interaccion.svg'
import IcInfoLibroRecetario from '../../../assets/img/gridIcons/ic_info_libro_recetario.svg'
import IcInfoOperacionEspecial from '../../../assets/img/gridIcons/ic_info_operacion_especial.svg'
import IcInfoPedComEncargo from '../../../assets/img/gridIcons/ic_info_pedcom_encargo.svg'
import IcInfoPedComG from '../../../assets/img/gridIcons/ic_info_pedcom_g.svg'
import IcInfoPedcomOfertas from '../../../assets/img/gridIcons/ic_info_pedcom_ofertas.svg'
import IcInfoPedcomIncidencia from '../../../assets/img/gridIcons/ic_info_pedcom_incidencia.svg'
import IcInfoPedcomLapiz from '../../../assets/img/gridIcons/ic_info_pedcom_lapiz.svg'
import IcInfoPedcomOjo from '../../../assets/img/gridIcons/ic_info_pedcom_ojo.svg'
import IcInfoStockHay from '../../../assets/img/gridIcons/ic_info_stock_hay.svg'
import IcInfoStockNoHay from '../../../assets/img/gridIcons/ic_info_stock_no_hay.svg'
import IcInfoTraeraReceta from '../../../assets/img/gridIcons/ic_info_traera_receta.svg'
import IcInfoDevolucion from '../../../assets/img/gridIcons/ic_info_devolucion.svg'
import IcInfoTablaNoMicroficha from '../../../assets/img/gridIcons/ic_info_tabla_no_microficha.svg'
import IcInfoTablaMicroficha from '../../../assets/img/gridIcons/ic_info_tabla_microficha.svg'
import IcInfoTablaOfertaCompra from '../../../assets/img/gridIcons/ic_info_tabla_oferta_compra.svg'
import IcInfoTablaOferta from '../../../assets/img/gridIcons/ic_info_tabla_oferta.svg'
import IcInfoRobotLila from '../../../assets/img/gridIcons/ic_info_robot_lila.svg'
import IcInfoRobotNaranja from '../../../assets/img/gridIcons/ic_info_robot_naranja.svg'
import IcInfoRobotNegro from '../../../assets/img/gridIcons/ic_info_robot_negro.svg'
import IcInfoRobotRojo from '../../../assets/img/gridIcons/ic_info_robot_rojo.svg'
import IcInfoRobotVerde from '../../../assets/img/gridIcons/ic_info_robot_verde.svg'
import IcInfoProveedorPrdeterminado from '../../../assets/img/gridIcons/ic_info_proveedor_predeterminado.svg'
import IcInfoPmBajo from '../../../assets/img/gridIcons/ic_info_pm_bajo.svg'
import IcInfoPmAlto from '../../../assets/img/gridIcons/ic_info_pm_alto.svg'
import IcInfoDescuento from '../../../assets/img/gridIcons/ic_info_descuento.svg'
import IcInfoEreetaPendiente from '../../../assets/img/gridIcons/ic_info_ereceta_pendiente.svg'
import IcInfoIntervalo from '../../../assets/img/gridIcons/ic_info_intervalo.svg'
import IcInfoMedidasDieteticas from '../../../assets/img/gridIcons/ic_info_medidas_dieteticas.svg'
import IcInfoRiesgosSobredosis from '../../../assets/img/gridIcons/ic_info_riesgo_sobredosis.svg'
import IcInfoRecetaPapel from '../../../assets/img/gridIcons/ic_info_receta_papel.svg'
import IcInfoRecetaPapelPensionista from '../../../assets/img/gridIcons/ic_info_receta_papel_pensionista.svg'
import IcInfoGenericoFinanciadoG from '../../../assets/img/gridIcons/ic_info_generico_financiado_g.svg'
import IcInfoGenericoNoFinanciadoG from '../../../assets/img/gridIcons/ic_info_generico_no_financiado_g.svg'
import IcInfoGenericoG from '../../../assets/img/gridIcons/ic_info_generico_g.svg'

import IcInfoGenericoFinanciadoM from '../../../assets/img/gridIcons/ic_info_generico_financiado_m.svg'
import IcInfoGenericoNoFinanciadoM from '../../../assets/img/gridIcons/ic_info_generico_no_financiado_m.svg'
import IcInfoGenericoM from '../../../assets/img/gridIcons/ic_info_generico_m.svg'
import IcInfoLimitadoFinanciadoN from '../../../assets/img/gridIcons/ic_info_limitado_financiado_n.svg'
import IcInfoLimitadoNoFinanciadoN from '../../../assets/img/gridIcons/ic_info_limitado_no_financiado_n.svg'
import IcInfoLimitadoN from '../../../assets/img/gridIcons/ic_info_limitado_n.svg'

import IcInfoPmaxFinanciadoA from '../../../assets/img/gridIcons/ic_info_pmax_financiado_a.svg'
import IcInfoPmaxNoFinanciadoA from '../../../assets/img/gridIcons/ic_info_pmax_no_financiado_a.svg'
import IcInfoPmaxA from '../../../assets/img/gridIcons/ic_info_pmax_a.svg'
import IcInfoSiConsejos from '../../../assets/img/gridIcons/ic_info_si_consejos.svg'
import IcInfoNoConsejos from '../../../assets/img/gridIcons/ic_info_no_consejos.svg'
import IcInfoLineaRegalo from '../../../assets/img/gridIcons/ic_info_linea_regalo.svg'

import IcInfoPromoNoCompatible from '../../../assets/img/gridIcons/ic_info_promo_no_compatible.svg'
import IcInfoPromoCompatible from '../../../assets/img/gridIcons/ic_info_promo_compatible.svg'
import IcInfoMonodosis from '../../../assets/img/gridIcons/ic_info_monodosis.svg'
import IcInfoMultialmacen from '../../../assets/img/gridIcons/ic_info_multialmacen.svg'
import IcInfoRecetaPA from '../../../assets/img/gridIcons/ic_info_receta_PA.svg'
import IcInfoRecetaCN from '../../../assets/img/gridIcons/ic_info_receta_CN.svg'

import IcInfoPendienteReceta from '../../../assets/img/gridIcons/ic_info_pendiente_receta.svg'
import IcInfoStockControlPendiente from '../../../assets/img/gridIcons/ic_info_stock_control_pendiente.svg'
import IcInfoNoDispensable from '../../../assets/img/gridIcons/ic_info_no_dispensable.svg'
import IcInfoNoFinanciable from '../../../assets/img/gridIcons/ic_info_no_financiable.svg'
import { ModalIConsLegend } from '../ModalIconsLegend/ModalIConsLegend'

const legendIcons = [
  {
    name: 'Informaci??n alerta',
    img: IcInfoAlerta,
    description: 'Aparce en pedidos y Recetas',
  },
  {
    name: 'EFG',
    img: IcInfoEfg,
    description: 'El producto es un EFG',
  },
  {
    name: 'En Elaboraci??n',
    img: IcInfoRojo,
    description: 'La l??nea esta en elaboraci??n',
  },
  {
    name: 'Pedido',
    img: IcInfoNaranja,
    description: 'La l??nea esta pedida pero recibida',
  },
  {
    name: 'Pedido y recibido',
    img: IcInfoVerde,
    description: 'La l??nea esta pedida y recibida',
  },
  {
    name: 'En Elaboraci??n',
    img: IcInfoRojo,
    description: 'La l??nea esta en elaboraci??n',
  },
  {
    name: 'Receta Electr??nica',
    img: IcInfoEreceta,
    description: 'L??nea de receta electr??nica',
  },
  {
    name: 'Receta Electr??nica Anulada',
    img: IcInfoErecetaAnulada,
    description: 'Devoluci??n de la l??nea de receta electr??nica',
  },
  {
    name: 'Receta Electr??nica Dispensada',
    img: IcInfoRecetaDispensada,
    description: 'L??nea de receta electr??nica dispensada en contingencia',
  },
  {
    name: 'Receta Electr??nica Notificada',
    img: IcInfoErecetaNotificada,
    description: 'L??nea de receta electr??nica de contingencia notificada',
  },
  {
    name: 'Dispensable',
    img: IcInfoVerde,
    description: 'L??nea dispensable',
  },
  {
    name: 'Con Incidencia',
    img: IcInfoRojo,
    description: 'L??nea con incidencia',
  },
  {
    name: 'A Cr??dito',
    img: IcInfoEuro,
    description: 'Cobro cr??dito',
  },
  {
    name: 'Apuntado a Cr??dito',
    img: IcInfoEuroRojo,
    description: 'Apuntado a cr??dito',
  },
  {
    name: 'Incompleto',
    img: IcInfoIncompleto,
    description: 'L??nea incompleta: falta algo',
  },
  {
    name: 'Con Interacci??n',
    img: IcInfoInteraccion,
    description: 'Las l??neas con el icono interaccionan entre ellas',
  },
  {
    name: 'Libro de recetas',
    img: IcInfoLibroRecetario,
    description: 'El art??culo requiere libro recetario',
  },
  {
    name: 'Operaci??n especial',
    img: IcInfoOperacionEspecial,
    description: 'L??nea con una operaci??n especial: 110 o 220 ',
  },
  {
    name: 'Encargo',
    img: IcInfoPedComEncargo,
    description: 'La l??nea es un encargo',
  },
  {
    name: 'Guardado en otro pedido',
    img: IcInfoPedComG,
    description: 'La l??nea esta guardada en otro pedido',
  },
  {
    name: 'Con ofertas',
    img: IcInfoPedcomOfertas,
    description: 'La l??nea tiene ofertas de compra',
  },
  {
    name: 'Con falta bidireccional',
    img: IcInfoPedcomIncidencia,
    description: 'La l??nea es una falta bidirecional',
  },
  {
    name: 'Con precio aceptado',
    img: IcInfoPedcomLapiz,
    description: 'La l??nea con precio aceptado',
  },
  {
    name: 'Revisar precio',
    img: IcInfoPedcomOjo,
    description:
      'L??nea revisar precio. El PVP calculo es superior o inferior al pvp ficha',
  },
  {
    name: 'Con Stock',
    img: IcInfoStockHay,
    description: 'El art??culo de la l??nea tiene stock',
  },
  {
    name: 'Art??uclo sin stock',
    img: IcInfoStockNoHay,
    description: 'El art??culo de la l??nea no tiene stock',
  },
  {
    name: 'Traer?? receta',
    img: IcInfoTraeraReceta,
    description: 'La l??nea marcada como traer?? receta',
  },
  {
    name: 'Con Devoluci??n',
    img: IcInfoDevolucion,
    description: 'La l??nea marcada como devoluci??n',
  },
  {
    name: 'Sin Informaci??n Coste',
    img: IcInfoTablaNoMicroficha,
    description:
      'No hay informaci??n del P. Coste del mayorista del art??culo de la l??nea',
  },
  {
    name: 'Precio Microficha',
    img: IcInfoTablaMicroficha,
    description: 'Precio de la microficha',
  },
  {
    name: 'Precio ??ltima compra',
    img: IcInfoTablaOfertaCompra,
    description: 'Precio de la ultima compra',
  },
  {
    name: 'Con oferta de venta',
    img: IcInfoTablaOferta,
    description: 'Producto con oferta de venta',
  },
  {
    name: 'Dispensaci??n en curso',
    img: IcInfoRobotLila,
    description: 'Dispensaci??n en curso de robot.',
  },
  {
    name: 'Parcialmente servido',
    img: IcInfoRobotNaranja,
    description: 'Parcialmente servido de robot',
  },
  {
    name: 'Art??culo de robot',
    img: IcInfoRobotNegro,
    description: 'Art??culo de robot',
  },
  {
    name: 'Falta de stock',
    img: IcInfoRobotRojo,
    description: 'No servido por falta de stock de robot',
  },
  {
    name: 'Servido',
    img: IcInfoRobotVerde,
    description: 'Servido de robot',
  },
  {
    name: 'Art??culo proveedor',
    img: IcInfoProveedorPrdeterminado,
    description: 'Art??culo predeterminado del proveedor',
  },
  {
    name: 'Precio menor bajo',
    img: IcInfoPmBajo,
    description: 'Significa que el precio menor es mas bajo',
  },
  {
    name: 'Precio menor alto',
    img: IcInfoPmAlto,
    description: 'Significa que el precio menor es m??s alto',
  },
  {
    name: 'Art??culo de robot',
    img: IcInfoDescuento,
    description:
      'Descuento en la l??nea, bien por haberse introducido manualmente o autom??ticamente debido a redondeos sobre el importe total de la venta',
  },
  {
    name: 'Receta electr??nica pendiente',
    img: IcInfoEreetaPendiente,
    description:
      'La receta correspondiente a dicha l??nea queda pendiente de entrega, ya sea el cobro actual o diferido.',
  },
  {
    name: 'Pendiente modificar intervalo',
    img: IcInfoIntervalo,
    description:
      'Hay que modificar el intervalo de administraci??n, seg??n consta en el Bot Plus del C.G.C.O.F',
  },
  {
    name: 'Medidas diet??ticas',
    img: IcInfoMedidasDieteticas,
    description:
      'Hay que tomar medidas diet??ticas, seg??n consta en el Bot Plus del C.G.C.O.F',
  },
  {
    name: 'Riesgo de sobredosis',
    img: IcInfoRiesgosSobredosis,
    description:
      'Riesgo de sobredosis por estar dispensando varios art??culos con el principio activo, seg??n consta en el Bot Plus del C.G.C.O.F.',
  },
  {
    name: 'Tiene receta papel',
    img: IcInfoRecetaPapel,
    description:
      'L??nea es de venta con receta, teniendo el usuario que pagar una aportaci??n (no es pensionista).',
  },
  {
    name: 'Con receta pensionista',
    img: IcInfoRecetaPapelPensionista,
    description:
      'L??nea es de venta con receta de pensionista, es decir, el usuario no ha de pagar ning??n importe.',
  },
  {
    name: 'Gen??rico financiado ',
    img: IcInfoGenericoFinanciadoG,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo, que es financiable a P.V.P. y que su P.V.P. de ficha no supera al precio de referencia fijado para dicho grupo.',
  },
  {
    name: 'Gen??rico no financiado',
    img: IcInfoGenericoNoFinanciadoG,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo, que es financiable a P.V.P. y siendo su P.V.P. de ficha igual al precio menor de dicho grupo. Dicho precio de referencia adem??s es distinto de 0',
  },
  {
    name: 'Gen??rico',
    img: IcInfoGenericoG,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo, que es financiable a P.V.P. y siendo su P.V.P. de ficha igual al precio menor de dicho grupo. Dicho precio de referencia adem??s es distinto de 0.',
  },
  {
    name: 'Gen??rico financiado menor precio',
    img: IcInfoGenericoFinanciadoM,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo cuyo precio de referencia es 0, que es financiable a P.V.P. y que su P.V.P. de ficha no supera al Precio Menor del grupo.',
  },
  {
    name: 'Gen??rico menor precio',
    img: IcInfoGenericoNoFinanciadoM,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo cuyo precio de referencia es 0, que es financiable a P.V.P. y siendo su P.V.P. de ficha igual al Precio Menor del grupo.',
  },
  {
    name: 'No supera precio menor',
    img: IcInfoGenericoM,
    description:
      'L??nea es de venta con receta de pensionista, es decir, el usuario no ha de pagar ning??n importe.',
  },
  {
    name: 'Supera precio menor',
    img: IcInfoLimitadoFinanciadoN,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo, que es financiable a Precio de Referencia y que su P.V.P. de ficha supera el precio menor fijado para dicho grupo. ',
  },
  {
    name: 'Gen??rico no financiado',
    img: IcInfoLimitadoNoFinanciadoN,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo, que es financiable a Precio de Referencia y que su P.V.P. de ficha supera el precio menor fijado para dicho grupo.',
  },
  {
    name: 'Precio limitado',
    img: IcInfoLimitadoN,
    description:
      'El art??culo est?? incluido en un Conjunto Homog??neo, que es financiable a Precio de Referencia y siendo su P.V.P. de ficha igual al precio menor de dicho grupo.',
  },
  {
    name: 'Precio m??ximo financiado',
    img: IcInfoPmaxFinanciadoA,
    description:
      'El art??culo est?? incluido en alg??n grupo de art??culos con gesti??n de precio m??ximo auton??mico (S.A.S., S.E.S.,etc.) y que su P.V.P. es inferior al precio menor marcado para dicho grupo.',
  },
  {
    name: 'Precio m??ximo no financiado',
    img: IcInfoPmaxNoFinanciadoA,
    description:
      'El art??culo est?? incluido en alg??n grupo de art??culos con gesti??n de precio m??ximo auton??mico (S.A.S., S.E.S.,etc.) y que su P.V.P. es inferior al precio menor marcado para dicho grupo.',
  },
  {
    name: 'Igual a precio menor',
    img: IcInfoPmaxA,
    description:
      'El art??culo est?? incluido en alg??n grupo de art??culos con gesti??n de precio m??ximo auton??mico (S.A.S., S.E.S., etc.) y que su P.V.P. es superior al precio menor marcado para dicho grupo.',
  },
  {
    name: 'Impresi??n de consejos activa',
    img: IcInfoSiConsejos,
    description:
      'En esa l??nea se ha activado la impresi??n de consejos en el ticket, si bien por omisi??n en par??metros la impresi??n de consejos no est?? activa.',
  },
  {
    name: 'Impresi??n de consejos desactivada',
    img: IcInfoNoConsejos,
    description:
      'En esa l??nea se ha desactivado la impresi??n de consejos en el ticket, si bien por omisi??n en par??metros la impresi??n de consejos s?? est?? activa.',
  },
  {
    name: 'Art??culo o lote regalado',
    img: IcInfoLineaRegalo,
    description:
      'Se trata de una l??nea correspondiente a un art??culo o lote regalado por aplicaci??n de una promoci??n, o bien que se ha aplicado en esa l??nea una promoci??n por bonificaci??n tipo ???bonus??? (3x2, 2x1, etc.).',
  },
  {
    name: 'No compatible con promoci??n',
    img: IcInfoPromoNoCompatible,
    description:
      'Se est?? aplicando una promoci??n que s?? es compatible con la aplicaci??n de descuentos. ',
  },
  {
    name: 'Compatible con promoci??n',
    img: IcInfoPromoCompatible,
    description:
      'Se est?? aplicando una promoci??n que no es compatible con la aplicaci??n de descuentos.',
  },
  {
    name: 'Art??culo con monodosis',
    img: IcInfoMonodosis,
    description:
      'Indica que se trata de un art??culo con elementos monodosis definidos o bien de un elemento monodosis.',
  },
  {
    name: 'Gesti??n multialmac??n',
    img: IcInfoMultialmacen,
    description: 'La l??nea conlleva una gesti??n multialmac??n.',
  },
  {
    name: 'Con L??nea de dispensaci??n PA',
    img: IcInfoRecetaPA,
    description:
      'La l??nea de venta est?? asociada a una l??nea de dispensaci??n de receta XXI del S.A.S. ligada a un principio activo.',
  },
  {
    name: 'Con L??nea de dispensaci??n CN',
    img: IcInfoRecetaCN,
    description:
      'La l??nea de venta est?? asociada a una l??nea de dispensaci??n de receta XXI del S.A.S. ligada a una marca comercial.',
  },
  {
    name: 'Con receta pendiente',
    img: IcInfoPendienteReceta,
    description:
      'El cliente debe una receta del producto que se est?? dispensando.',
  },
  {
    name: 'Con control de stock',
    img: IcInfoStockControlPendiente,
    description: 'El art??culo tiene un control de stock (S.A.C.S.) pendiente.',
  },
  {
    name: 'Catalogado por el C.G.C.O.F.',
    img: IcInfoNoDispensable,
    description:
      'El art??culo est?? catalogado por el C.G.C.O.F. como No Dispensable.',
  },
  {
    name: 'Art??uclo no financiable',
    img: IcInfoNoFinanciable,
    description:
      'El art??culo est?? catalogado por el SACYL como No Financiable. (S??lo si la farmacia est?? ubicada en Castilla y Le??n).',
  },
]

export const InfoIcons = (params) => {
  const [showLegendModal, setShowLegendModal] = useState(false)
  const srcIcons = []

  // Si existe receta electr??nica
  if (params.data.receta) {
    srcIcons.push({
      url: IcInfoEreceta,
      alt: 'Contiene ereceta',
    })
  }


  // El art??culo requiere libro recetario
  if (params.data.articulo?.dispensacion?.controlLibro.id > 1) {
    srcIcons.push({
      url: IcInfoLibroRecetario,
      alt: 'El art??culo requiere de libro recetario',
    })
  }

  // El producto es un EFG. Aparece en pedidos
  if (params.data.articulo?.nombre) {
    if (params.data.articulo.nombre.includes('EFG')) {
      srcIcons.push({
        url: IcInfoEfg,
        alt: 'El producto es un EFG. Aparece en pedidos',
      })
    }
  }



  // El art??culo tiene descuento
  if (
    params.data.importe_dto_porcentaje > 0 ||
    params.data.importe_dto_directo > 0
  ) {
    srcIcons.push({
      url: IcInfoDescuento,
      alt:
        'Descuento en la l??nea, bien por haberse introducido manualmente o autom??ticamente ',
    })
  }

  //
  // ###### SOLO ERECETA ######
  //

  // Art??culo incompleto
  if (
    params.data.articulo === null &&
    params.data.codigo_prescripcion &&
    (params.data?.receta === '' || params.data?.tis === '')
  ) {
    srcIcons.push({
      url: IcInfoIncompleto,
      alt: 'L??nea incompleta: falta',
    })
  }

  // Art??culo tiene stock
  if (
    !params.data.linea &&
    params.data.codigo_prescripcion &&
    params.data.stock > 0
  ) {
    srcIcons.push({
      url: IcInfoStockHay,
      alt: 'El art??culo de la l??nea tiene stock',
    })
  }

  // Art??culo no tiene stock
  if (
    !params.data.linea &&
    params.data.codigo_prescripcion &&
    params.data.stock <= 0
  ) {
    srcIcons.push({
      url: IcInfoStockNoHay,
      alt: 'El art??culo de la l??nea no tiene stock',
    })
  }

  // Art??culo no tiene est?? dado de alta en maestro art??culos
  if (params.data.codigo_prescripcion && params.data.codigo === '-') {
    srcIcons.push({
      url: noExistInsideArticleMaster,
      alt:
        'El art??culo de la l??nea no esta dado de alta en el maestro de art??culos',
    })
  }

  // Art??culo ha sido sustituido
  if (params.data.codigo_prescripcion && params.data.articulo_sustitucion) {
    srcIcons.push({
      url: substituted,
      alt: 'Producto sustituido',
    })
  }

  const handleModal = () => setShowLegendModal(true)
  const toggle = () => setShowLegendModal(false)

  return (
    <>
      <button type="button" className="infoIcons" onClick={handleModal}>
        {srcIcons.map((icon) => (
          <div className="infoIcons__icon">
            <img src={icon.url} alt={icon.alt} title={icon.alt} />
          </div>
        ))}
      </button>
      {showLegendModal && (
        <ModalIConsLegend
          title="Leyenda Iconos"
          toggle={toggle}
          hasFooter={false}
          className="Modal-iconsLegend p-3"
          size="md"
          legendIcons={legendIcons}
        />
      )}
    </>
  )
}
