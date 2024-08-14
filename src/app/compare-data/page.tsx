'use client'

import React, { useState } from 'react'
import CmIcon from '../components/CmIcon'
import CmLineChart from '../components/CmLineChart' // chart 컴포넌트
import CmStatusLineChart from '../components/CmStatusLineChart' // chart 컴포넌트
import CmMenu from '../components/CmMenu' // menu 컴포넌트
import DataSelect from '../components/pages/data-select'
import SectionSetting from '../components/pages/section-setting'
import '../styles/dashboard.scss' // css 파일

export default function CompareData() {
  interface LineOption {
    data: number[]
  }
  interface StatusLineOption {
    data: number[]
  }
  const [lineOption, setLineOption] = useState<LineOption>({
    data: [0, 4, 0, -2, 6, -5, 1],
  })
  const [emptyLineOption, setEmptyLineOption] = useState<LineOption>({
    data: [],
  })
  const [statusLineOption, setStatusLineOption] = useState<StatusLineOption>({
    data: [80, 82, 70, 70, 60, 78, 77, 68, 70, 80],
  })
  return (
    <div className="dashboard-data">
      <button type="button" className="dashboard-data__btn">
        <CmIcon name="plus__line--658"></CmIcon>
        그래프 추가
      </button>
      <ul>
        <li className="dashboard-box">
          <div className="dashboard-box__header">
            <label className="dashboard-box__title">Sensor Data 그래프</label>
            <div className="dashboard-box__utils">
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_undo-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_51"
                      data-name="Path 51"
                      d="M-2991-7036.4v-1.2h4.25a3.153,3.153,0,0,0,3.148-3.15,3.153,3.153,0,0,0-3.148-3.15h-4.751v2.9l-4.5-3.5,4.5-3.5v2.9h4.751a4.354,4.354,0,0,1,4.35,4.35,4.354,4.354,0,0,1-4.35,4.351Z"
                      transform="translate(4875 7074)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  id="ico_redo-nor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <rect
                    id="icon"
                    width="16"
                    height="16"
                    fill="none"
                    opacity="0.1"
                  />
                  <path
                    id="Path_51"
                    data-name="Path 51"
                    d="M-2987.4-7036.4v-1.2h-4.25a3.153,3.153,0,0,1-3.148-3.15,3.153,3.153,0,0,1,3.148-3.15h4.751v2.9l4.5-3.5-4.5-3.5v2.9h-4.751a4.354,4.354,0,0,0-4.35,4.35,4.354,4.354,0,0,0,4.35,4.351Z"
                    transform="translate(2997.401 7050)"
                    fill="#777d87"
                  />
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_zoom-in-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_50"
                      data-name="Path 50"
                      d="M-2986.321-7037.26A5.975,5.975,0,0,1-2990-7036a6,6,0,0,1-6-6,6,6,0,0,1,6-6,6,6,0,0,1,6,6,5.973,5.973,0,0,1-1.261,3.68l3.29,3.29-1.06,1.062Zm-8.479-4.74a4.8,4.8,0,0,0,4.8,4.8,4.8,4.8,0,0,0,4.8-4.8,4.8,4.8,0,0,0-4.8-4.8A4.8,4.8,0,0,0-2994.8-7042Zm4.2,3v-2.4h-2.4v-1.2h2.4v-2.4h1.2v2.4h2.4v1.2h-2.4v2.4Z"
                      transform="translate(4875 7073)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_capture-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M-2966.4-7034.8v-1.2h3.4v-3.4h1.2v4.6Zm-8.6,0v-4.6h1.2v3.4h3.4v1.2Zm6-4.1v-1.9h-1.9v-1.2h1.9v-1.9h1.2v1.9h1.9v1.2h-1.9v1.9Zm6-4.5v-3.4h-3.4v-1.2h4.6v4.6Zm-12,0v-4.6h4.6v1.2h-3.4v3.4Z"
                      transform="translate(4854.4 7073.4)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <span className="dashboard-box__utils-divide"></span>
              <CmMenu
                className="dashboard__data-select-p"
                contents={<DataSelect></DataSelect>}
                trigger={
                  <span className="btn__line  btn__line--active">
                    데이터 선택
                  </span>
                }
              ></CmMenu>

              <CmMenu
                className="dashboard__section-setting-p"
                contents={<SectionSetting></SectionSetting>}
                trigger={<span className="btn__line">구간 설정</span>}
              ></CmMenu>
              <span className="dashboard-box__utils-divide"></span>
              <button type="button" className="btn__delete">
                삭제
              </button>
            </div>
          </div>
          <div className="dashboard-box__cont">
            <CmLineChart data={emptyLineOption.data}></CmLineChart>
          </div>
        </li>

        <li className="dashboard-box">
          <div className="dashboard-box__header">
            <label className="dashboard-box__title">Sensor Data 그래프</label>
            <div className="dashboard-box__utils">
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_undo-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_51"
                      data-name="Path 51"
                      d="M-2991-7036.4v-1.2h4.25a3.153,3.153,0,0,0,3.148-3.15,3.153,3.153,0,0,0-3.148-3.15h-4.751v2.9l-4.5-3.5,4.5-3.5v2.9h4.751a4.354,4.354,0,0,1,4.35,4.35,4.354,4.354,0,0,1-4.35,4.351Z"
                      transform="translate(4875 7074)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  id="ico_redo-nor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <rect
                    id="icon"
                    width="16"
                    height="16"
                    fill="none"
                    opacity="0.1"
                  />
                  <path
                    id="Path_51"
                    data-name="Path 51"
                    d="M-2987.4-7036.4v-1.2h-4.25a3.153,3.153,0,0,1-3.148-3.15,3.153,3.153,0,0,1,3.148-3.15h4.751v2.9l4.5-3.5-4.5-3.5v2.9h-4.751a4.354,4.354,0,0,0-4.35,4.35,4.354,4.354,0,0,0,4.35,4.351Z"
                    transform="translate(2997.401 7050)"
                    fill="#777d87"
                  />
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_zoom-in-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_50"
                      data-name="Path 50"
                      d="M-2986.321-7037.26A5.975,5.975,0,0,1-2990-7036a6,6,0,0,1-6-6,6,6,0,0,1,6-6,6,6,0,0,1,6,6,5.973,5.973,0,0,1-1.261,3.68l3.29,3.29-1.06,1.062Zm-8.479-4.74a4.8,4.8,0,0,0,4.8,4.8,4.8,4.8,0,0,0,4.8-4.8,4.8,4.8,0,0,0-4.8-4.8A4.8,4.8,0,0,0-2994.8-7042Zm4.2,3v-2.4h-2.4v-1.2h2.4v-2.4h1.2v2.4h2.4v1.2h-2.4v2.4Z"
                      transform="translate(4875 7073)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_capture-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M-2966.4-7034.8v-1.2h3.4v-3.4h1.2v4.6Zm-8.6,0v-4.6h1.2v3.4h3.4v1.2Zm6-4.1v-1.9h-1.9v-1.2h1.9v-1.9h1.2v1.9h1.9v1.2h-1.9v1.9Zm6-4.5v-3.4h-3.4v-1.2h4.6v4.6Zm-12,0v-4.6h4.6v1.2h-3.4v3.4Z"
                      transform="translate(4854.4 7073.4)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <span className="dashboard-box__utils-divide"></span>
              <CmMenu
                className="dashboard__data-select-p"
                contents={<DataSelect></DataSelect>}
                trigger={
                  <span className="btn__line  btn__line--active">
                    데이터 선택
                  </span>
                }
              ></CmMenu>

              <CmMenu
                className="dashboard__section-setting-p"
                contents={<SectionSetting></SectionSetting>}
                trigger={<span className="btn__line">구간 설정</span>}
              ></CmMenu>
              <span className="dashboard-box__utils-divide"></span>
              <button type="button" className="btn__delete">
                삭제
              </button>
            </div>
          </div>
          <div className="dashboard-box__cont">
            <CmLineChart data={lineOption.data}></CmLineChart>
          </div>
        </li>

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
                  <g id="ico_undo-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_51"
                      data-name="Path 51"
                      d="M-2991-7036.4v-1.2h4.25a3.153,3.153,0,0,0,3.148-3.15,3.153,3.153,0,0,0-3.148-3.15h-4.751v2.9l-4.5-3.5,4.5-3.5v2.9h4.751a4.354,4.354,0,0,1,4.35,4.35,4.354,4.354,0,0,1-4.35,4.351Z"
                      transform="translate(4875 7074)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  id="ico_redo-nor"
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <rect
                    id="icon"
                    width="16"
                    height="16"
                    fill="none"
                    opacity="0.1"
                  />
                  <path
                    id="Path_51"
                    data-name="Path 51"
                    d="M-2987.4-7036.4v-1.2h-4.25a3.153,3.153,0,0,1-3.148-3.15,3.153,3.153,0,0,1,3.148-3.15h4.751v2.9l4.5-3.5-4.5-3.5v2.9h-4.751a4.354,4.354,0,0,0-4.35,4.35,4.354,4.354,0,0,0,4.35,4.351Z"
                    transform="translate(2997.401 7050)"
                    fill="#777d87"
                  />
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_zoom-in-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_50"
                      data-name="Path 50"
                      d="M-2986.321-7037.26A5.975,5.975,0,0,1-2990-7036a6,6,0,0,1-6-6,6,6,0,0,1,6-6,6,6,0,0,1,6,6,5.973,5.973,0,0,1-1.261,3.68l3.29,3.29-1.06,1.062Zm-8.479-4.74a4.8,4.8,0,0,0,4.8,4.8,4.8,4.8,0,0,0,4.8-4.8,4.8,4.8,0,0,0-4.8-4.8A4.8,4.8,0,0,0-2994.8-7042Zm4.2,3v-2.4h-2.4v-1.2h2.4v-2.4h1.2v2.4h2.4v1.2h-2.4v2.4Z"
                      transform="translate(4875 7073)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <button type="button" className="btn__icon">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                >
                  <g id="ico_capture-nor" transform="translate(-1878 -24)">
                    <rect
                      id="icon"
                      width="16"
                      height="16"
                      transform="translate(1878 24)"
                      fill="none"
                      opacity="0.1"
                    />
                    <path
                      id="Path_52"
                      data-name="Path 52"
                      d="M-2966.4-7034.8v-1.2h3.4v-3.4h1.2v4.6Zm-8.6,0v-4.6h1.2v3.4h3.4v1.2Zm6-4.1v-1.9h-1.9v-1.2h1.9v-1.9h1.2v1.9h1.9v1.2h-1.9v1.9Zm6-4.5v-3.4h-3.4v-1.2h4.6v4.6Zm-12,0v-4.6h4.6v1.2h-3.4v3.4Z"
                      transform="translate(4854.4 7073.4)"
                      fill="#777d87"
                    />
                  </g>
                </svg>
              </button>
              <span className="dashboard-box__utils-divide"></span>
              <CmMenu
                className="dashboard__data-select-p"
                contents={<DataSelect></DataSelect>}
                trigger={<span className="btn__line">데이터 선택</span>}
              ></CmMenu>
              <CmMenu
                className="dashboard__section-setting-p"
                contents={<SectionSetting></SectionSetting>}
                trigger={
                  <span className="btn__line  btn__line--active">
                    구간 설정
                  </span>
                }
              ></CmMenu>
              <span className="dashboard-box__utils-divide"></span>
              <button type="button" className="btn__delete">
                삭제
              </button>
            </div>
          </div>
          <div className="dashboard-box__cont">
            <CmStatusLineChart data={statusLineOption.data}></CmStatusLineChart>
          </div>
        </li>
      </ul>
    </div>
  )
}
