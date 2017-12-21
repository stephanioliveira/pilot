import React, { Component } from 'react'

const state = {
  base: 'ligth',
  theme: 'pagarme',
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    width: '100%',
    height: '100%',
    fontFamily: 'Arial',
  },
  block: {
    flexGrow: 1,
    display: 'flex',
    flexFlow: 'column',
    height: '100%',
    padding: '10px 20px',
  }
}
class ThemeSelectorPanel extends Component {

  constructor(...args){
    super(...args)
    this.state = state
    this.handleBaseChange = this.handleBaseChange.bind(this)
    this.handleThemeChange = this.handleThemeChange.bind(this)
    this.themeChange = this.themeChange.bind(this)
  }

  componentDidMount() {
    const { api } = this.props

    // Clear the current notes on every story change.
    this.stopListeningOnStory = api.onStory(() => {
      this.themeChange(this.state.theme);
    });
  }

  componentWillUnmount() {
    if(this.stopListeningOnStory) {
      this.stopListeningOnStory();
    }
  }

  handleBaseChange(event) {
    const { value } = event.target
    const { channel } = this.props
    this.setState({
      base: value
    })
    channel.emit('pagarme/theme/change_base', value)
  }

  handleThemeChange(event) {
    const { value } = event.target
    this.themeChange(value)
  }

  themeChange(value) {
    const { channel } = this.props
    this.setState({
      theme: value
    })
    channel.emit('pagarme/theme/change_theme', value)
  }

  render(){
    return (
      <div style={styles.container}>
        <div style={styles.block}>
          <h2> Base </h2>
          <select value={this.state.base} onChange={this.handleBaseChange}>
            <option value="ligth">Ligth</option>
            <option value="dark">Dark</option>
          </select>
        </div>
        <div style={styles.block}>
          <h2> Theme </h2>
          <select value={this.state.theme} onChange={this.handleThemeChange}>
            <option value="pagarme">Pagarme</option>
            <option value="highcontrast">Highcontrast</option>
          </select>
        </div>
      </div>
    )
  }
}

export default ThemeSelectorPanel
