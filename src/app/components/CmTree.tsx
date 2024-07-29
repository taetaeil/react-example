import * as React from 'react'
import Box from '@mui/material/Box'
import { TreeViewBaseItem } from '@mui/x-tree-view/models'
import { RichTreeView } from '@mui/x-tree-view/RichTreeView'

const MUI_X_PRODUCTS: TreeViewBaseItem[] = [
  {
    id: 'press1',
    label: '단조 프레스 #1',
    children: [
      {
        id: 'asset1',
        label: 'Asset #1',
        children: [
          { id: '1 list 1', label: 'list 1' },
          { id: '1 list 2', label: 'list 2' },
        ],
      },
      { id: 'asset2', label: 'Asset #2' },
      { id: 'asset3', label: 'Asset #3' },
      { id: 'asset4', label: 'Asset #4' },
      { id: 'asset5', label: 'Asset #5' },
      { id: 'asset6', label: 'Asset #6' },
    ],
  },
  {
    id: 'press2',
    label: '단조 프레스 #2',
    children: [
      {
        id: 'asset7',
        label: 'Asset #7',
        children: [
          { id: '2 list 1', label: 'list 1' },
          { id: '2 list 2', label: 'list 2' },
        ],
      },
      { id: 'asset8', label: 'Asset #8' },
    ],
  },
]

export default function BasicRichTreeView() {
  return <RichTreeView items={MUI_X_PRODUCTS} />
}
