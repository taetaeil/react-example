// 'use client'

import * as React from 'react'
import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import '../styles/common.scss' // css 파일

// --------------------------------------- Menu ---------------------------------------
export default function CmMenu(props: {
  options: Array<any>
  trigger: React.ReactNode
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
    <div className="header__menu">
      <button id="long-button" type="button" onClick={handleClick}>
        {props.trigger}
      </button>
      <Menu
        id="long-menu"
        anchorEl={menuTrigger}
        open={open}
        onClose={handleClose}
      >
        <p className="header__menu--title">알람</p>
        {props.options.map((option) => (
          <MenuItem
            key={option.name}
            selected={option.name === 'AS1-MO-0101'}
            onClick={handleClose}
          >
            <span
              className={`${
                option.status === 'error'
                  ? 'header__menu--error'
                  : 'header__menu--warning'
              }`}
            ></span>
            <span>{option.name}</span>
            <span>{option.type}</span>
            <span>{option.time}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}
