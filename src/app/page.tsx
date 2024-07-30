import * as React from 'react'

import './styles/common.scss' // css 파일

// ====================================== Page ======================================
export default function Home() {
  const pageList = [
    {
      title: '예제',
      status: '작업 중',
      url: '/examples',
    },
    {
      title: '로그인',
      status: '작업 중',
      url: '/login',
    },
    {
      title: '메인',
      status: '작업 예정',
      url: '/main',
    },
  ]
  return (
    <div
      style={{
        padding: '20px',
        display: 'flex',
        flexFlow: 'column',
        alignItems: 'center',
      }}
    >
      <h1
        style={{
          fontSize: '28px',
          fontWeight: '600',
          marginBottom: '50px',
          marginTop: '72px',
        }}
      >
        K-PHM Cloud 퍼블리싱
      </h1>
      <table style={{ width: '60%' }}>
        <thead>
          <tr
            style={{
              background: '#E9EDF5',
              color: '#7B828C',
              fontSize: '16px',
            }}
          >
            <th style={{ padding: '10px 0', fontWeight: '500' }}>페이지</th>
            <th style={{ padding: '10px 0', fontWeight: '500' }}>진행현황</th>
            <th style={{ padding: '10px 0', fontWeight: '500' }}>확인 URL</th>
          </tr>
        </thead>
        <tbody>
          {pageList.map((page, index) => (
            <tr
              key={index}
              style={{ fontSize: '16px', borderBottom: '1px solid #E1E3E5' }}
            >
              <td style={{ textAlign: 'center', padding: '10px 0' }}>
                {page.title}
              </td>
              <td style={{ textAlign: 'center', padding: '10px 0' }}>
                {page.status}
              </td>
              <td style={{ textAlign: 'center', padding: '10px 0' }}>
                <a
                  href={page.url}
                  style={{ color: '#2668C9', textDecoration: 'underline' }}
                >
                  {page.url}
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}
