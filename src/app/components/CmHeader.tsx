'use client'

import * as React from 'react'
import '../styles/header.scss' // css 파일
import CmIcon from './CmIcon' // icon 컴포넌트

// const ITEM_HEIGHT = 48

export default function CmHeader(props: {
  utiles?: React.ReactNode
  nav?: React.ReactNode
}) {
  return (
    <header className="header">
      <div className="header__menu">
        <h1 className="header-logo">
          <CmIcon name="logo" width="135" height="36"></CmIcon>
        </h1>
        <div className="header__nav">{props.nav}</div>
      </div>
      <div className="header__btns">{props.utiles}</div>
    </header>
  )
}
