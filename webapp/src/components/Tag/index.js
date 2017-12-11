import React from 'react'
import PropTypes from 'prop-types'
import { themr } from 'react-css-themr'

const applyThemr = themr('UITag')

const Tag = ({
  theme,
  children,
}) => (
<<<<<<< HEAD
  <div className={theme.tag}>
=======
  <span className={theme.tag}>
>>>>>>> 79a6495... theming: add tag
    {children}
  </div>
)

Tag.propTypes = {
  theme: PropTypes.shape({
    tag: PropTypes.string,
  }).isRequired,
  children: PropTypes.string.isRequired,
}

export default applyThemr(Tag)
