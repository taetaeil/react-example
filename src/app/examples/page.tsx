'use client'
import React, { useState } from 'react'

import CmInput from '../components/CmInput' // input 컴포넌트
import CmNumberInput from '../components/CmNumberInput' // input 컴포넌트
import CmCheckbox from '../components/CmCheckbox' // checkbox 컴포넌트
import CmSwitch from '../components/CmSwitch' // Switch 컴포넌트
import CmSelect from '../components/CmSelect' // Select 컴포넌트

import Tooltip from '@mui/material/Tooltip'

// ====================================== Page ======================================
export default function Home() {
  const [inputValue, setInputValue] = useState('')
  const selectValue = 'banana'
  const selectItems = [
    { value: 'apple', label: 'apple1' },
    { value: 'banana', label: 'banana1' },
    { value: 'melon', label: 'melon1' },
  ]
  const [numberValue, setNumberValue] = useState(0)
  return (
    <div style={{ padding: '20px' }}>
      {/* 공통 컴포넌트 */}
      <h1
        style={{
          marginBottom: '24px',
          fontWeight: '600',
          fontSize: '24px',
        }}
      >
        Common Components
      </h1>
      <h2
        style={{
          marginTop: '32px',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #dddddd',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        Button
      </h2>
      <ul style={{ padding: '0 15px' }}>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>btn__primary</p>
          {/* --------------------------------------- Button --------------------------------------- */}
          <button type="button" className="btn__primary">
            적용
          </button>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>btn__line</p>
          {/* --------------------------------------- Button --------------------------------------- */}
          <button type="button" className="btn__line">
            취소
          </button>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>btn__icon</p>
          {/* --------------------------------------- Button --------------------------------------- */}
          <button type="button" className="btn__icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g
                id="ico_fullscreen-nor"
                transform="translate(-1878 -24)"
                opacity="0.5"
              >
                <rect
                  id="icon"
                  width="16"
                  height="16"
                  transform="translate(1878 24)"
                  fill="none"
                  opacity="0.1"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M31-4558.8v-4.6h1.2v2.55l2.975-2.975.849.849L33.049-4560H35.6v1.2Zm8.175-9.024,2.975-2.975H39.6v-1.2h4.6v4.6H43v-2.551l-2.975,2.975Z"
                  transform="translate(1848.4 4597.4)"
                  fill="#777d87"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M44.2-4558.8v-4.6H43v2.55l-2.975-2.975-.849.849L42.151-4560H39.6v1.2Zm-8.175-9.024-2.975-2.975H35.6v-1.2H31v4.6h1.2v-2.551l2.975,2.975Z"
                  transform="translate(1848.4 4597.4)"
                  fill="#777d87"
                />
              </g>
            </svg>
          </button>
          <button type="button" className="btn__icon" disabled>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g
                id="ico_fullscreen-nor"
                transform="translate(-1878 -24)"
                opacity="0.5"
              >
                <rect
                  id="icon"
                  width="16"
                  height="16"
                  transform="translate(1878 24)"
                  fill="none"
                  opacity="0.1"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M31-4558.8v-4.6h1.2v2.55l2.975-2.975.849.849L33.049-4560H35.6v1.2Zm8.175-9.024,2.975-2.975H39.6v-1.2h4.6v4.6H43v-2.551l-2.975,2.975Z"
                  transform="translate(1848.4 4597.4)"
                  fill="#777d87"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M44.2-4558.8v-4.6H43v2.55l-2.975-2.975-.849.849L42.151-4560H39.6v1.2Zm-8.175-9.024-2.975-2.975H35.6v-1.2H31v4.6h1.2v-2.551l2.975,2.975Z"
                  transform="translate(1848.4 4597.4)"
                  fill="#777d87"
                />
              </g>
            </svg>
          </button>
          <button type="button" className="btn__icon btn__icon--active">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              viewBox="0 0 16 16"
            >
              <g
                id="ico_fullscreen-nor"
                transform="translate(-1878 -24)"
                opacity="0.5"
              >
                <rect
                  id="icon"
                  width="16"
                  height="16"
                  transform="translate(1878 24)"
                  fill="none"
                  opacity="0.1"
                />
                <path
                  id="Path_40"
                  data-name="Path 40"
                  d="M31-4558.8v-4.6h1.2v2.55l2.975-2.975.849.849L33.049-4560H35.6v1.2Zm8.175-9.024,2.975-2.975H39.6v-1.2h4.6v4.6H43v-2.551l-2.975,2.975Z"
                  transform="translate(1848.4 4597.4)"
                  fill="#777d87"
                />
                <path
                  id="Path_41"
                  data-name="Path 41"
                  d="M44.2-4558.8v-4.6H43v2.55l-2.975-2.975-.849.849L42.151-4560H39.6v1.2Zm-8.175-9.024-2.975-2.975H35.6v-1.2H31v4.6h1.2v-2.551l2.975,2.975Z"
                  transform="translate(1848.4 4597.4)"
                  fill="#777d87"
                />
              </g>
            </svg>
          </button>
        </li>
      </ul>

      <h2
        style={{
          marginTop: '32px',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #dddddd',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        Input
      </h2>
      <ul style={{ padding: '0 15px' }}>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Basic</p>
          {/* --------------------------------------- BasicInput --------------------------------------- */}
          <CmInput value={inputValue} onChange={setInputValue}></CmInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>
            Use Placeholder 사용
          </p>
          {/* --------------------------------------- BasicInput --------------------------------------- */}
          <CmInput
            value={inputValue}
            onChange={setInputValue}
            placeholder="아이디"
          ></CmInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Error</p>
          {/* --------------------------------------- BasicInput --------------------------------------- */}
          <CmInput
            value={inputValue}
            onChange={setInputValue}
            isError
          ></CmInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Use Reset Button</p>
          {/* --------------------------------------- BasicInput --------------------------------------- */}
          <CmInput
            value={inputValue}
            onChange={setInputValue}
            isReset
          ></CmInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>
            Use password Open Button
          </p>
          {/* --------------------------------------- BasicInput --------------------------------------- */}
          <CmInput
            value={inputValue}
            onChange={setInputValue}
            type="password"
            isSecret
          ></CmInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>
            input &#91;type&#61;&quot;number&quot;&#93;
          </p>
          {/* --------------------------------------- NumberInput --------------------------------------- */}
          <CmNumberInput
            value={numberValue}
            onChange={setNumberValue}
          ></CmNumberInput>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        ></li>
      </ul>

      <h2
        style={{
          marginTop: '32px',
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #dddddd',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        Form (작업중)
      </h2>
      <ul style={{ padding: '0 15px' }}>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Checkbox</p>
          {/* --------------------------------------- Checkbox --------------------------------------- */}
          <CmCheckbox label="Basic"></CmCheckbox>
          <CmCheckbox label="Disabled" disabled></CmCheckbox>
          <CmCheckbox label="Required" required></CmCheckbox>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Switch</p>
          {/* --------------------------------------- Switch --------------------------------------- */}
          <CmSwitch></CmSwitch>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Select</p>
          {/* --------------------------------------- Select --------------------------------------- */}
          <CmSelect value={selectValue} items={selectItems}></CmSelect>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Tooltip</p>
          {/* --------------------------------------- Tooltip --------------------------------------- */}
          <Tooltip title="툴팁입니다.">
            <div>마우스를 올려주세요</div>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}
