import React from 'react'
import { themr } from 'react-css-themr'
import PropTypes from 'prop-types'
import {
  Motion,
  spring,
} from 'react-motion'
import classnames from 'classnames'

<<<<<<< HEAD
const applyThemr = themr('UILinearProgress')
=======
const applyThemr = themr('PLLinearProgress')
>>>>>>> f3edcd2... theming: add linear-progress

const Linear = ({
  theme,
  percent,
  disabled,
  base,
}) => {
<<<<<<< HEAD
  const linearProgressClasses = classnames(
    theme.linearProgress,
    theme[base],
    {
      [theme.disabled]: disabled,
=======
  const classNameFill = classnames(
    theme.fill,
    {
      [theme.fillEnabled]: !disabled,
      [theme.fillDisabled]: disabled,
    }
  )

  const classNameBack = classnames(
    theme.back,
    {
      [theme.backEnabled]: !disabled,
      [theme.backDisabled]: disabled,
    }
  )

  const classNameNumber = classnames(
    theme.number,
    {
      [theme.numberEnabled]: !disabled,
      [theme.numberDisabled]: disabled,
>>>>>>> f3edcd2... theming: add linear-progress
    }
  )

  return (
<<<<<<< HEAD
    <div className={linearProgressClasses}>
=======
    <div className={theme.linear}>
>>>>>>> f3edcd2... theming: add linear-progress
      <Motion
        defaultStyle={{
          x: 0,
        }}
        style={{
          x: spring(percent),
        }}
      >
        {({ x }) => {
          const percentage = `${Math.round(x)}%`

          return (
            <div>
              <div className={theme.background}>
                <div
                  className={theme.fill}
                  style={{
                    width: percentage,
                  }}
                />
              </div>
              <div
                className={theme.number}
                style={{
                  width: (x > 94) ? '100%' : `${x}%`,
                }}
              >
                <div
                  style={{
                    marginRight: (x > 94) ? '0' : '-1em',
                  }}
<<<<<<< HEAD
=======
                  className={theme.innerNumber}
>>>>>>> f3edcd2... theming: add linear-progress
                >
                  {percentage}
                </div>
              </div>
            </div>
          )
        }}
      </Motion>
    </div>
  )
}

Linear.propTypes = {
  theme: PropTypes.shape({
<<<<<<< HEAD
    linearProgress: PropTypes.string,
    fill: PropTypes.string,
    background: PropTypes.string,
    disabled: PropTypes.string,
    number: PropTypes.string,
    dark: PropTypes.string,
    light: PropTypes.string,
  }),
  percent: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
  base: PropTypes.oneOf([
    'dark',
    'light',
  ]),
=======
    fill: PropTypes.string,
    fillEnabled: PropTypes.bool,
    fillDisabled: PropTypes.bool,
    back: PropTypes.string,
    backEnabled: PropTypes.bool,
    backDisabled: PropTypes.bool,
    number: PropTypes.string,
    numberEnabled: PropTypes.bool,
    numberDisabled: PropTypes.bool,
    linear: PropTypes.string,
    innerNumber: PropTypes.string,
  }).isRequired,
  percent: PropTypes.number.isRequired,
  disabled: PropTypes.bool,
>>>>>>> f3edcd2... theming: add linear-progress
}

Linear.defaultProps = {
  theme: {},
  disabled: false,
  base: 'light',
}

export default applyThemr(Linear)
