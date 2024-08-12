'use client'

import React from 'react'
import CmIcon from '../components/CmIcon'

export default function RootLayout() {
  const routeList = [
    '단조프레스 #1',
    'Asset #3',
    'Pump#1',
    'Sensor Data 그래프 - 가속도',
  ]
  return (
    <ul className="dashboard-detail__header">
      {routeList.map((route, index) => (
        <li key={index}>
          <span>{route}</span>
          <CmIcon name="arror-r__line--777" width="12"></CmIcon>
        </li>
      ))}
    </ul>
  )
}
