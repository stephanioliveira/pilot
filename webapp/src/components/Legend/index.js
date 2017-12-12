import React from 'react'
import PropTypes from 'prop-types'
import cx from 'classnames'
import { themr } from 'react-css-themr'
import {
  pipe,
  split,
  map,
  join,
  toUpper,
  head,
} from 'ramda'

<<<<<<< HEAD
const applyThemr = themr('UILegend')
=======
const applyThemr = themr('PLLegend')
>>>>>>> 971df6c... theming: add legend

const defineInitials = pipe(
  split(' '),
  map(head),
  join(''),
  toUpper
)

const Legend = ({
  color,
  children,
  outline,
  acronym,
  hideLabel,
  theme,
}) => {
  const labelClasses = cx(
<<<<<<< HEAD
    theme.acronym,
=======
    theme.label,
>>>>>>> 971df6c... theming: add legend
    {
      [theme.outline]: outline,
    }
  )

  return (
    <div className={theme.legend}>
      <abbr
        title={children}
        className={labelClasses}
        style={{ background: color }}
      >
        {acronym || defineInitials(children)}
      </abbr>
      {!hideLabel &&
        <span className={theme.text}>
          {children}
        </span>
      }
    </div>
  )
}

Legend.propTypes = {
  theme: PropTypes.shape({
<<<<<<< HEAD
    acronym: PropTypes.string,
=======
    label: PropTypes.string,
>>>>>>> 971df6c... theming: add legend
    outline: PropTypes.string,
    legend: PropTypes.string,
    text: PropTypes.string,
  }).isRequired,
  color: PropTypes.string.isRequired,
  children: PropTypes.string.isRequired,
  outline: PropTypes.bool,
  acronym: PropTypes.string,
  hideLabel: PropTypes.bool,
}

Legend.defaultProps = {
  outline: false,
  acronym: '',
  hideLabel: false,
}

export default applyThemr(Legend)
