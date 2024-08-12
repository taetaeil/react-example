'use client'

import React, { useState, useRef } from 'react'
import '../styles/common.scss' // css 파일

interface CmNumberInputProps {
  value: number // input의 값
  onChange: (value: number) => void // input 값이 변경될 때 호출되는 함수
}

export default function CmNumberInput({ value, onChange }: CmNumberInputProps) {
  const inputRef = useRef<HTMLInputElement>(null) // input 요소에 대한 ref 생성

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(event.target.value, 10)
    if (!isNaN(newValue)) {
      onChange(newValue)
    }
  }

  const handleIncrement = () => {
    onChange(value + 1)
    inputRef.current?.focus() // 버튼 클릭 후 input에 포커스 설정
  }

  const handleDecrement = () => {
    onChange(value - 1)
    inputRef.current?.focus() // 버튼 클릭 후 input에 포커스 설정
  }

  return (
    <div
      className={`cm-input cm-input-number ${value ? 'cm-input--filled' : ''}`}
    >
      <input
        ref={inputRef} // input 요소에 ref 연결
        type="number"
        value={value}
        onChange={handleInputChange}
      />
      <div className="cm-input-number__btn">
        <button type="button" onClick={handleIncrement}>
          {/* 화살표 아이콘 */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
          >
            <g id="ico_stepper-up" transform="translate(-1039 -297)">
              <rect
                id="Rectangle_85"
                data-name="Rectangle 85"
                width="12"
                height="10"
                transform="translate(1039 297)"
                fill="none"
                opacity="0.1"
              />
              <path
                id="Path_32"
                data-name="Path 32"
                d="M1045.111,304.889,1043,302.778l-2.111,2.111-.778-.778,2.889-2.889,2.889,2.889Z"
                transform="translate(2 -1)"
                fill="#777d87"
              />
            </g>
          </svg>
        </button>
        <button type="button" onClick={handleDecrement}>
          <svg
            id="ico_stepper-down"
            xmlns="http://www.w3.org/2000/svg"
            width="12"
            height="10"
            viewBox="0 0 12 10"
          >
            <rect
              id="Rectangle_85"
              data-name="Rectangle 85"
              width="12"
              height="10"
              fill="none"
              opacity="0.1"
            />
            <path
              id="Path_32"
              data-name="Path 32"
              d="M1043,305.278l-2.889-2.889.778-.778,2.111,2.111,2.111-2.111.778.778Z"
              transform="translate(-1037 -298.5)"
              fill="#777d87"
            />
          </svg>
        </button>
      </div>
    </div>
  )
}
