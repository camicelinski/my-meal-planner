/* eslint-disable react/prop-types */
import React from 'react'

// Generic component - modal to present children within
const Modal = ({ children, onClose, title, className }) => {
  return (
    <>
      <div
        className={'overlay'}
        onClick={onClose}
      >
      </div>
      <div
        className={`modal ${className}`}
      >
        <h3>{title}</h3>
        <div className={'inner'}>
          {children}
        </div>
      </div>
    </>
  )
}

export default Modal
