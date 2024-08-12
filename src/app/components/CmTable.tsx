import React from 'react'
import '../styles/table.scss' // css 파일

interface CmTableProps {
  headers: React.ReactNode
  rows?: React.ReactNode
  colwidths: Array<any>
}

export default function CmTable({ headers, rows, colwidths }: CmTableProps) {
  return (
    <div className="cm-table__container">
      <table className="cm-table">
        <colgroup>
          {colwidths.map((col, index) => (
            <col key={index} width={col} />
          ))}
        </colgroup>
        <thead className="cm-table__header">{headers}</thead>
        <tbody className="cm-table__body">{rows}</tbody>
      </table>
    </div>
  )
}
