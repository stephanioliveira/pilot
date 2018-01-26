import React from 'react'
import { storiesOf } from '@storybook/react'

import MdMenu from 'react-icons/lib/md/menu'
import MdEventNote from 'react-icons/lib/md/event-note'
import MdFreeBreakfast from 'react-icons/lib/md/free-breakfast'
import IconArrowUp from 'react-icons/lib/md/keyboard-arrow-up'
import IconArrowDown from 'react-icons/lib/md/keyboard-arrow-down'
import shortid from 'shortid'

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarLinks,
  SidebarLink,
  SidebarSections,
} from '../../src/components/Sidebar'

import Tag from '../../src/components/Tag'
import SegmentedSwitch from '../../src/components/SegmentedSwitch'

const items = [
  {
    value: 'minha-conta',
    title: 'Minha conta',
    icon: <MdEventNote />,
  },
  {
    value: 'transacoes',
    title: 'Transações',
    icon: <MdFreeBreakfast />,
  },
]

const sections = {
  title: 'Nome da empresa',
  showMsg: 'Mostrar saldo',
  hideMsg: 'Ocultar saldo',
  data: [
    {
      title: 'Disponível',
      value: <p><small>R$</small> 150000</p>,
      actionTitle: 'Sacar',
      action: () => {
      },
    },
    {
      title: 'A receber',
      value: <p><small>R$</small> 70000</p>,
      actionTitle: 'Antecipar',
      action: () => {
      },
    },
  ],
}

class SidebarState extends React.Component {
  constructor (props) {
    super(props)

    this.id = shortid.generate()

    this.state = {
      collapsed: false,
      selectedEnvironment: 'live',
      active: '',
      showInfos: false,
    }

    this.handleEnvironment = this.handleEnvironment.bind(this)
  }

  handleEnvironment (env) {
    this.setState({
      selectedEnvironment: env,
    })
  }

  render () {
    const {
      collapsed,
      selectedEnvironment,
      showInfos,
    } = this.state

    return (
      <Sidebar collapsed={collapsed}>
        <SidebarHeader>
          {!collapsed &&
            <img src="https://assets.pagar.me/site/general/logo-light-3812e7ea6b596bdcc8c041f0edc4ff15.png" alt="Pagar.me" />
          }
          <button onClick={() => this.setState({ collapsed: !collapsed })}>
            <MdMenu />
          </button>
        </SidebarHeader>

        <SidebarContent>
          {collapsed
            ? <Tag key={selectedEnvironment}>{selectedEnvironment}</Tag>
            : <SegmentedSwitch
              items={['live', 'test']}
              selected={this.state.selectedEnvironment}
              name={`${this.id}-live-test`}
              onChange={this.handleEnvironment}
            />
          }
        </SidebarContent>

        <SidebarLinks>
          {!collapsed &&
            <SidebarLink
              title="Nome da empresa"
              subtitle={showInfos ? 'ocultar saldo' : 'mostrar saldo'}
              active={showInfos}
              onClick={() => this.setState({ showInfos: !showInfos })}
              icons={{
                collapse: <IconArrowUp />,
                expand: <IconArrowDown />,
              }}
            >
              <SidebarSections sections={sections.data} />
            </SidebarLink>
          }

          {items.map(item => (
            <SidebarLink
              key={item.value}
              title={item.title}
              active={item.value === this.state.active}
              onClick={() => this.setState({ active: item.value })}
              icons={{
                link: item.icon,
              }}
              collapsed={collapsed}
            />
          ))}
        </SidebarLinks>
      </Sidebar>
    )
  }
}

storiesOf('Sidebar', module)
  .add('defaultTheme', () => <SidebarState />)
