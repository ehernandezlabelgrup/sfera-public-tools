import React from 'react'
import PropTypes from 'prop-types'

const IcConfiguration = ({ size, color }) => (
  <svg
    id="ic_configuracion"
    xmlns="http://www.w3.org/2000/svg"
    width={size}
    height={size}
    viewBox="0 0 24 24"
  >
    <path
      id="Trazado_1204"
      data-name="Trazado 1204"
      d="M0,0H24V24H0Z"
      fill="none"
    />
    <path
      id="Trazado_1205"
      data-name="Trazado 1205"
      d="M19.14,12.94A7.074,7.074,0,0,0,19.2,12a5.777,5.777,0,0,0-.07-.94l2.03-1.58a.491.491,0,0,0,.12-.61L19.36,5.55a.488.488,0,0,0-.59-.22l-2.39.96a7.064,7.064,0,0,0-1.62-.94L14.4,2.81a.484.484,0,0,0-.48-.41H10.08a.474.474,0,0,0-.47.41L9.25,5.35a7.22,7.22,0,0,0-1.62.94L5.24,5.33a.477.477,0,0,0-.59.22L2.74,8.87a.455.455,0,0,0,.12.61l2.03,1.58a5.563,5.563,0,0,0-.02,1.88L2.84,14.52a.491.491,0,0,0-.12.61l1.92,3.32a.488.488,0,0,0,.59.22l2.39-.96a7.064,7.064,0,0,0,1.62.94l.36,2.54a.492.492,0,0,0,.48.41h3.84a.466.466,0,0,0,.47-.41l.36-2.54a6.859,6.859,0,0,0,1.62-.94l2.39.96a.477.477,0,0,0,.59-.22l1.92-3.32a.463.463,0,0,0-.12-.61ZM12,15.6A3.6,3.6,0,1,1,15.6,12,3.611,3.611,0,0,1,12,15.6Z"
      fill="none"
      stroke={color}
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
)

IcConfiguration.propTypes = {
  color: PropTypes.string,
  size: PropTypes.number,
}

IcConfiguration.defaultProps = {
  color: '#FFFFFF',
}

export default IcConfiguration
