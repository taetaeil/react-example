'use client'
import React, { useState } from 'react'

import '../styles/upload.scss' // css 파일
import CmInput from '../components/CmInput' // input 컴포넌트
import CmTree from '../components/CmTree' // 트리메뉴
import CmIcon from '../components/CmIcon' // icon 컴포넌트

export default function Main() {
  const [inputValue, setInputValue] = useState('')
  const menuList = [
    {
      id: 'press1',
      label: '단조 프레스 #1',
      children: [
        {
          id: 'asset1',
          label: 'Asset #1',
          children: [
            { id: '1 list 1', label: 'list 1' },
            { id: '1 list 2', label: 'list 2' },
          ],
        },
        { id: 'asset2', label: 'Asset #2' },
        { id: 'asset3', label: 'Asset #3' },
        { id: 'asset4', label: 'Asset #4' },
        { id: 'asset5', label: 'Asset #5' },
        { id: 'asset6', label: 'Asset #6' },
      ],
    },
    {
      id: 'press2',
      label: '단조 프레스 #2',
      children: [
        {
          id: 'asset7',
          label: 'Asset #7',
          children: [
            {
              id: '2 list 1',
              label: 'list 1',
              children: [
                { id: '3 list 1', label: 'list 1' },
                { id: '3 list 2', label: 'list 2' },
              ],
            },
            { id: '2 list 2', label: 'list 2' },
          ],
        },
        { id: 'asset8', label: 'Asset #8' },
      ],
    },
  ]
  const pumpDesc = [
    {
      id: 'pump1',
      label: 'Pump #1',
      children: [
        {
          id: 'Sensor1',
          label: 'Sensor #1: {x: time, y: amplitude, dttype:float32}',
        },
        {
          id: 'Sensor2',
          label: 'Sensor #2: {x: time, y: m/s^2, dttype:float32}',
        },
        {
          id: 'Sensor3',
          label: 'Sensor #3: {x: time, y: volts, dttype:float32}',
        },
      ],
    },
  ]
  // FIXME 개발자: 파일 업로드 중일 경우 임시 값 입니다.
  const isUpload = false

  return (
    <div className="upload">
      <h2 className="upload__title">파일 업로드</h2>
      <p className="upload__desc">대시보드를 구성할 목록을 업로드 해주세요.</p>

      {/* 파일 업로드 */}
      <div
        className={`upload__file ${isUpload ? 'upload__file--ongoing' : ''}`}
      >
        <label htmlFor="file">
          {isUpload ? (
            <>
              <CmIcon name="upload-spinner" width="40"></CmIcon>
              <span className="upload__file-desc">업로드 중</span>
            </>
          ) : (
            <>
              <span>
                <CmIcon name="upload__line--266" width="20"></CmIcon>
                JSON 파일 업로드
              </span>
              <span className="upload__file-desc">
                마우스로 파일을 끌어오거나 클릭해 파일을 찾아보세요.
              </span>
            </>
          )}
          {/* ========= 파일 업로드 중일 경우 ========= */}
        </label>
        <input type="file" id="file" readOnly={isUpload} />
      </div>

      {/* input */}
      <CmInput
        value={inputValue}
        onChange={setInputValue}
        isReset={isUpload}
        placeholder=".json 형식의 파일"
        readOnly
      ></CmInput>

      {/* 미리보기 영역 */}
      <div className="upload__preview">
        <div className="upload__preview-title">미리보기</div>
        <div className="upload__preview-cont">
          <div className="preview-cont__menu">
            <CmTree menu={menuList}></CmTree>
          </div>
          <div className="preview-cont__detail">
            <div className="preview-cont__detail-img">
              <img
                src="/icons/sample-pump.png"
                alt="이미지"
                width="210"
                height="210"
              />
            </div>
            <div className="preview-cont__detail-info">
              <CmTree menu={pumpDesc}></CmTree>
            </div>
          </div>
        </div>
      </div>
      <div className="upload__btns">
        <button type="button" className="btn__line">
          취소
        </button>
        <button type="button" className="btn__primary">
          확인
        </button>
      </div>
    </div>
  )
}
