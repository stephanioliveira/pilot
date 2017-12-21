import React from 'react'
import addons from '@storybook/addons'
import ThemeSelectorPanel from './ThemeSelectorPanel'

addons.register('pagarme/theme', (storybookAPI) => {
  addons.addPanel('pagarme/theme/panel', {
    title: 'Temas',
    render: () => (
      <ThemeSelectorPanel channel={addons.getChannel()} api={storybookAPI}/>
    ),
  })
})
