import * as React from 'react'
import Menu from '@mui/material/Menu'

// --------------------------------------- Menu ---------------------------------------
export default function CmMenu(props: {
  trigger: React.ReactNode
  title?: React.ReactNode
  contents: React.ReactNode
  className?: string
}) {
  const [menuTrigger, setMenuTrigger] = React.useState<null | HTMLElement>(null)
  const open = Boolean(menuTrigger)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setMenuTrigger(event.currentTarget)
  }
  const handleClose = () => {
    setMenuTrigger(null)
  }
  return (
    <div>
      <button id="long-button" type="button" onClick={handleClick}>
        {props.trigger}
      </button>
      <Menu
        id="long-menu"
        anchorEl={menuTrigger}
        open={open}
        onClose={handleClose}
        className={props.className}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right',
        }}
        transformOrigin={{
          vertical: -15,
          horizontal: 'right',
        }}
      >
        {props.title}
        {props.contents}
      </Menu>
    </div>
  )
}
