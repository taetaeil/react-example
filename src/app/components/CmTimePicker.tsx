import React, { useState } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'

interface Item {
  value: string
  label: string
}

interface CmTimepickerProps {
  startValue?: string
  endValue?: string
  items: Item[]
  placeholder?: string
  onChange?: (event: SelectChangeEvent<string>) => void
  endDisabled?: boolean
  startDisabled?: boolean
}

export default function CmTimepicker({
  startValue = '',
  endValue = '',
  items,
  placeholder,
  onChange,
  startDisabled,
  endDisabled,
}: CmTimepickerProps) {
  const [currentStartValue, setCurrentStartValue] = useState(startValue)
  const [currentEndValue, setCurrentEndValue] = useState(endValue)
  const [openStart, setOpenStart] = useState(false)
  const [openEnd, setOpenEnd] = useState(false)

  const handleStartChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value
    setCurrentStartValue(newValue)
    setOpenStart(false)
    if (onChange) {
      onChange(event)
    }
  }

  const handleEndChange = (event: SelectChangeEvent<string>) => {
    const newValue = event.target.value
    setCurrentEndValue(newValue)
    setOpenEnd(false)
    if (onChange) {
      onChange(event)
    }
  }

  return (
    <div className="cm-timepicker">
      <div className="cm-timepicker__wrap">
        <Select
          value={currentStartValue}
          displayEmpty
          onChange={handleStartChange}
          open={openStart}
          onClose={() => setOpenStart(false)}
          readOnly
          disabled={startDisabled}
          MenuProps={{
            className: 'cm-timepicker__menu',
          }}
          className={currentStartValue ? 'cm-timepicker__selected' : ''}
        >
          {placeholder && !currentStartValue && (
            <MenuItem value="" sx={{ display: 'none' }}>
              {placeholder}
            </MenuItem>
          )}
          {items.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <button
          type="button"
          className={`cm-timepicker__btn ${
            openStart ? 'cm-timepicker__btn--active' : ''
          }`}
          onClick={() => {
            if (!startDisabled) {
              setOpenStart(true)
            }
          }}
        ></button>
      </div>
      <span>&sim;</span>
      <div className="cm-timepicker__wrap">
        <Select
          value={currentEndValue}
          displayEmpty
          onChange={handleEndChange}
          open={openEnd}
          onClose={() => setOpenEnd(false)}
          readOnly
          disabled={endDisabled}
          MenuProps={{
            className: 'cm-timepicker__menu',
          }}
          className={currentEndValue ? 'cm-timepicker__selected' : ''}
        >
          {placeholder && !currentEndValue && (
            <MenuItem value="" sx={{ display: 'none' }}>
              {placeholder}
            </MenuItem>
          )}
          {items.map((item, index) => (
            <MenuItem key={index} value={item.value}>
              {item.label}
            </MenuItem>
          ))}
        </Select>
        <button
          type="button"
          className={`cm-timepicker__btn ${
            openEnd ? 'cm-timepicker__btn--active' : ''
          }`}
          onClick={() => {
            if (!endDisabled) {
              setOpenEnd(true)
            }
          }}
        ></button>
      </div>
    </div>
  )
}
