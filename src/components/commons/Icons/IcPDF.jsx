import React from 'react'
import PropTypes from 'prop-types'

const calcWidth = (num) => {
  const width = num - 2
  const parsedWidth = width.toString()
  return parsedWidth
}

const IcPDF = ({ size }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={calcWidth(size)}
    height={size.toString()}
    viewBox="0 0 16 18"
  >
    <g id="pdf" transform="translate(-19.329)">
      <path
        id="Trazado_2290"
        data-name="Trazado 2290"
        d="M20.472,0h9.71l5.147,5.047V16.875A1.134,1.134,0,0,1,34.186,18H20.472a1.134,1.134,0,0,1-1.143-1.125V1.125A1.134,1.134,0,0,1,20.472,0Z"
        fill="#e2574c"
      />
      <path
        id="Trazado_2291"
        data-name="Trazado 2291"
        d="M207.763,5h-3.734a1.072,1.072,0,0,1-1.071-1.071V.193Z"
        transform="translate(-172.449 -0.182)"
        fill="#b53629"
      />
      <path
        id="Trazado_2292"
        data-name="Trazado 2292"
        d="M94.3,136.037a.311.311,0,0,0,0-.617H93.282a.319.319,0,0,0-.311.348v2.512c0,.224.127.348.3.348s.3-.124.3-.348v-.689h.618a.29.29,0,0,0,.288-.313.285.285,0,0,0-.288-.3H93.57v-.937Zm-3.455-.617H90.1a.331.331,0,0,0-.347.346v2.516a.33.33,0,0,0,.356.337h.785a1.456,1.456,0,0,0,1.542-1.555A1.494,1.494,0,0,0,90.849,135.42ZM90.885,138h-.456V136.04h.411c.622,0,.892.417.892.993C91.732,137.573,91.467,138,90.885,138Zm-2.74-2.579H87.4a.312.312,0,0,0-.326.348v2.512a.316.316,0,1,0,.628,0v-.733h.464a1.014,1.014,0,0,0,1.046-1.059A1.026,1.026,0,0,0,88.145,135.42Zm-.012,1.538h-.427v-.948h.427a.476.476,0,0,1,0,.948Z"
        transform="translate(-63.493 -127.452)"
        fill="#fff"
      />
    </g>
  </svg>
)

IcPDF.propTypes = {
  size: PropTypes.number,
}

IcPDF.defaultProps = {
  size: 18,
}

export default IcPDF
