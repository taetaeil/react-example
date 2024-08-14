import React, { ReactNode, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

// --------------------------------------- Checkbox ---------------------------------------
export default function CmCheckbox(props: {
  disabled?: boolean
  label?: ReactNode
  required?: boolean
  checked?: boolean // 체크 여부를 제어하는 prop
  onChange?: (checked: boolean) => void // 체크 상태가 변경될 때 호출되는 함수
}) {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (props.onChange) {
      props.onChange(event.target.checked)
    }
  }

  return (
    <FormControlLabel
      required={props.required}
      disabled={props.disabled}
      control={<Checkbox checked={props.checked} onChange={handleChange} />}
      label={props.label}
      className="cm-checkbox"
    />
  )
}
