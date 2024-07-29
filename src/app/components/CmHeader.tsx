'use client'

import * as React from 'react'
import '../styles/common.scss' // css 파일
import CmIcon from './CmIcon' // icon 컴포넌트

// import CmPopup from './CmPopup' // 설정팝업

import Menu from '@mui/material/Menu'
import MenuItem from '@mui/material/MenuItem'
// import Popover from '@mui/material/Popover'
// import Tooltip from '@mui/material/Tooltip'

// const ITEM_HEIGHT = 48

// --------------------------------------- Menu ---------------------------------------
export function CmMenu(props: {
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
      <button type="button" id="long-button" onClick={handleClick}>
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

// --------------------------------------- Header ---------------------------------------
// const notiList = [
//   {
//     status: 'error',
//     name: 'AS1-MO-0101',
//     type: '모터',
//     time: '2024-06-25 16:25:00',
//   },
//   {
//     status: 'error',
//     name: 'AS4-PU-0201',
//     type: '펌프',
//     time: '2024-06-22 00:00:00',
//   },
//   {
//     status: 'warning',
//     name: 'AS1-MO-01020000',
//     type: '모터',
//     time: '2024-06-25 16:25:00',
//   },
//   {
//     status: 'warning',
//     name: 'AS1-PU-02050000',
//     type: '펌프',
//     time: '2024-06-25 16:25:00',
//   },
//   {
//     status: 'warning',
//     name: 'AS2-PU-02120000',
//     type: '펌프',
//     time: '2024-06-25 16:25:00',
//   },
// ]

export default function CmHeader(props: { utiles?: React.ReactNode }) {
  // 새로고침(9분 50초전)
  // const [resetTrigger, setResetTrigger] = React.useState<HTMLElement | null>(
  //   null
  // )

  // const handlePopoverOpen = (event: React.MouseEvent<HTMLElement>) => {
  //   setResetTrigger(event.currentTarget)
  // }

  // const handlePopoverClose = () => {
  //   setResetTrigger(null)
  // }
  // const openReset = Boolean(resetTrigger)

  // // 알림버튼
  // const isNoti = true

  // 로그아웃버튼(김코난)
  // const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)

  // const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
  //   setAnchorEl(event.currentTarget)
  // }

  // const handleClose = () => {
  //   setAnchorEl(null)
  // }

  // const openLogout = Boolean(anchorEl)
  // const id = openLogout ? 'simple-popover' : undefined

  return (
    <header className="header">
      <h1 className="header-logo">
        <CmIcon name="logo" width="135" height="36"></CmIcon>
      </h1>
      <div className="header__btns">
        {props.utiles}
        {/* =========================== 시간 ===========================
        <Tooltip title="새로고침" placement="bottom-end">
          <button
            type="button"
            aria-owns={openReset ? 'mouse-over-popover' : undefined}
            aria-haspopup="true"
            onMouseEnter={handlePopoverOpen}
            onMouseLeave={handlePopoverClose}
            className="header__btns--square"
          >
            9분 50초전
          </button>
        </Tooltip>

        =========================== 알람 ===========================
        <CmMenu
          options={notiList}
          trigger={
            <span
              className={`header__btns--circle ${
                isNoti ? 'header__btns--badage' : ''
              }`}
            >
              <img src="" alt="알" />
            </span>
          }
        ></CmMenu>

        =========================== 설정 ===========================
        <CmPopup
          title="설정"
          trigger={<span className="header__btns--circle">설</span>}
          contents={<div>내용</div>}
        ></CmPopup>

        =========================== 김코난 ===========================
        <button
          type="button"
          className="header__btns--square"
          aria-describedby={id}
          onClick={handleClick}
        >
          김코난
        </button>
        <Popover
          id={id}
          open={openLogout}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'left',
          }}
        >
          <button type="button">로그아웃</button>
        </Popover> */}
      </div>
    </header>
  )
}
