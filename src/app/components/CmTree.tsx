import * as React from 'react'
import { RichTreeView } from '@mui/x-tree-view'
import '../styles/tree.scss'
import CmTreeItem from './CmTreeItem'

interface BasicRichTreeViewProps {
  menu: Array<any>
  useCheckbox?: boolean
  useCount?: string
}

export default function BasicRichTreeView({
  menu,
  useCheckbox,
  useCount,
}: BasicRichTreeViewProps) {
  const isChecked = true
  const RichTreeItems = (props: any) => {
    return (
      <CmTreeItem
        {...props}
        useCheckbox={useCheckbox}
        useCount={useCount}
        // FIXME 개발자: 개발하실 때 체크 된 리스트에 아래 클래스 넣어주시면 되겠습니다.
        className={isChecked ? 'cm-tree__list--checked' : ''}
      />
    )
  }

  return <RichTreeView items={menu} slots={{ item: RichTreeItems }} />
}
