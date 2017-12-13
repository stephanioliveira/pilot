<<<<<<< HEAD
export { default as Modal } from './Modal'
export { default as ModalActions } from './ModalActions'
export { default as ModalContent } from './ModalContent'
export { default as ModalTitle } from './ModalTitle'
=======
import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

import ReactModal from 'react-modal'

const applyThemr = themr('PLModal')

const Modal = ({
  theme,
  children,
  isOpen,
  onRequestClose,
}) => (
  <ReactModal
    isOpen={isOpen}
    role="dialog"
    parentSelector={() => document.body}
    overlayClassName={theme.overlay}
    className={theme.modal}
    onRequestClose={onRequestClose}
  >
    <div className={theme.modalFrame}>
      {children}
    </div>
  </ReactModal>
)


Modal.propTypes = {
  theme: PropTypes.shape({
    overlay: PropTypes.string,
    modal: PropTypes.string,
    modalFrame: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
  isOpen: PropTypes.bool.isRequired,
  onRequestClose: PropTypes.func,
}

Modal.defaultProps = {
  onRequestClose: null,
}

const ModalTitle = ({ theme, title, icon }) => (
  <div className={theme.modalTitle}>
    <div className={theme.titleIcon}>{icon}</div>
    <h2 className={theme.titleElement}>{title}</h2>
  </div>
)

ModalTitle.propTypes = {
  theme: PropTypes.shape({
    modalTitle: PropTypes.string,
    titleIcon: PropTypes.string,
    titleElement: PropTypes.titleElement,
  }).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
}

ModalTitle.defaultProps = {
  icon: null,
}

const ModalActions = ({ theme, children }) => (
  <div className={theme.modalActions}>{children}</div>
)

ModalActions.propTypes = {
  theme: PropTypes.shape({
    modalActions: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

const ModalContent = ({ theme, children }) => (
  <div className={theme.modalContent}>{children}</div>
)

ModalContent.propTypes = {
  theme: PropTypes.shape({
    modalContent: PropTypes.string,
  }).isRequired,
  children: PropTypes.node.isRequired,
}

export default {
  Modal: applyThemr(Modal),
  ModalTitle: applyThemr(ModalTitle),
  ModalActions: applyThemr(ModalActions),
  ModalContent: applyThemr(ModalContent),
}
>>>>>>> 72894bf... theming: add modal
