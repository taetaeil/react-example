import * as React from 'react'

import '../styles/common.scss' // css 파일
import CmHeader from '../components/CmHeader' // header 컴포넌트
import CmTab from '../Tap' // tab 컴포넌트
import CmInput from '../components/CmInput' // input 컴포넌트
import CmNumberInput from '../components/CmNumberInput' // input 컴포넌트
import CmCheckbox from '../components/CmCheckbox' // checkbox 컴포넌트

import MenuItem from '@mui/material/MenuItem'
import FormControl from '@mui/material/FormControl'
import Select from '@mui/material/Select'
import FormControlLabel from '@mui/material/FormControlLabel'
import Switch from '@mui/material/Switch'
import Tooltip from '@mui/material/Tooltip'

// --------------------------------------- Switch ---------------------------------------
export function CmSwitch(props: {
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

// --------------------------------------- Select ---------------------------------------
export function CmSelect() {
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

// --------------------------------------- Accordion ---------------------------------------
export function CmAccordion() {
  return <div>아코디언</div>
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
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          gap: '8px',
          marginBottom: '12px',
        }}
      >
        {/* --------------------------------------- Header --------------------------------------- */}
        <CmHeader></CmHeader>
      </div>
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
          <CmInput></CmInput>
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
          <CmInput placeholder="아이디"></CmInput>
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
          <CmInput isError></CmInput>
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
          <CmInput isReset></CmInput>
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
          <CmInput type="password" isSecret></CmInput>
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
          <CmSelect></CmSelect>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Accordion</p>
          {/* --------------------------------------- Accordion --------------------------------------- */}
          <CmAccordion></CmAccordion>
        </li>
        <li
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            marginBottom: '12px',
          }}
        >
          <p style={{ width: '210px', color: '#444444' }}>Tab</p>
          {/* --------------------------------------- Tab --------------------------------------- */}
          <CmTab></CmTab>
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
          <Tooltip title="힝 속았지?">
            <div>나는야 버튼!</div>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}
