import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'

// --------------------------------------- Select ---------------------------------------
export default function CmSelect() {
  return (
    <FormControl>
      <Select value="apple">
        <MenuItem value="apple">apple</MenuItem>
        <MenuItem value="banana">banana</MenuItem>
        <MenuItem value="melon">melon</MenuItem>
      </Select>
    </FormControl>
  )
}
