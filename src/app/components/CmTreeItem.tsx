import * as React from 'react'
import { TreeItem2, TreeItem2Props } from '@mui/x-tree-view/TreeItem2'
import CmCheckbox from './CmCheckbox'

interface CustomTreeItemProps extends TreeItem2Props {
  useCheckbox?: boolean
  useCount?: string
  itemId: string // itemId를 string으로 고정
}

const CustomTreeItem: React.FC<CustomTreeItemProps> = (props) => {
  const { useCheckbox, useCount, label, itemId, ...other } = props
  return (
    <TreeItem2
      {...other}
      itemId={itemId} // 필수 속성 추가
      label={
        <>
          {useCheckbox ? (
            <CmCheckbox label={label} />
          ) : (
            <div className="cm-tree__title">{label}</div>
          )}
          {useCount ? (
            <span className="cm-tree__count">&#40;{useCount}&#41;</span>
          ) : null}
        </>
      }
    />
  )
}

export default CustomTreeItem
