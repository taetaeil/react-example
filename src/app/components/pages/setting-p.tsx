import CmPopup from '../CmPopup'
import React, { useState, ReactNode } from 'react'
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
import '../../styles/tab.scss' // css 파일
import CmInput from '../../components/CmInput' // input 컴포넌트
import Tooltip from '@mui/material/Tooltip'
import CmIcon from '../CmIcon'
import CmSelect from '../CmSelect' // Select 컴포넌트
import CmTable from '../CmTable' // Table 컴포넌트
import CmNumberInput from '../CmNumberInput' // input 컴포넌트
import CmSwitch from '../CmSwitch' // Switch 컴포넌트
import CmDateTimePicker from '../CmDateTimePicker'
import CmCheckbox from '../CmCheckbox' // checkbox 컴포넌트

interface TabPanelProps {
  children?: React.ReactNode
  index: number
  value: number
}

function TabVerPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    // tab contents
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="cm-tab-ver__cont"
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}
function TabHorPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props

  return (
    // tab contents
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`vertical-tabpanel-${index}`}
      aria-labelledby={`vertical-tab-${index}`}
      {...other}
      className="cm-tab-hor__cont"
    >
      {value === index && <div>{children}</div>}
    </div>
  )
}

function a11yVerProps(index: number) {
  return {
    id: `vertical-tab-${index}`,
    'aria-controls': `vertical-tabpanel-${index}`,
  }
}

export default function MuModal(props: { trigger: ReactNode }) {
  // tab (verical)
  const [verValue, setVerValue] = React.useState(0)

  const handleVerChange = (event: React.SyntheticEvent, newValue: number) => {
    setVerValue(newValue)
  }
  // tab(horizontal)
  const [horValue, setHorValue] = React.useState(0)

  const handleHorChange = (event: React.SyntheticEvent, newValue: number) => {
    setHorValue(newValue)
  }
  // input
  const [inputValue, setInputValue] = useState('')
  // select
  const selectValue = 'press1'
  const selectItems = [
    { value: 'press1', label: '단조프레스 #1' },
    { value: 'press2', label: '단조프레스 #2' },
  ]
  // 임계값 설정 테이블
  const rows = [
    {
      asset: 'Asset #1',
      model: 'Motor #1',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Motor #2',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Motor #3',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Motor #4',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Motor #5',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Pump #1',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Pump #2',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Pump #3',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Pump #4',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Pump #5',
      minimum: '60',
      maximum: '60',
    },
    {
      asset: 'Asset #1',
      model: 'Pump #6',
      minimum: '60',
      maximum: '60',
    },
  ]
  const historyList = [
    {
      dot: true,
      item: 'Asset #1 - Motor #1',
      action: '60',
      total: '60',
      date: '2024-06-27 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #5 - Pump #2',
      action: '58',
      total: '60',
      date: '2024-06-19 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #5 - Pump #1',
      action: '59',
      total: '60',
      date: '2024-06-06 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #2 - Motor #1',
      action: '62',
      total: '80',
      date: '2024-05-30 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #2 - Pump #2',
      action: '58',
      total: '60',
      date: '2024-05-28 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #2 - Pump #1',
      action: '57',
      total: '60',
      date: '2024-05-28 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #3 - Pump #2',
      action: '61',
      total: '80',
      date: '2024-05-07 00:00:00',
      name: '김코난',
    },
    {
      dot: false,
      item: 'Asset #4 - Motor #1',
      action: '48',
      total: '60',
      date: '2024-04-28 00:00:00',
      name: '김코난',
    },
  ]
  const [numberValue, setNumberValue] = useState(0)
  // 구간설정 세부 체크박스 상태
  const [checkboxStates, setCheckboxStates] = useState({
    vibration: false,
    acceleration: false,
    voltage: false,
    flow: false,
    healthIndex: false,
  })

  // 체크박스 상태 업데이트 함수
  const handleCheckboxChange = (name: string) => (checked: boolean) => {
    setCheckboxStates({
      ...checkboxStates,
      [name]: checked,
    })
  }

  return (
    <CmPopup
      title="설정"
      trigger={props.trigger}
      contents={
        <div className="cm-tab-ver">
          <Tabs
            orientation="vertical"
            variant="scrollable"
            value={verValue}
            onChange={handleVerChange}
            aria-label="Vertical tabs example"
          >
            <Tab label="페이지 설정" {...a11yVerProps(0)} />
            <Tab label="임계값 설정" {...a11yVerProps(1)} />
            <Tab label="구간 설정" {...a11yVerProps(2)} />
          </Tabs>

          {/* 페이지 설정 */}
          <TabVerPanel value={verValue} index={0}>
            <div className="page-setting">
              <div className="form">
                <label className="form__label">
                  자동 새로고침
                  <Tooltip
                    title="최소 1초(1s)부터 최대 2일(2d)까지 초(s), 분(m), 시간(h), 일(d) 단위의 업데이트 주기를 설정할 수 있습니다."
                    placement="right"
                    className="tooltip"
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: 'offset',
                            options: {
                              offset: [30, 0],
                            },
                          },
                        ],
                      },
                    }}
                  >
                    <button type="button">
                      <CmIcon name="tooltip__circle--7b8" />
                    </button>
                  </Tooltip>
                </label>
                <CmInput value={inputValue} onChange={setInputValue}></CmInput>
              </div>
            </div>
          </TabVerPanel>

          {/* 임계값 설정 */}
          <TabVerPanel value={verValue} index={1}>
            <div className="limitValue-setting">
              <div className="form">
                <label className="form__label">
                  단조 프레스 선택
                  <Tooltip
                    title="단조 프레스 선택에 대한 툴팁 내용을 입력해주세요"
                    placement="right"
                    className="tooltip"
                    slotProps={{
                      popper: {
                        modifiers: [
                          {
                            name: 'offset',
                            options: {
                              offset: [30, 0],
                            },
                          },
                        ],
                      },
                    }}
                  >
                    <button type="button">
                      <CmIcon name="tooltip__circle--7b8" />
                    </button>
                  </Tooltip>
                </label>
                <CmSelect
                  value={selectValue}
                  items={selectItems}
                  width="210px"
                ></CmSelect>
              </div>
              <div className="limitValue-setting__cont">
                <CmTable
                  colwidths={['20%', '20%', '30%', '30%']}
                  headers={
                    <tr>
                      <th className="text-left">에셋</th>
                      <th className="text-left">품목</th>
                      <th>
                        <div className="cm-table__header-utils">
                          <div className="cm-table__header-utils--label">
                            <label>하한선 임계값</label>
                            <div className="cm-table__header-utils--label-switch">
                              <CmSwitch></CmSwitch>
                              <span>&#40;일괄변경&#41;</span>
                            </div>
                          </div>
                          <button type="button">
                            <svg
                              id="ico_reset"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <rect
                                id="icon"
                                width="20"
                                height="20"
                                fill="none"
                                opacity="0.1"
                              />
                              <path
                                id="Path_35"
                                data-name="Path 35"
                                d="M3.642-2750.828l.873-.873a3.794,3.794,0,0,0,1.885.5,3.8,3.8,0,0,0,3.8-3.8H8.8l2-3,2,3H11.4a5.006,5.006,0,0,1-5,5A4.981,4.981,0,0,1,3.642-2750.828ZM0-2755H4l-2,3Zm2.6,0H1.4a5.006,5.006,0,0,1,5-5,4.976,4.976,0,0,1,2.757.829l-.872.872a3.792,3.792,0,0,0-1.885-.5,3.805,3.805,0,0,0-3.8,3.8h0Z"
                                transform="translate(3.6 2765)"
                                fill="#9ea6b8"
                              />
                            </svg>
                          </button>
                        </div>
                      </th>
                      <th>
                        <div className="cm-table__header-utils">
                          <div className="cm-table__header-utils--label">
                            <label>상한선 임계값</label>
                            <div className="cm-table__header-utils--label-switch">
                              <CmSwitch></CmSwitch>
                              <span>&#40;일괄변경&#41;</span>
                            </div>
                          </div>
                          <button type="button">
                            <svg
                              id="ico_reset"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <rect
                                id="icon"
                                width="20"
                                height="20"
                                fill="none"
                                opacity="0.1"
                              />
                              <path
                                id="Path_35"
                                data-name="Path 35"
                                d="M3.642-2750.828l.873-.873a3.794,3.794,0,0,0,1.885.5,3.8,3.8,0,0,0,3.8-3.8H8.8l2-3,2,3H11.4a5.006,5.006,0,0,1-5,5A4.981,4.981,0,0,1,3.642-2750.828ZM0-2755H4l-2,3Zm2.6,0H1.4a5.006,5.006,0,0,1,5-5,4.976,4.976,0,0,1,2.757.829l-.872.872a3.792,3.792,0,0,0-1.885-.5,3.805,3.805,0,0,0-3.8,3.8h0Z"
                                transform="translate(3.6 2765)"
                                fill="#9ea6b8"
                              />
                            </svg>
                          </button>
                        </div>
                      </th>
                    </tr>
                  }
                  rows={rows.map((row, index) => (
                    <tr key={index}>
                      <td>{row.asset}</td>
                      <td>{row.model}</td>
                      <td>
                        <div className="cm-table__body-btn">
                          <CmNumberInput
                            value={numberValue}
                            onChange={setNumberValue}
                          ></CmNumberInput>
                          <button type="button">
                            <svg
                              id="ico_reset"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <rect
                                id="icon"
                                width="20"
                                height="20"
                                fill="none"
                                opacity="0.1"
                              />
                              <path
                                id="Path_35"
                                data-name="Path 35"
                                d="M3.642-2750.828l.873-.873a3.794,3.794,0,0,0,1.885.5,3.8,3.8,0,0,0,3.8-3.8H8.8l2-3,2,3H11.4a5.006,5.006,0,0,1-5,5A4.981,4.981,0,0,1,3.642-2750.828ZM0-2755H4l-2,3Zm2.6,0H1.4a5.006,5.006,0,0,1,5-5,4.976,4.976,0,0,1,2.757.829l-.872.872a3.792,3.792,0,0,0-1.885-.5,3.805,3.805,0,0,0-3.8,3.8h0Z"
                                transform="translate(3.6 2765)"
                                fill="#9ea6b8"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                      <td>
                        <div className="cm-table__body-btn">
                          <CmNumberInput
                            value={numberValue}
                            onChange={setNumberValue}
                          ></CmNumberInput>
                          <button type="button">
                            <svg
                              id="ico_reset"
                              xmlns="http://www.w3.org/2000/svg"
                              width="20"
                              height="20"
                              viewBox="0 0 20 20"
                            >
                              <rect
                                id="icon"
                                width="20"
                                height="20"
                                fill="none"
                                opacity="0.1"
                              />
                              <path
                                id="Path_35"
                                data-name="Path 35"
                                d="M3.642-2750.828l.873-.873a3.794,3.794,0,0,0,1.885.5,3.8,3.8,0,0,0,3.8-3.8H8.8l2-3,2,3H11.4a5.006,5.006,0,0,1-5,5A4.981,4.981,0,0,1,3.642-2750.828ZM0-2755H4l-2,3Zm2.6,0H1.4a5.006,5.006,0,0,1,5-5,4.976,4.976,0,0,1,2.757.829l-.872.872a3.792,3.792,0,0,0-1.885-.5,3.805,3.805,0,0,0-3.8,3.8h0Z"
                                transform="translate(3.6 2765)"
                                fill="#9ea6b8"
                              />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                />
                <div className="limitValue-setting__cont--history">
                  <label className="history__title">히스토리</label>
                  <ul>
                    {historyList.map((history, index) => (
                      <li key={index}>
                        <em
                          className={history.dot ? 'history__menu--new' : ''}
                        ></em>
                        <span>{history.item}</span>
                        <span>{history.action}</span>
                        <span>{history.total}</span>
                        <span>{history.date}</span>
                        <span>{history.name}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </TabVerPanel>
          {/* 구간 설정 */}
          <TabVerPanel value={verValue} index={2}>
            <div className="cm-tab-hor section-setting__detail">
              <Tabs
                value={horValue}
                onChange={handleHorChange}
                aria-label="Vertical tabs example"
              >
                <Tab label="전체" {...a11yVerProps(0)} />
                <Tab label="세부" {...a11yVerProps(1)} />
              </Tabs>
              <TabHorPanel value={horValue} index={0}>
                <div className="form">
                  <label className="form__label">
                    그래프 가로축 구간
                    <Tooltip
                      title="그래프 가로축 구간 툴팁 메시지를 입력해주세요."
                      placement="right"
                      className="tooltip"
                      slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [30, 0],
                              },
                            },
                          ],
                        },
                      }}
                    >
                      <button type="button">
                        <CmIcon name="tooltip__circle--7b8" />
                      </button>
                    </Tooltip>
                  </label>
                  <CmDateTimePicker
                    view={['year', 'month', 'day', 'minutes']}
                    placeholder="현재"
                  ></CmDateTimePicker>
                </div>
                <div className="form">
                  <label className="form__label">
                    고장/주의 가로축 구간
                    <Tooltip
                      title="고장/주의 가로축 구간 툴팁 메시지를 입력해주세요."
                      placement="right"
                      className="tooltip"
                      slotProps={{
                        popper: {
                          modifiers: [
                            {
                              name: 'offset',
                              options: {
                                offset: [30, 0],
                              },
                            },
                          ],
                        },
                      }}
                    >
                      <button type="button">
                        <CmIcon name="tooltip__circle--7b8" />
                      </button>
                    </Tooltip>
                  </label>
                  <CmDateTimePicker
                    view={['year', 'month', 'day', 'minutes']}
                    placeholder="고장/주의"
                  ></CmDateTimePicker>
                </div>
              </TabHorPanel>
              <TabHorPanel value={horValue} index={1}>
                <ul>
                  <li>
                    <CmCheckbox
                      label="진동"
                      checked={checkboxStates.vibration}
                      onChange={handleCheckboxChange('vibration')}
                    />
                    {checkboxStates.vibration && (
                      <div className="section-setting__detail--depth">
                        <div className="form">
                          <label className="form__label">
                            그래프 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="현재"
                          ></CmDateTimePicker>
                        </div>
                        <div className="form">
                          <label className="form__label">
                            고장/주의 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="고장/주의"
                          ></CmDateTimePicker>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <CmCheckbox
                      label="가속도"
                      checked={checkboxStates.acceleration}
                      onChange={handleCheckboxChange('acceleration')}
                    />
                    {checkboxStates.acceleration && (
                      <div className="section-setting__detail--depth">
                        <div className="form">
                          <label className="form__label">
                            그래프 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="현재"
                          ></CmDateTimePicker>
                        </div>
                        <div className="form">
                          <label className="form__label">
                            고장/주의 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="고장/주의"
                          ></CmDateTimePicker>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <CmCheckbox
                      label="전압"
                      checked={checkboxStates.voltage}
                      onChange={handleCheckboxChange('voltage')}
                    />
                    {checkboxStates.voltage && (
                      <div className="section-setting__detail--depth">
                        <div className="form">
                          <label className="form__label">
                            그래프 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="현재"
                          ></CmDateTimePicker>
                        </div>
                        <div className="form">
                          <label className="form__label">
                            고장/주의 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="고장/주의"
                          ></CmDateTimePicker>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <CmCheckbox
                      label="유량"
                      checked={checkboxStates.flow}
                      onChange={handleCheckboxChange('flow')}
                    />
                    {checkboxStates.flow && (
                      <div className="section-setting__detail--depth">
                        <div className="form">
                          <label className="form__label">
                            그래프 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="현재"
                          ></CmDateTimePicker>
                        </div>
                        <div className="form">
                          <label className="form__label">
                            고장/주의 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="고장/주의"
                          ></CmDateTimePicker>
                        </div>
                      </div>
                    )}
                  </li>
                  <li>
                    <CmCheckbox
                      label="Health Index"
                      checked={checkboxStates.healthIndex}
                      onChange={handleCheckboxChange('healthIndex')}
                    />
                    {checkboxStates.healthIndex && (
                      <div className="section-setting__detail--depth">
                        <div className="form">
                          <label className="form__label">
                            그래프 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="현재"
                          ></CmDateTimePicker>
                        </div>
                        <div className="form">
                          <label className="form__label">
                            고장/주의 가로축 구간
                          </label>
                          <CmDateTimePicker
                            view={['year', 'month', 'day', 'minutes']}
                            placeholder="고장/주의"
                          ></CmDateTimePicker>
                        </div>
                      </div>
                    )}
                  </li>
                </ul>
              </TabHorPanel>
            </div>
          </TabVerPanel>
        </div>
      }
    ></CmPopup>
  )
}
