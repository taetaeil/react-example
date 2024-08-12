'use client'
import React, { useEffect, useRef } from 'react'
import * as echarts from 'echarts'
import type { ECharts, EChartsOption } from 'echarts'

interface CmBarStackChartProps {
  title: string
  data: number[][]
  totalCount: number // 총 16대에 해당하는 값을 받기 위한 props
}

export default function CmBarStackChart({
  title,
  data,
  totalCount,
}: CmBarStackChartProps) {
  const chartRef = useRef<HTMLDivElement | null>(null)
  const chartInstance = useRef<ECharts | null>(null)

  useEffect(() => {
    const option: EChartsOption = {
      // tooltip: {
      //   trigger: 'axis',
      //   axisPointer: { type: 'shadow' },
      // },
      legend: {
        show: false,
        data: ['Error', 'Warning', 'Success'],
      },
      xAxis: {
        show: false,
        type: 'value',
      },
      yAxis: {
        show: false,
        type: 'category',
        data: ['Category'],
      },
      grid: {
        height: 12,
        top: 0,
        left: 0,
        right: 0,
      },
      series: [
        {
          name: 'Error',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            position: 'insideBottomRight',
            align: 'right',
            verticalAlign: 'top',
            offset: [0, 10],
            formatter: '{c}%',
            color: '#E84A51',
          },
          itemStyle: {
            color: '#E84A51',
          },
          data: data[0],
        },
        {
          name: 'Warning',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            position: 'insideBottomRight',
            align: 'right',
            verticalAlign: 'top',
            offset: [0, 10],
            formatter: '{c}%',
            color: '#FCC347',
          },
          itemStyle: {
            color: '#FCC347',
          },
          data: data[1],
        },
        {
          name: 'Success',
          type: 'bar',
          stack: 'total',
          label: {
            show: true,
            position: 'insideBottomRight',
            align: 'right',
            verticalAlign: 'top',
            offset: [0, 10],
            formatter: '{c}%',
            color: '#37AB3B',
          },
          itemStyle: {
            color: '#37AB3B',
          },
          data: data[2],
        },
      ],
    }

    if (chartRef.current) {
      chartInstance.current = echarts.init(chartRef.current)
      chartInstance.current.setOption(option)
    }

    return () => {
      chartInstance.current?.dispose()
    }
  }, [data])

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          color: '#999999',
        }}
      >
        <p className="chart__title">{title}</p>
        <span className="chart__info">총 {totalCount}대</span>
      </div>
      <div ref={chartRef} style={{ width: '100%', height: '50px' }} />
    </>
  )
}
