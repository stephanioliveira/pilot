import React, { Component } from 'react'
import addons from '@storybook/addons'
import { ThemeProvider } from 'react-css-themr'
import { storiesOf, addDecorator } from '@storybook/react'
import { merge } from 'ramda'

import themePagarme from '../../src/theme-pagarme'
import themeHighcontrast from '../../src/theme-highcontrast'

const themes = [
  {
    name: 'pagarme',
    theme: themePagarme,
  },
  {
    name: 'highcontrast',
    theme: themeHighcontrast,
  }
]

export default class ThemeSelector extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      base: 'light',
      theme: themes[0],
      channel: addons.getChannel()
    };
    this.changeStateProp = this.changeStateProp.bind(this);
    this.handleChangeThemeBase = this.handleChangeThemeBase.bind(this);
    this.handleChangeTheme = this.handleChangeTheme.bind(this);
  }

  componentDidMount() {
    // Listen to the notes and render it.
    this.state.channel.on('pagarme/theme/change_base', this.handleChangeThemeBase);
    this.state.channel.on('pagarme/theme/change_theme', this.handleChangeTheme);
  }

  handleChangeThemeBase(value){
    this.changeStateProp('base', value)
  }

  handleChangeTheme(value){
    const theme = themes.find(t => t.name === value)
    this.changeStateProp('theme', theme)
  }

  changeStateProp(prop,value) {
    this.setState({
      [prop]: value
    })
  }

  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }
    this.unmounted = true;
    this.state.channel.removeListener('pagarme/theme/change_base', this.handleChangeThemeBase);
    this.state.channel.removeListener('pagarme/theme/change_theme', this.handleChangeTheme);
  }

  render(){
    const { children, storyFn } = this.props
    const { theme } = this.state

    console.log(theme.name)

    return (
      <ThemeProvider key={theme.name} theme={theme.theme} >
        {storyFn()}
      </ThemeProvider>
    )
  }
}

addDecorator((storyFn) => <ThemeSelector storyFn={storyFn} />)
