'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'
import '../styles/chart.scss'
interface StatusLineComponentProps {
  data: number[]
}

export default function StatusLineComponent({
  data,
}: StatusLineComponentProps) {
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
            width: 1,
          },
        },
        formatter: (params: any) => {
          const { name, value } = params[0]
          return `
            <div style="display: flex; align-items:center; margin-bottom: 5px;">
            <svg width="15" height="5" viewBox="0 0 15 5" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="7.5" cy="2.5" r="2.5" fill="#F99243"/>
              <line x1="15" y1="2.5" x2="-4.95396e-08" y2="2.5" stroke="#F99144"/>
            </svg>
            <span style="margin-left:5px; font-weight: bold;">Entity Value</span>
            </div>
            가로축(x): 2024-06-25 ${name}<br/>
            세로축(y): ${value}
          `
        },
      },
      legend: {
        show: true,
        left: 0,
        bottom: 20,
        data: ['Entity Value'],
        itemWidth: 10,
        itemHeight: 6,
      },
      xAxis: {
        type: 'category',
        boundaryGap: false,
        data: [
          '12:00:00',
          '12:30:00',
          '30:00:00',
          '30:30:00',
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
        min: 0,
        max: 100,
        interval: 20,
        splitLine: {
          lineStyle: {
            color: '#F1F1F1',
          },
        },
        axisLine: {
          show: true,
        },
      },
      series: [
        {
          name: 'error',
          stack: 'total',
          type: 'bar',
          data: [28],
          itemStyle: {
            color: '#E85158',
          },
          barWidth: 3,
          tooltip: {
            show: false,
          },
        },
        {
          name: 'warning',
          stack: 'total',
          type: 'bar',
          data: [32],
          itemStyle: {
            color: '#FCC348',
          },
          tooltip: {
            show: false,
          },
        },
        {
          name: 'Success',
          stack: 'total',
          type: 'bar',
          data: [40],
          itemStyle: {
            color: '#38AB3B',
          },
          tooltip: {
            show: false,
          },
        },
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
          markArea: {
            silent: true,
            data: [
              [
                {
                  yAxis: 100,
                  itemStyle: {
                    color: 'rgba(56,171,59,0.1)',
                  },
                },
                {
                  yAxis: 60,
                },
              ],
              [
                {
                  yAxis: 60,
                  itemStyle: {
                    color: 'rgba(252,195,72,0.1)',
                  },
                },
                {
                  yAxis: 28,
                },
              ],
              [
                {
                  yAxis: 28,
                  itemStyle: {
                    color: 'rgba(232,81,88,0.1)',
                  },
                },
                {
                  yAxis: 0,
                },
              ],
            ],
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

  return <div ref={chartRef} className="cm-status-line-chart" />
}
