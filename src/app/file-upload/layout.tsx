'use client'

import React, { useState } from 'react'
import CmHeader from '../components/CmHeader' // header 컴포넌트
import CmSidebar from '../components/CmSidebar' // sidebar 컴포넌트
import CmMenu from '../components/CmMenu'
import MenuItem from '@mui/material/MenuItem'
import SettingP from '../components/pages/setting-p' // 설정팝업
import CmIcon from '../components/CmIcon' // icon 컴포넌트

import Popover from '@mui/material/Popover'

// --------------------------------------- Header ---------------------------------------
const notiList = [
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  // 알림버튼
  const isNoti = true

  // 로그아웃버튼(김코난)
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null)
  const [isClicked, setIsClicked] = useState(false)

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget)
    setIsClicked(!isClicked)
  }

  const handleClose = () => {
    setAnchorEl(null)
    setIsClicked(!isClicked)
  }

  const openLogout = Boolean(anchorEl)
  const id = openLogout ? 'simple-popover' : undefined

  return (
    <>
      <CmHeader
        utiles={
          <>
            {/* =========================== 매뉴얼 다운로드 버튼 =========================== */}
            <button type="button" className="btn__line">
              <CmIcon name="download__line--266" width="16"></CmIcon>
              <span>매뉴얼 다운로드</span>
            </button>
            <span className="divide-ver"></span>

            {/* =========================== 알람 =========================== */}
            <CmMenu
              className="header__alram"
              title={
                <p className="header__alram-title">
                  알람
                  <span className="header__alram--badage">5</span>
                </p>
              }
              contents={notiList.map((option) => (
                <MenuItem
                  key={option.name}
                  selected={option.name === 'AS1-MO-0101'}
                  onClick={handleClose}
                >
                  <div className="header__alram-info">
                    <span
                      className={`${
                        option.status === 'error'
                          ? 'header__alram--error'
                          : 'header__alram--warning'
                      }`}
                    ></span>
                    <span className="header__alram-list--title">
                      {option.name}
                    </span>
                    <span className="header__alram-list--type">
                      {option.type}
                    </span>
                  </div>
                  <span className="header__alram-list--time">
                    {option.time}
                  </span>
                </MenuItem>
              ))}
              trigger={
                <span
                  className={`header__btns--circle ${
                    isNoti ? 'header__btns--badage' : ''
                  }`}
                >
                  <CmIcon name="alram__line--e1e" width="20"></CmIcon>
                </span>
              }
            ></CmMenu>

            {/* =========================== 설정 =========================== */}
            <SettingP
              trigger={
                <span className="header__btns--circle">
                  <CmIcon name="setting__line--e1e" width="20"></CmIcon>
                </span>
              }
            ></SettingP>

            {/* =========================== 김코난 =========================== */}
            <button
              type="button"
              className="header__btns--square"
              aria-describedby={id}
              onClick={handleClick}
            >
              <span>김코난</span>
              {isClicked ? (
                <CmIcon name="arrow-t__line--e1e" width="12"></CmIcon>
              ) : (
                <CmIcon name="arrow-b__line--e1e" width="12"></CmIcon>
              )}
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
              className="header__btns-logout"
            >
              <button type="button">비밀번호 변경</button>
              <button type="button">로그아웃</button>
              <p>버전: 1.0.0</p>
            </Popover>
          </>
        }
      ></CmHeader>
      <CmSidebar contents={children} initialMinwidth></CmSidebar>
    </>
  )
}
