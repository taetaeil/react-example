import * as React from 'react'

import './styles/common.scss' // css 파일

// ====================================== Page ======================================
export default function Home() {
  return (
    <div style={{ padding: '20px' }}>
      <ul>
        <li>
          <a href="/examples">예제 페이지 (작업 중) </a>
        </li>
        <li>
          <a href="/login">로그인 페이지 (작업 중) </a>
        </li>
        <li>
          <a href="/main">메인 페이지 (작업 예정) </a>
        </li>
      </ul>
    </div>
  )
}
