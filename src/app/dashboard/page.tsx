'use client'

import React, { useState } from 'react'
import '../styles/dashboard.scss' // css 파일
import CmSelect from '../components/CmSelect' // Select 컴포넌트
import { SelectChangeEvent } from '@mui/material/Select'
import CmTable from '../components/CmTable' // Select 컴포넌트
import CmBarChart from '../components/CmBarChart' // BarChart 컴포넌트

export default function Main() {
  const [depth1Value, setDepth1Value] = useState('press1')
  const depth1Items = [
    { value: 'press1', label: '단조 프레스 #1' },
    { value: 'press2', label: '단조 프레스 #2' },
  ]
  const depth1ValueChange = (event: SelectChangeEvent<string>) => {
    setDepth1Value(event.target.value as string)
  }

  const [depth2Value, setDepth2Value] = useState('')
  const depth2Items = [
    { value: 'default', label: '선택안함' },
    { value: 'asset1', label: 'Asset #1' },
    { value: 'asset2', label: 'Asset #2' },
    { value: 'asset3', label: 'Asset #3' },
    { value: 'asset4', label: 'Asset #4' },
    { value: 'asset5', label: 'Asset #5' },
    { value: 'asset6', label: 'Asset #6' },
  ]
  const depth2ValueChange = (event: SelectChangeEvent<string>) => {
    setDepth2Value(event.target.value as string)
  }

  const [depth3Value, setDepth3Value] = useState('')
  const depth3Items = [
    { value: 'default', label: '선택안함' },
    { value: 'motor1', label: 'Motor #1' },
    { value: 'motor2', label: 'Motor #2' },
    { value: 'motor3', label: 'Motor #3' },
    { value: 'motor4', label: 'Motor #4' },
    { value: 'motor5', label: 'Motor #5' },
    { value: 'pump1', label: 'Pump #1' },
    { value: 'pump2', label: 'Pump #2' },
    { value: 'pump3', label: 'Pump #3' },
    { value: 'pump4', label: 'Pump #4' },
    { value: 'pump5', label: 'Pump #5' },
  ]
  const depth3ValueChange = (event: SelectChangeEvent<string>) => {
    setDepth3Value(event.target.value as string)
  }

  const [alramValue, setAlramValue] = useState('all')
  const alramItems = [
    { value: 'all', label: '전체' },
    { value: 'error', label: '고장' },
    { value: 'warning', label: '주의' },
  ]
  const alramValueChange = (event: SelectChangeEvent<string>) => {
    setAlramValue(event.target.value as string)
  }
  // 알람 테이블
  const rows = [
    {
      status: 'error',
      id: 'AS1-MO-0101',
      type: '모터',
      hiValue: 21,
      issueTime: '2024-06-25 20:00:00',
    },
    {
      status: 'error',
      id: 'AS4-PU-0201',
      type: '펌프',
      hiValue: 17,
      issueTime: '2024-06-22 16:25:00',
    },
    {
      status: 'warning',
      id: 'AS1-MO-0102',
      type: '모터',
      hiValue: 48,
      issueTime: '2024-06-25 14:20:00',
    },
    {
      status: 'warning',
      id: 'AS1-PU-0205',
      type: '펌프',
      hiValue: 53,
      issueTime: '2024-06-24 00:00:00',
    },
    {
      status: 'warning',
      id: 'AS2-PU-0212',
      type: '펌프',
      hiValue: 59,
      issueTime: '2024-06-23 00:00:00',
    },
  ]
  // bar 차트
  interface BarStackOption {
    title: string
    data: number[][]
  }

  const [barStackOption, setBarStackOption] = useState<BarStackOption>({
    title: 'Asset #1',
    data: [
      [6], // error
      [12], // warning
      [82], // success
    ],
  })
  return (
    <ul className="dashboard dashboard-main">
      {/* 전체 상태 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">전체 상태</label>
        </div>
        <div className="dashboard-box__cont">
          <ul className="dashboard-box__cont-total">
            <li className="total-card--error">
              <label>고장</label>
              <span>2</span>
            </li>
            <li className="total-card--warning">
              <label>주의</label>
              <span>3</span>
            </li>
            <li className="total-card--normal">
              <label>정상</label>
              <span>35</span>
            </li>
          </ul>
        </div>
      </li>
      {/* Asset 상태 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">Asset 상태</label>
        </div>
        <div className="dashboard-box__cont">
          <label className="dashboard-box__subtitle">단조 프레스 #1</label>
          <ul className="dashboard-box__cont-asset">
            <li className="asset-box">
              <CmBarChart
                title="Asset #1"
                data={[[6], [12], [82]]}
                totalCount={16}
              ></CmBarChart>
            </li>
            <li className="asset-box">
              <CmBarChart
                title="Asset #2"
                data={[[0], [25], [75]]}
                totalCount={4}
              ></CmBarChart>
            </li>
            <li className="asset-box">
              <CmBarChart
                title="Asset #3"
                data={[[0], [0], [100]]}
                totalCount={3}
              ></CmBarChart>
            </li>
          </ul>
        </div>
      </li>
      {/* 품목 상태 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">품목 상태</label>
        </div>
        <div className="dashboard-box__cont">
          <ul className="dashboard-box__cont-item">
            <li className="item-card--error">
              <label className="item-card__type">고장</label>
              <span className="item-card__status">17</span>
              <span className="item-card__model">AS1-MO-010101</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
            <li className="item-card--error">
              <label className="item-card__type">고장</label>
              <span className="item-card__status">21</span>
              <span className="item-card__model">AS4-PU-0201</span>
              <span className="item-card__info">
                <span>Asset #4</span>
                <span>펌프</span>
              </span>
            </li>
            <li className="item-card--warning">
              <label className="item-card__type">주의</label>
              <span className="item-card__status">48</span>
              <span className="item-card__model">AS1-MO-010200000000</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
            <li className="item-card--warning">
              <label className="item-card__type">주의</label>
              <span className="item-card__status">48</span>
              <span className="item-card__model">AS1-MO-010200000000</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
            <li className="item-card--normal">
              <label className="item-card__type">정상</label>
              <span className="item-card__status">60</span>
              <span className="item-card__model">AS1-MO-010300000000</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
            <li className="item-card--break-warning">
              <label className="item-card__type">주의</label>
              <span className="item-card__status">59</span>
              <span className="item-card__model">AS2-PU-0212000000</span>
              <span className="item-card__info">
                <span>Asset #2</span>
                <span>펌프</span>
              </span>
            </li>
            <li className="item-card--break-normal">
              <label className="item-card__type">정상</label>
              <span className="item-card__status">60</span>
              <span className="item-card__model">AS1-MO-010300000</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
            <li className="item-card--break-error">
              <label className="item-card__type">고장</label>
              <span className="item-card__status">34</span>
              <span className="item-card__model">AS1-MO-010300000</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
            <li className="item-card--break-error">
              <label className="item-card__type">고장</label>
              <span className="item-card__status">34</span>
              <span className="item-card__model">AS1-MO-010300000</span>
              <span className="item-card__info">
                <span>Asset #1</span>
                <span>모터</span>
              </span>
            </li>
          </ul>
        </div>
      </li>
      {/*3D 뷰어  */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">3D 뷰어</label>
          <div className="dashboard-box__utils">
            <CmSelect
              value={depth1Value}
              items={depth1Items}
              width="130px"
              size="sm"
              onChange={depth1ValueChange}
            ></CmSelect>
            <CmSelect
              value={depth2Value}
              items={depth2Items}
              placeholder="Asset 선택"
              width="130px"
              size="sm"
              onChange={depth2ValueChange}
            ></CmSelect>
            <CmSelect
              value={depth3Value}
              items={depth3Items}
              placeholder="품목 선택"
              width="130px"
              size="sm"
              onChange={depth3ValueChange}
            ></CmSelect>
          </div>
        </div>
        <div className="dashboard-box__cont">
          <div className="dashboard-box__cont--viewer">
            <img
              src="/icons/sample-pump.png"
              alt="이미지"
              width="auto"
              height="auto"
            />
          </div>
        </div>
      </li>
      {/* 알람 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <div>
            <label className="dashboard-box__title">알람</label>
            <span className="dashboard-box__title--badage">5</span>
          </div>
          <div className="dashboard-box__utils">
            <CmSelect
              value={alramValue}
              items={alramItems}
              width="60px"
              size="sm"
              onChange={alramValueChange}
            ></CmSelect>
          </div>
        </div>
        <div className="dashboard-box__cont">
          <CmTable
            headers={
              <tr>
                <th>품목 ID</th>
                <th>품목 종류</th>
                <th>HI값</th>
                <th>발행일시</th>
              </tr>
            }
            colwidths={['40%', '15%', '15%', '30%']}
            rows={rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <span
                    className={`${
                      row.status === 'error'
                        ? 'cm-table__dot--error'
                        : row.status === 'warning'
                        ? 'cm-table__dot--warning'
                        : 'cm-table__dot--normal'
                    }`}
                  ></span>
                  {row.id}
                </td>
                <td>
                  <span className="cm-table__chip">{row.type}</span>
                </td>
                <td>{row.hiValue}</td>
                <td className="cm-table--gray">{row.issueTime}</td>
              </tr>
            ))}
          />
        </div>
      </li>
    </ul>
  )
}
