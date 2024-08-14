'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption, TooltipComponentOption } from 'echarts'
import '../styles/chart.scss'

interface LineComponentProps {
  data: number[]
}

export default function LineComponent({ data }: LineComponentProps) {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const chartInstance = useRef<ECharts | null>(null)

  useEffect(() => {
    const option: EChartsOption = {
      tooltip: {
        trigger: 'axis',
        axisPointer: {
          type: 'cross',
          label: {
            show: false,
          },
          crossStyle: {
            color: '#F78A35',
          },
          lineStyle: {
            color: '#F78A35',
          },
        },
        formatter: (params: any) => {
          if (!Array.isArray(params) || params.length === 0) {
            return ''
          }
          const param = params[0] as { name: string; value: number }
          const { name, value } = param
          return `
            <div style="display: flex; align-items:center; margin-bottom: 5px;">
            <svg width="15" height="5" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="2.5" r="2.5" fill="#F99243"/>
              <line x1="15" y1="2.5" x2="0" y2="2.5" stroke="#F99144"/>
            </svg>
            <span style="margin-left:5px; font-weight: bold;">Entity Value</span>
            </div>
            가로축(x): 2024-06-25 ${name}<br/>
            세로축(y): ${value} cm/s²
          `
        },
      },
      legend: {
        show: true,
        left: 0,
        bottom: 20,
        itemWidth: 10,
        itemHeight: 6,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '14:00:00',
          '14:30:00',
          '15:00:00',
          '15:30:00',
          '16:30:00',
          '17:00:00',
        ],
        splitLine: {
          show: true,
          lineStyle: {
            color: '#F1F1F1',
          },
        },
        axisLine: {
          show: false,
        },
        axisTick: {
          show: false,
        },
      },
      yAxis: {
        type: 'value',
        min: -20,
        max: 20,
        interval: 10,
        splitLine: {
          lineStyle: {
            color: '#F1F1F1',
          },
        },
      },
      series: [
        {
          name: 'Entity Value',
          type: 'line',
          symbol: 'circle',
          symbolSize: 5,
          data: data,
          lineStyle: {
            color: '#F78A35',
            width: 1,
          },
          itemStyle: {
            borderColor: '#F78A35',
            color: '#F78A35',
          },
        },
      ],
      grid: {
        top: 10,
        right: 10,
        left: 30,
      },
    }

    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current)
      chartInstance.current.setOption(option)
    }

    return () => {
      chartInstance.current?.dispose()
    }
  }, [data])

  return <div ref={chartRef} className="cm-line-chart" />
}
