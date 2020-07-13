import React from 'react'
import './index.less'

const VerticalModal = ({
  title = '',
  isShow = false,
  wrapperStyle = {},
  innerStyle = {},
  children,
  onCancel = () => {},
  showClose = true
}) => {
  return (
    <div className="vertical-modal-container" style={wrapperStyle}>
      <div
        className={`mask ${isShow ? '' : 'hide'}`}
        onClick={() => onCancel(!isShow)}
        style={{ zIndex: 999 }}
      />
      <div
        className={`modal-content ${isShow ? '' : 'hide'} relative`}
        style={{ zIndex: 999, ...innerStyle }}
      >
        {title ? <div className="title tips1 bold">{title}</div> : null}
        {children}
        {showClose ? (
          <div className="close-wrap" onClick={() => onCancel(!isShow)}>
            <img
              className="icon"
              src="https://img.16pinpin.com/crux/kb/close.png"
            />
          </div>
        ) : null}
      </div>
    </div>
  )
}

export default VerticalModal
