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
  const RichTreeItems = (props: any) => {
    return (
      <CmTreeItem {...props} useCheckbox={useCheckbox} useCount={useCount} />
    )
  }

  return <RichTreeView items={menu} slots={{ item: RichTreeItems }} />
}
