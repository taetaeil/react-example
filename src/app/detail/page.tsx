'use client'

import React, { useState } from 'react'
// import '../styles/dashboard.scss' // css 파일
import CmTable from '../components/CmTable' // Table 컴포넌트
import CmLineChart from '../components/CmLineChart' // chart 컴포넌트
import CmStatusLineChart from '../components/CmStatusLineChart' // chart 컴포넌트
import CmGaugeChart from '../components/CmGaugeChart' // chart 컴포넌트
import { SelectChangeEvent } from '@mui/material/Select'
import CmSelect from '../components/CmSelect' // Select 컴포넌트

export default function Detail() {
  interface LineOption {
    data: number[]
  }
  interface StatusLineOption {
    data: number[]
  }
  const [lineOption, setLineOption] = useState<LineOption>({
    data: [0, 4, 0, -2, 6, -5, 1],
  })
  const [statusLineOption, setStatusLineOption] = useState<StatusLineOption>({
    data: [80, 82, 70, 70, 60, 78, 77, 68, 70, 80],
  })
  // 알람 테이블
  const rows = [
    {
      status: '고장',
      model: 'Model-PU-1401',
      issueTime: '2024-06-25 20:00:00',
    },
    {
      status: '고장',
      model: 'Model-PU-1401',
      issueTime: '2024-06-18 00:00:00',
    },
    {
      status: '주의',
      model: 'Model-PU-1401',
      issueTime: '2023-12-17 14:20:00',
    },
    {
      status: '주의',
      model: 'Model-PU-1401',
      issueTime: '2023-11-24 00:20:00',
    },
    {
      status: '주의',
      model: 'Ko-pu-3401',
      issueTime: '2023-08-12 00:00:00',
    },
    {
      status: '고장',
      model: 'Ko-pu-3401',
      issueTime: '2023-07-01 00:00:00',
    },
    {
      status: '주의',
      model: 'Ko-pu-3401',
      issueTime: '2023-02-26 00:00:00',
    },
  ]

  // Sensor Data 그래프
  const [sensorDataValue, setSensorDataValue] = useState('acceleration')
  const sensorDataItems = [
    { value: 'acceleration', label: '가속도' },
    { value: 'voltage', label: '전압' },
    { value: 'hi', label: 'HI' },
  ]
  const sensorDataValueChange = (event: SelectChangeEvent<string>) => {
    setSensorDataValue(event.target.value as string)
  }
  return (
    <ul className="dashboard dashboard-detail">
      {/* 부품 이미지 */}
      <li className="dashboard-box">
        <div className="dashboard-box__cont">
          <div className="dashboard-box__cont-parts">
            <div className="parts">
              <span className="parts__title">AS3-PU-021700000000000</span>
              <span className="parts__type">펌프</span>
            </div>
            <img
              src="/icons/sample-pump.png"
              alt="이미지"
              width="260px"
              height="auto"
            />
          </div>
        </div>
      </li>

      {/* 현재상태 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">현재 상태</label>
        </div>
        <div className="dashboard-box__cont">
          <CmGaugeChart title="현재 상태" value={14}></CmGaugeChart>
        </div>
      </li>

      {/* 주의/고장 이력 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">주의/고장 이력</label>
        </div>
        <div className="dashboard-box__cont">
          <CmTable
            headers={
              <tr>
                <th>상태</th>
                <th>모델명</th>
                <th>발생일시</th>
              </tr>
            }
            colwidths={['60px', '*', '160px']}
            rows={rows.map((row, index) => (
              <tr key={index}>
                <td>
                  <span
                    className={`${
                      row.status === '고장'
                        ? 'cm-table__chip--error'
                        : row.status === '주의'
                        ? 'cm-table__chip--warning'
                        : 'cm-table__chip--normal'
                    }`}
                  >
                    {row.status}
                  </span>
                </td>
                <td>{row.model}</td>
                <td className="cm-table--gray">{row.issueTime}</td>
              </tr>
            ))}
          />
        </div>
      </li>

      {/* Sensor Data 그래프 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <div>
            <label className="dashboard-box__title">Sensor Data 그래프</label>
            <CmSelect
              value={sensorDataValue}
              items={sensorDataItems}
              width="100px"
              size="sm"
              onChange={sensorDataValueChange}
            ></CmSelect>
          </div>
          <div className="dashboard-box__utils">
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
          </div>
        </div>
        <div className="dashboard-box__cont">
          <CmLineChart data={lineOption.data}></CmLineChart>
        </div>
      </li>

      {/* Helth Index 그래프 */}
      <li className="dashboard-box">
        <div className="dashboard-box__header">
          <label className="dashboard-box__title">Helth Index 그래프</label>
          <div className="dashboard-box__utils">
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
          </div>
        </div>
        <div className="dashboard-box__cont">
          <CmStatusLineChart data={statusLineOption.data}></CmStatusLineChart>
        </div>
      </li>
    </ul>
  )
}
