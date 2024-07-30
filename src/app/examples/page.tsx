import * as React from 'react'

import '../styles/common.scss' // css 파일
import CmHeader from '../components/CmHeader' // header 컴포넌트
import CmTab from '../Tap' // tab 컴포넌트
import CmInput from '../components/CmInput' // input 컴포넌트
import CmNumberInput from '../components/CmNumberInput' // input 컴포넌트
import CmCheckbox from '../components/CmCheckbox' // checkbox 컴포넌트
import CmSwitch from '../components/CmSwitch' // Switch 컴포넌트
import CmSelect from '../components/CmSelect' // Select 컴포넌트

import Tooltip from '@mui/material/Tooltip'

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
          {/* <CmAccordion></CmAccordion> */}
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
          <Tooltip title="툴팁입니다.">
            <div>마우스를 올려주세요</div>
          </Tooltip>
        </li>
      </ul>
    </div>
  )
}
