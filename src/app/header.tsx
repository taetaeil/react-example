'use client'

import * as React from 'react'
import './cm.scss' // css 파일

import MuPopup from './MuPopup' // 설정팝업

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
import Popover from '@mui/material/Popover'

// const ITEM_HEIGHT = 48

// --------------------------------------- Menu ---------------------------------------
export function MuMenu(props: {
  isNoti?: boolean
  imgSrc?: string
  imgAlt?: string
  options: Array<any>
}) {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)
  const open = Boolean(anchorEl)
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }
  const handleClose = () => {
    setAnchorEl(null)
  }
  return (
    <div className="header__menu">
      <button
        type="button"
        id="long-button"
        onClick={handleClick}
        className={`header__btn ${props.isNoti ? 'header__btn--noti' : ''}`}
      >
        <img src={props.imgSrc} alt={props.imgAlt} />
      </button>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
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

// --------------------------------------- Header ---------------------------------------
const option = [
  {
    status: 'error',
    name: 'AS1-MO-0101',
    type: '모터',
    time: '2024-06-25 16:25:00',
  },
  {
    status: 'error',
    name: 'AS4-PU-0201',
    type: '펌프',
    time: '2024-06-22 00:00:00',
  },
  {
    status: 'warning',
    name: 'AS1-MO-01020000',
    type: '모터',
    time: '2024-06-25 16:25:00',
  },
  {
    status: 'warning',
    name: 'AS1-PU-02050000',
    type: '펌프',
    time: '2024-06-25 16:25:00',
  },
  {
    status: 'warning',
    name: 'AS2-PU-02120000',
    type: '펌프',
    time: '2024-06-25 16:25:00',
  },
]

export default function CmHeader() {
  const [anchorEl, setAnchorEl] = React.useState<HTMLElement | null>(null)

  const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget)
  }

  const handlePopoverClose = () => {
    setAnchorEl(null)
  }
  const open = Boolean(anchorEl)

  return (
    <header className="header">
      <h1>K-PHM cloud</h1>
      <div className="header__utils">
        <div>
          <button
            type="button"
            aria-owns={open ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            className="header__refresh-time"
          >
            9분 50초전
          </button>
          <Popover
            id="mouse-over-popover"
            sx={{
              pointerEvents: 'none',
            }}
            open={open}
            anchorEl={anchorEl}
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'right',
            }}
            onClose={handlePopoverClose}
            disableRestoreFocus
          >
            <span>새로고침</span>
          </Popover>
        </div>
        <button type="button"></button>
        <MuMenu isNoti imgSrc="" imgAlt="알" options={option}></MuMenu>
        <MuPopup
          title="설정"
          trigger={<span className="header__btn">설</span>}
          contents={<div>내용</div>}
        ></MuPopup>
        <button type="button">김코난</button>
      </div>
    </header>
  )
}
