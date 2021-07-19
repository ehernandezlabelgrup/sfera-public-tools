import React from 'react'
import PropTypes from 'prop-types'

const IPrint = ({ size, color }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 20 18"
  >
    <path
      id="Trazado_2265"
      data-name="Trazado 2265"
      d="M19,8H5a3,3,0,0,0-3,3v6H6v4H18V17h4V11A3,3,0,0,0,19,8ZM16,19H8V14h8Zm3-7a1,1,0,1,1,1-1A1,1,0,0,1,19,12ZM18,3H6V7H18Z"
      transform="translate(-2 -3)"
      fill={color}
    />
  </svg>
)

IPrint.propTypes = {
  size: PropTypes.number,
  color: PropTypes.string,
}

IPrint.defaultProps = {
  color: '#FFFFFF',
}

export default IPrint
