import React from 'react'
import PropTypes from 'prop-types'

import ThemeConsumer from '../ThemeConsumer'

const consumeTheme = ThemeConsumer('UIModal')

const ModalTitle = ({ theme, title, icon }) => (
  <div className={theme.title}>
    <div className={theme.icon}>{icon}</div>
    <h2>{title}</h2>
  </div>
)

ModalTitle.propTypes = {
  theme: PropTypes.shape({
    title: PropTypes.string,
    icon: PropTypes.string,
  }).isRequired,
  title: PropTypes.string.isRequired,
  icon: PropTypes.element,
}

ModalTitle.defaultProps = {
  icon: null,
}

export default consumeTheme(ModalTitle)
