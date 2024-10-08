'use client'
import '../styles/login.scss' // css 파일

import React, { useState } from 'react'
import CmHeader from '../components/CmHeader' // header 컴포넌트
import CmInput from '../components/CmInput' // input 컴포넌트
import CmCheckbox from '../components/CmCheckbox' // checkbox 컴포넌트
import CmIcon from '../components/CmIcon' // icon 컴포넌트

export default function Login() {
  const idError = true
  const pwError = false
  const [inputValue, setInputValue] = useState('')
  return (
    <>
      {/* header */}
      <CmHeader
        utiles={
          <button type="button" className="btn__line">
            <CmIcon name="download__line--266" width="16"></CmIcon>
            <span>매뉴얼 다운로드</span>
          </button>
        }
      ></CmHeader>
      {/*  login form */}
      <div className="login">
        <div className="login-box">
          <h2 className="login-box__title">로그인</h2>
          <div className="login-box__form">
            <CmInput
              value={inputValue}
              onChange={setInputValue}
              placeholder="시스템계정"
            ></CmInput>
            <CmInput
              value={inputValue}
              onChange={setInputValue}
              isError={idError}
              placeholder="아이디"
            ></CmInput>
            <CmInput
              type="password"
              isError={pwError}
              value={inputValue}
              onChange={setInputValue}
              isSecret
              placeholder="비밀번호"
            ></CmInput>
            <CmCheckbox label="로그인 상태 유지"></CmCheckbox>
          </div>
          <p className="login__validation">존재하지 않는 아이디 입니다.</p>
          <button type="button" className="btn__primary">
            로그인
          </button>
          <div className="login-box__btns">
            <button type="button">계정 찾기</button>
            <button type="button">회원가입</button>
          </div>
        </div>
        <p className="login-footer">
          COPYRIGHT KONAN TECHNOLOGY INC. ALL RIGHTS RESERVED.
        </p>
      </div>
    </>
  )
}
