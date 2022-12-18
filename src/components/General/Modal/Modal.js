/* eslint-disable react/prop-types */
import React from 'react'

import StyledModal from './Modal.styled'

const Modal = ({ children, onClose, title, className }) => {
  return (
    <StyledModal>
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
    </StyledModal>
  )
}

export default Modal
