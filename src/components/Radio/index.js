import React from 'react'
import './index.less'

const Radio = ({ checked = 0, style, onClick, children }) => (
  <div className="radio-wrap flex ai-center" onClick={onClick}>
    <div className="radio-container relative" style={style}>
      <img
        className="radio block"
        src="https://img.16pinpin.com/crux/kb/radio.png"
      />
      <img
        className={`radio block select ${checked ? '' : 'hide'}`}
        src="https://img.16pinpin.com/crux/kb/radio_select.png"
      />
    </div>
    {children ? children : null}
  </div>
)

export default Radio
