import Checkbox from '@mui/material/Checkbox'
import FormControlLabel from '@mui/material/FormControlLabel'

// --------------------------------------- Checkbox ---------------------------------------
export default function CmCheckbox(props: {
  disabled?: boolean
  label?: string
  required?: boolean
}) {
  return (
    <FormControlLabel
      required={props.required}
      disabled={props.disabled}
      control={<Checkbox />}
      label={props.label}
      className="cm-checkbox"
    />
  )
}
