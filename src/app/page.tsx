import * as React from 'react'

import './common.scss' // css 파일
import CmHeader from './header' // header 컴포넌트

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormControlLabel from '@mui/material/FormControlLabel'
import Checkbox from '@mui/material/Checkbox'
import Switch from '@mui/material/Switch'

// --------------------------------------- Number input (스피너가 있는 인풋 필드) ---------------------------------------
export function CmNumberInput(props: {
  isError?: boolean // 에러일 경우
}) {
  return (
    <div className="cm-input cm-input-number">
      <input type="number" />
      <div className="cm-input-number__btn">
        <button type="button">+</button>
        <button type="button">-</button>
      </div>
    </div>
  )
}

// --------------------------------------- Basic input ---------------------------------------
export function CmBasicInput(props: {
  isReset?: boolean // 초기화 버튼
  isSecret?: boolean // 비밀번호 감추기 버튼
  isError?: boolean // 에러일 경우
  type?: string // input 타입
  placeholder?: string
}) {
  return (
    <div
      className={`cm-input cm-input__btn ${
        props.isError ? 'cm-input--error' : ''
      }`}
    >
      <input
        type={props.type ? props.type : 'text'}
        placeholder={props.placeholder ? props.placeholder : ''}
      />
      {props.isReset ? (
        <button type="button">x</button>
      ) : props.isSecret ? (
        <button type="button">ㅇ</button>
      ) : null}
    </div>
  )
}

// --------------------------------------- Checkbox ---------------------------------------
export function MuSwitch(props: {
  disabled?: boolean
  label?: string
  required?: boolean
}) {
  return (
    <FormControlLabel
      required={props.required}
      disabled={props.disabled}
      control={<Switch />}
      label={props.label}
    />
  )
}

// --------------------------------------- Checkbox ---------------------------------------
export function MuCheckbox(props: {
  disabled?: boolean
  label?: string
  required?: boolean
}) {
  return (
    <FormControlLabel
      required={props.required}
      disabled={props.disabled}
      control={<Checkbox />}
      label={props.label}
    />
  )
}

// --------------------------------------- Select ---------------------------------------
export function MuSelect() {
  return (
    <FormControl>
      <Select value="apple">
        <MenuItem value="apple">apple</MenuItem>
        <MenuItem value="banana">banana</MenuItem>
        <MenuItem value="melon">melon</MenuItem>
      </Select>
    </FormControl>
  )
}

// ====================================== Page ======================================
export default function Home() {
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
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #dddddd',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        Header
      </h2>
      <CmHeader></CmHeader>
      <h2
        style={{
          marginTop: '16px',
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
          <p style={{ width: '210px', color: '#444444' }}>btn__primary--full</p>
          {/* --------------------------------------- Button --------------------------------------- */}
          <button type="button" className="btn__primary--full">
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
      </ul>
      <h2
        style={{
          marginBottom: '16px',
          paddingBottom: '8px',
          borderBottom: '1px solid #dddddd',
          fontWeight: '600',
          fontSize: '18px',
        }}
      >
        Form
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
          <MuCheckbox label="Basic"></MuCheckbox>
          <MuCheckbox label="Disabled" disabled></MuCheckbox>
          <MuCheckbox label="Required" required></MuCheckbox>
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
          <MuSwitch></MuSwitch>
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
          <MuSelect></MuSelect>
        </li>
      </ul>
      <h2
        style={{
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
          <CmBasicInput></CmBasicInput>
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
          <CmBasicInput placeholder="아이디"></CmBasicInput>
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
          <CmBasicInput isError></CmBasicInput>
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
          <CmBasicInput isReset></CmBasicInput>
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
          <CmBasicInput type="password" isSecret></CmBasicInput>
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
          <CmNumberInput></CmNumberInput>
        </li>
      </ul>
    </div>
  )
}
