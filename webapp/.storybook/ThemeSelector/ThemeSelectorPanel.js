import React, { Component } from 'react'

export default class ThemeSelectorPanel extends Comment {
  render(){
    const { children, channel, api } = this.props

    return (
      <select>
        <option value="default">Default</option>
        <option value="notDefault">Not default</option>
      </select>
    )
  }
}