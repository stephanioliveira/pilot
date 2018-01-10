import React from 'react'
import { storiesOf } from '@storybook/react'

import Filters from '../../src/containers/Filters'

import dateSelectorPresets from '../../src/models/dateSelectorPresets'
import filterOptions from '../../src/models/transactionFilterOptions'

import style from './style.css'

class FilterState extends React.Component {
  constructor (props) {
    super(props)

    const {
      search,
      values,
      dates,
    } = props

    this.state = {
      search,
      values,
      dates,
    }

    this.handleFiltersChange = this.handleFiltersChange.bind(this)
  }

  handleFiltersChange (filters) {
    const {
      search,
      values,
      dates,
    } = filters

    this.setState({
      search,
      values,
      dates,
    })
  }

  render () {
    const {
      options,
      datePresets,
    } = this.props

    const {
      search,
      values,
      dates,
    } = this.state

    return (
      <Filters
        search={search}
        datePresets={datePresets}
        dates={dates}
        values={values}
        options={options}
        onChange={this.handleFiltersChange}
      />
    )
  }
}

FilterState.propTypes = {
  datePresets: Filters.propTypes.datePresets.isRequired,
  dates: Filters.propTypes.dates,
  options: Filters.propTypes.options.isRequired,
  search: Filters.propTypes.search,
  values: Filters.propTypes.values,
}

FilterState.defaultProps = {
  datePresets: dateSelectorPresets,
  dates: {},
  options: filterOptions,
  search: '',
  values: [],
}

storiesOf('Filters', module)
  .add('Default', () => (
    <div className={style.root}>
      <FilterState
        options={filterOptions}
        datePresets={dateSelectorPresets}
      />
    </div>
  ))
