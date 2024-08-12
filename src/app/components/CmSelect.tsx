import React from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import { SelectChangeEvent } from '@mui/material/Select'
import '../styles/select.scss' // css 파일

interface Item {
  value: string
  label: string
}

interface CmSelectProps {
  value: string
  items: Item[]
  width?: string
  placeholder?: string
  size?: 'sm' | 'md'
  onChange?: (event: SelectChangeEvent<string>) => void
}

export default function CmSelect({
  value,
  items,
  width = '60px',
  placeholder,
  size = 'md', // 기본값을 'md'로 설정
  onChange,
}: CmSelectProps) {
  const isValidValue = items.some((item) => item.value === value)
  const selectValue = isValidValue ? value : ''

  // 크기와 값을 기반으로 클래스명을 설정
  const selectClassName = `cm-select ${
    selectValue === '' ? 'cm-select__placeholder' : ''
  } ${size === 'sm' ? 'cm-select--sm' : 'cm-select--md'}`

  return (
    <Select
      value={selectValue}
      displayEmpty
      onChange={onChange}
      sx={{ minWidth: width }}
      className={selectClassName}
    >
      {placeholder && !isValidValue && (
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
  )
}
