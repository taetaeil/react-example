'use client'

import React from 'react'
import CmIcon from '../CmIcon'
import CmDateTimePicker from '../CmDateTimePicker'
import Tooltip from '@mui/material/Tooltip'

export default function SectionSetting() {
  return (
    <div className="dashboard__section-setting">
      <div className="section-setting__header">
        그래프 가로축 구간
        <Tooltip
          title="툴팁 메시지를 입력해주세요."
          placement="right"
          className="tooltip"
        >
          <button type="button">
            <CmIcon name="tooltip__circle--7b8" />
          </button>
        </Tooltip>
      </div>
      <CmDateTimePicker view={['year', 'month', 'day']}></CmDateTimePicker>
      <div className="section-setting__footer">
        <button type="button" className="btn__line">
          취소
        </button>
        <button type="button" className="btn__primary">
          적용
        </button>
      </div>
    </div>
  )
}
