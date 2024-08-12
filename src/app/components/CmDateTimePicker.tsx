'use client'

import React, { useState } from 'react'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import dayjs, { Dayjs } from 'dayjs'
import 'dayjs/locale/ko' // 한국어 로케일을 임포트

dayjs.locale('ko') // 한국어 로케일 설정

// Custom Toolbar Component
interface CustomToolbarProps {
  date: Dayjs
  setDate: React.Dispatch<React.SetStateAction<Dayjs | null>>
}

function CustomToolbar({ date, setDate }: CustomToolbarProps) {
  const handleYearChange = (direction: number) => {
    const newDate = date.add(direction, 'year')
    setDate(newDate)
  }

  return (
    <div>
      <button
        type="button"
        className="cm-datapicker__btn"
        onClick={() => handleYearChange(-1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g id="ico_year-before" transform="translate(-786 -278)">
            <rect
              id="Rectangle_170"
              data-name="Rectangle 170"
              width="16"
              height="16"
              transform="translate(786 278)"
              fill="none"
              opacity="0.1"
            />
            <path
              id="Path_61"
              data-name="Path 61"
              d="M-4036-4135.542l.46-.459,4-4,.919.92-3.54,3.54,3.54,3.541-.919.918Zm-4,0,.46-.459,4-4,.918.92-3.54,3.54,3.54,3.541-.918.918Z"
              transform="translate(4829.08 4421.541)"
              fill="#6580a8"
            />
          </g>
        </svg>
      </button>
      <button
        type="button"
        className="cm-datapicker__btn"
        onClick={() => handleYearChange(1)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
        >
          <g id="ico_year-next" transform="translate(-958 -278)">
            <rect
              id="Rectangle_172"
              data-name="Rectangle 172"
              width="16"
              height="16"
              transform="translate(958 278)"
              fill="none"
              opacity="0.1"
            />
            <path
              id="Path_62"
              data-name="Path 62"
              d="M-4036-4132l3.54-3.541-3.54-3.54.92-.92,4.459,4.459-.46.46-4,4Zm-4,0,3.54-3.541-3.54-3.54.919-.92,4.459,4.459-.459.46-4,4Z"
              transform="translate(5001.541 4421.541)"
              fill="#6580a8"
            />
          </g>
        </svg>
      </button>
    </div>
  )
}

interface RootLayoutProps {
  view: Array<any>
  placeholder?: string // placeholder를 선택적 prop으로 추가
}

export default function RootLayout({ view, placeholder }: RootLayoutProps) {
  const [selectedDate, setSelectedDate] = useState<Dayjs | null>(
    dayjs().add(1, 'day')
  )

  const handleDateChange = (date: Dayjs | null) => {
    if (date) {
      setSelectedDate(date)
    }
  }

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <div className="cm-datapicker">
        <DateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          views={view}
          slotProps={{
            textField: {
              placeholder: placeholder || '날짜 및 시간을 선택하세요',
            },
            actionBar: {
              actions: ['cancel', 'accept'],
            },
          }}
          slots={{
            toolbar: (props) => (
              <CustomToolbar
                date={selectedDate as Dayjs}
                setDate={setSelectedDate}
                {...props}
              />
            ),
          }}
        />
        <span>&sim;</span>
        <DateTimePicker
          value={selectedDate}
          onChange={handleDateChange}
          views={view}
          slotProps={{
            textField: {
              placeholder: placeholder || '날짜 및 시간을 선택하세요',
            },
            actionBar: {
              actions: ['cancel', 'accept'],
            },
          }}
          slots={{
            toolbar: (props) => (
              <CustomToolbar
                date={selectedDate as Dayjs}
                setDate={setSelectedDate}
                {...props}
              />
            ),
          }}
        />
      </div>
    </LocalizationProvider>
  )
}
