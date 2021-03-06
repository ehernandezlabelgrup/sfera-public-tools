import React from 'react'
import PropTypes from 'prop-types'

const IcStadistics = ({ size, color }) => (
  <svg
    id="ic_estadisticas"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <g id="Grupo_5679" data-name="Grupo 5679" transform="translate(-190 -12)">
      <path
        id="Trazado_2063"
        data-name="Trazado 2063"
        d="M780,1876v-4"
        transform="translate(-586 -1848)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2064"
        data-name="Trazado 2064"
        d="M780,1877v-9"
        transform="translate(-570 -1849)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2065"
        data-name="Trazado 2065"
        d="M780,1874v-4"
        transform="translate(-574 -1846)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2066"
        data-name="Trazado 2066"
        d="M780,1879v-7"
        transform="translate(-582 -1851)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <path
        id="Trazado_2067"
        data-name="Trazado 2067"
        d="M780,1885v-12"
        transform="translate(-578 -1857)"
        fill="none"
        stroke={color}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2"
      />
      <rect
        id="Rectángulo_2377"
        data-name="Rectángulo 2377"
        width="24"
        height="24"
        transform="translate(190 12)"
        fill="none"
      />
    </g>
    <path
      id="Trazado_2068"
      data-name="Trazado 2068"
      d="M780,1885h16"
      transform="translate(-776 -1865)"
      fill="none"
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

IcStadistics.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

export default IcStadistics
