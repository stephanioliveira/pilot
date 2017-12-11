import React from 'react'
import {
  arrayOf,
  string,
  func,
  shape,
} from 'prop-types'

import { themr } from 'react-css-themr'

const applyThemr = themr('UISegmentedSwitch')

const SegmentedSwitch = ({
  items,
  selected,
  onChange,
  name,
  theme,
}) => (
  <div className={theme.contextSwitch}>
    {items.map((item, index) => (
      <label
        key={`context-switch-${name}-label-${item}`}
        className={theme.item}
        htmlFor={`context-switch-${name}-input-${item}`}
      >
        <input
          id={`context-switch-${name}-input-${item}`}
          name={`context-switch-${name}-input`}
          value={item}
          type="radio"
          checked={selected === item}
          onChange={() => onChange(item, index)}
        />

        <span className={theme.label}>{item}</span>
      </label>
    ))}
  </div>
)

SegmentedSwitch.propTypes = {
  theme: shape({
    contextSwitch: string,
    item: string,
    label: string,
  }),
  items: arrayOf(string).isRequired,
  selected: string.isRequired,
  onChange: func.isRequired,
  name: string.isRequired,
}

SegmentedSwitch.defaultProps = {
  selected: '',
}

export default applyThemr(SegmentedSwitch)
