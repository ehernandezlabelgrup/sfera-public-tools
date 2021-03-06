import React from 'react'
import PropTypes from 'prop-types'

const IcCheck = ({ color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24.314"
    height="18.385"
    viewBox="0 0 24.314 18.385"
  >
    <g
      id="Grupo_4080"
      data-name="Grupo 4080"
      transform="translate(1.041 -0.665)"
    >
      <g id="Grupo_5685" data-name="Grupo 5685" transform="translate(0 -0.224)">
        <g
          id="Rectángulo_2362"
          data-name="Rectángulo 2362"
          transform="translate(20.444 2.303) rotate(45)"
          fill={color}
          stroke={color}
          strokeWidth="1"
        >
          <rect width="2" height="20" stroke="none" />
          <rect x="-0.5" y="-0.5" width="3" height="21" fill="none" />
        </g>
        <g
          id="Rectángulo_2363"
          data-name="Rectángulo 2363"
          transform="translate(8.858 16.443) rotate(135)"
          fill={color}
          stroke={color}
          strokeWidth="1"
        >
          <rect width="2" height="10" stroke="none" />
          <rect x="-0.5" y="-0.5" width="3" height="11" fill="none" />
        </g>
      </g>
    </g>
  </svg>
)

IcCheck.propTypes = {
  color: PropTypes.string,
}

IcCheck.defaultProps = {
  color: '#FFFFFF',
}

export default IcCheck
