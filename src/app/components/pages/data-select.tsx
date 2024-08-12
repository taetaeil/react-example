'use client'

import React from 'react'
import CmTree from '../CmTree' // 트리메뉴

export default function RootLayout() {
  const menuList = [
    {
      id: 'press1',
      label: '단조 프레스 #1',
      useCount: '35',
      useCheckbox: true,
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
            { id: '2 list 1', label: 'list 1' },
            { id: '2 list 2', label: 'list 2' },
          ],
        },
        { id: 'asset8', label: 'Asset #8' },
      ],
    },
  ]

  const dataList = [
    '단조프레스 #1 - Asset #3 - Pump #1 - 전압',
    '단조프레스 #1 - Asset #3 - Pump #1 - Health Innnnnnnnnnnnnnnnnn',
  ]
  return (
    <div className="dashboard__data-select">
      <div className="data-select__sidebar">
        <CmTree useCheckbox menu={menuList}></CmTree>
      </div>
      <div className="data-select__cont">
        <div className="data-select__cont-header">
          <label>선택된 데이터</label>
          <button type="button" className="data-select__btn" disabled>
            전체 해제
          </button>
        </div>
        <div className="data-select__cont-select">
          단조프레스 #1 - Asset #3 - Pump #1 - 가속도
        </div>
        <ul className="data-select__cont-list">
          {dataList.map((data) => (
            <li key={data}>
              <span>{data}</span>
              <button type="button" className="data-select__btn">
                선택해제
              </button>
            </li>
          ))}
        </ul>
        <div className="data-select__cont-btn">
          <button type="button" className="btn__line">
            취소
          </button>
          <button type="button" className="btn__primary">
            적용
          </button>
        </div>
      </div>
    </div>
  )
}
