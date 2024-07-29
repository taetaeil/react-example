'use client'
import React, { useState } from 'react'
import CmIcon from './CmIcon' // icon 컴포넌트

// --------------------------------------- Basic input ---------------------------------------
export default function CmBasicInput(props: {
  isReset?: boolean // 초기화 버튼
  isSecret?: boolean // 비밀번호 감추기 버튼
  isError?: boolean // 에러일 경우
  type?: string // input 타입
  placeholder?: string
}) {
  const [openPw, setOpenPw] = useState(false)
  const [changePwType, setChangePwType] = useState('password')
  const passwordOpen = () => {
    setOpenPw(!openPw)
    setChangePwType(openPw ? 'password' : 'text')
  }

  return (
    <div
      className={`cm-input cm-input__btn ${
        props.isError ? 'cm-input--error' : ''
      }`}
    >
      <input
        type={props.isSecret ? changePwType : props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
      {props.isReset ? (
        <button type="button" className="cm-input__btn-reset">
          <CmIcon name="delete__circle--99a"></CmIcon>
        </button>
      ) : props.isSecret ? (
        <button type="button" onClick={passwordOpen}>
          {openPw ? (
            <CmIcon name="secret-on__line--555"></CmIcon>
          ) : (
            <CmIcon name="secret-off__line--434"></CmIcon>
          )}
        </button>
      ) : null}
    </div>
  )
}
