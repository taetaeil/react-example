'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'
import '../styles/chart.scss'

interface CmGaugeChartProps {
  title: string
  value: number
}

export default function CmGaugeChart({ title, value }: CmGaugeChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const chartInstance = useRef<ECharts | null>(null)

  useEffect(() => {
    const getProgressColor = (value: number) => {
      if (value < 30) {
        return '#e84a51'
      } else if (value < 60) {
        return '#fcc347'
      } else {
        return '#37ab3b'
      }
    }

    const getDataName = (value: number) => {
      if (value < 20) {
        return '경고'
      } else if (value < 60) {
        return '주의'
      } else {
        return '정상'
      }
    }

    const option: EChartsOption = {
      series: [
        {
          name: 'status',
          type: 'gauge',
          startAngle: 210,
          endAngle: -30,
          center: ['50%', '55%'],
          radius: '90%',
          min: 0,
          max: 100,
          axisLine: {
            lineStyle: {
              width: 3,
              color: [
                [0.2, '#e84a51'],
                [0.6, '#fcc347'],
                [1, '#37ab3b'],
              ],
            },
          },
          pointer: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
        },
        {
          name: 'data',
          type: 'gauge',
          startAngle: 210,
          endAngle: -30,
          center: ['50%', '55%'],
          radius: '86%',
          min: 0,
          max: 100,
          axisLine: {
            lineStyle: {
              width: 24,
              color: [[1, '#EDEEF0']],
            },
          },
          progress: {
            show: true,
            width: 24,
            itemStyle: {
              color: getProgressColor(value),
            },
          },
          pointer: {
            show: false,
          },
          axisTick: {
            show: false,
          },
          splitLine: {
            show: false,
          },
          axisLabel: {
            show: false,
          },
          detail: {
            fontSize: 36,
            offsetCenter: [0, '10%'],
            formatter: function (value: number) {
              return getDataName(value)
            },
            color: getProgressColor(value),
          },
          data: [
            {
              value: value,
            },
          ],
        },
      ],
    }

    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current)
      chartInstance.current.setOption(option)

      // wheel 이벤트 리스너에 passive 옵션을 추가
      const chartDom = chartRef.current as HTMLElement
      const onWheel = (event: Event) => {
        // 필요한 동작을 여기에 추가
      }

      chartDom.addEventListener('wheel', onWheel, { passive: true })

      return () => {
        chartInstance.current?.dispose()
        chartDom.removeEventListener('wheel', onWheel)
      }
    }
  }, [value])

  return (
    <div className="cm-gauge-chart">
      <div ref={chartRef} className="cm-gauge-chart__grid" />
      <div className="cm-gauge-chart__desc">
        <span>HI 값</span> <em>{value}</em>
      </div>
    </div>
  )
}
