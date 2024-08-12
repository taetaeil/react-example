'use client'
import React, { useState } from 'react'
import CmIcon from './CmIcon' // icon 컴포넌트
import '../styles/common.scss' // css 파일

interface CmBasicInputProps {
  isReset?: boolean // 초기화 버튼
  isSecret?: boolean // 비밀번호 감추기 버튼
  isError?: boolean // 에러일 경우
  type?: string // input 타입
  placeholder?: string
  readOnly?: boolean
  value: string // input의 값
  onChange: (value: string) => void // input 값이 변경될 때 호출되는 함수
}

export default function CmBasicInput({
  isReset,
  isSecret,
  isError,
  type,
  placeholder,
  readOnly,
  value,
  onChange,
}: CmBasicInputProps) {
  const [openPw, setOpenPw] = useState(false)
  const [changePwType, setChangePwType] = useState('password')

  const passwordOpen = () => {
    setOpenPw(!openPw)
    setChangePwType(openPw ? 'password' : 'text')
  }

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    onChange(event.target.value)
  }

  return (
    <div
      className={`cm-input cm-input__btn ${isError ? 'cm-input--error' : ''} ${
        value ? 'cm-input--filled' : ''
      }`}
    >
      <input
        type={isSecret ? changePwType : type ? type : 'text'}
        placeholder={placeholder ? placeholder : ''}
        readOnly={readOnly}
        value={value}
        onChange={handleInputChange}
      />
      {isReset ? (
        <button
          type="button"
          className="cm-input__btn-reset"
          onClick={() => onChange('')} // 클릭 시 입력값 초기화
        >
          <CmIcon name="delete__circle--99a"></CmIcon>
        </button>
      ) : isSecret ? (
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
