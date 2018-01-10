import React from 'react'
import { shape } from 'prop-types'

export default class ThemeConsumer extends React.Component {
  render () {
    const { name } = this.props

    return React.cloneChild(
      this.children,
      { theme: this.context.formerTheme[name] }
    )
  }
}

ThemeConsumer.contextTypes = {
  formerTheme: shape({}),
}
