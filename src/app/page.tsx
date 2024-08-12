import * as React from 'react'

import './styles/common.scss' // css 파일

// ====================================== Page ======================================
export default function Home() {
  const pageList = [
    {
      title: '공통 컴포넌트',
      status: '작업 완료',
      url: '/examples',
    },
    {
      title: '로그인',
      status: '작업 완료',
      url: '/login',
    },
    {
      title: '메인 / 파일업로드',
      status: '작업 완료',
      url: '/file-upload',
    },
    {
      title: '메인 / 대시보드',
      status: '작업 완료',
      url: '/dashboard',
    },
    {
      title: '메인 / 상세',
      status: '작업 완료',
      url: '/detail',
    },
    {
      title: '메인 / 상세_데이터 시각화',
      status: '작업 완료',
      url: '/visualization',
    },
    {
      title: '메인 / 대시보드 / 설정팝업(헤더에 설정버튼 클릭)',
      status: '작업 완료',
      url: '/dashboard',
    },
    {
      title: '메인 / 데이터 비교',
      status: '작업 완료',
      url: '/compare-data',
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
