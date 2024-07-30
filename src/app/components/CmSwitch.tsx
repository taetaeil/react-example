import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'

// --------------------------------------- Switch ---------------------------------------
export default function CmSwitch(props: {
  disabled?: boolean
  label?: string
  required?: boolean
}) {
  return (
    <FormControlLabel
      required={props.required}
      disabled={props.disabled}
      control={<Switch />}
      label={props.label}
    />
  )
}
