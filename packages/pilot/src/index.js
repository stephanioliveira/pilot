import React from 'react'
import ReactDOM from 'react-dom'
import { ThemeProvider } from 'react-css-themr'

import registerServiceWorker from './registerServiceWorker'

import { Typeset } from 'former-kit'
import theme from 'former-kit-theme-pagarme'

const App = () => (
  <ThemeProvider theme={theme}>
    <Typeset>
      <h1>Hello world</h1>
    </Typeset>
  </ThemeProvider>
)


ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()

