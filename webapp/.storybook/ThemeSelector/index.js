import React, { Component } from 'react'
import addons from '@storybook/addons'

export default class ThemeSelector extends Comment {
  render(){
    const { children } = this.props
    const channel = addons.getChannel()

    channel.emmit('hue', 'hue')

    return children
  }
}
