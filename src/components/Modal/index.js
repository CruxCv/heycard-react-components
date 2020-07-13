import React from 'react'
import './index.less'

const Modal = ({
  isShow = false,
  innerStyle = {},
  children,
  onCancel = () => {},
  showClose = true,
  maskClose = true
}) => {
  return (
    <div className="motion-modal-container">
      <div
        className={`mask ${isShow ? '' : 'hide'}`}
        onClick={() => {
          maskClose && onCancel()
        }}
        style={{ zIndex: 999 }}
      />
      <div
        className={`modal-content ${
          isShow ? '' : 'hide'
        } relative flex-column ai-center jc-center`}
        style={{ zIndex: 999, ...innerStyle }}
      >
        {children}
        {showClose ? (
          <img
            className="close-icon block"
            src="https://img.16pinpin.com/crux/cancel.png"
            onClick={onCancel}
          />
        ) : null}
      </div>
    </div>
  )
}

export default Modal
