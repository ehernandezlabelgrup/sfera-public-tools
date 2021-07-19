import * as React from 'react'

const IBtnBarcode = ({ color, width }) => (
  <svg viewBox="0 0 30 30" width={width || '24'}>
    <path
      d="M5.5 9V6c0-.8.7-1.5 1.5-1.5h3c.8 0 1.5.7 1.5 1.5s-.7 1.5-1.5 1.5H8.5V9c0 .8-.7 1.5-1.5 1.5S5.5 9.8 5.5 9zM10 22.5H8.5V21c0-.8-.7-1.5-1.5-1.5s-1.5.7-1.5 1.5v3c0 .8.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5zm10-15h1.5V9c0 .8.7 1.5 1.5 1.5s1.5-.7 1.5-1.5V6c0-.8-.7-1.5-1.5-1.5h-3c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5zm3 12c-.8 0-1.5.7-1.5 1.5v1.5H20c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h3c.8 0 1.5-.7 1.5-1.5v-3c0-.8-.7-1.5-1.5-1.5zm2-6H5c-.8 0-1.5.7-1.5 1.5s.7 1.5 1.5 1.5h20c.8 0 1.5-.7 1.5-1.5s-.7-1.5-1.5-1.5z"
      fill={color || '#fff'}
    />
    <path fill="none" d="M0 0h30v30H0z" />
  </svg>
)

export default IBtnBarcode
