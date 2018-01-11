import React from 'react'
import {
  shape,
  string,
  node,
  bool,
} from 'prop-types'

import classNames from 'classnames'

import ThemeConsumer from '../ThemeConsumer'

const consumeTheme = ThemeConsumer('UIGrid')

const classnames = ({
  theme,
  flex,
  stretch,
  className,
}) =>
  classNames(
    className,
    theme.row,
    {
      [theme.flex]: flex,
      [theme.stretch]: stretch,
    }
  )

const Row = ({
  theme,
  children,
  flex,
  stretch,
  className,
}) => (
  <div className={classnames({ theme, flex, stretch, className })}>
    {children}
  </div>
)

Row.propTypes = {
  theme: shape({
    row: string,
    flex: string,
    stretch: string,
  }).isRequired,
  children: node,
  flex: bool,
  stretch: bool,
  className: string,
}

Row.defaultProps = {
  children: null,
  flex: false,
  stretch: false,
  className: null,
}

export default consumeTheme(Row)
