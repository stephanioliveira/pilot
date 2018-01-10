import React from 'react'
import { storiesOf, addDecorator } from '@storybook/react'

import theme from 'former-kit-skin-pagarme'
import ThemeProvider from '../src/ThemeProvider'

const ThemeDecorator = (storyFn) => (
  <ThemeProvider theme={theme}>
    {storyFn()}
  </ThemeProvider>
)

addDecorator(ThemeDecorator)

