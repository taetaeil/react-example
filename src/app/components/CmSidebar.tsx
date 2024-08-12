'use client'

import React, { ReactNode } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import CmTree from '../components/CmTree' // 트리메뉴
import '../styles/sidebar.scss' // css 파일
import CmIcon from './CmIcon' // icon 컴포넌트

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} - 7px)`,
  },
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function MiniDrawer(props: { contents: ReactNode }) {
  const [open, setOpen] = React.useState(false)

  const handleDrawerOpen = () => {
    setOpen(true)
  }

  const handleDrawerClose = () => {
    setOpen(false)
  }

  const menuList = [
    {
      id: 'press1',
      label: '단조 프레스 #1',
      useCount: '35',
      useCheckbox: true,
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
  return (
    <div className="sidebar">
      <Drawer variant="permanent" open={open}>
        <div className="sidebar__content">
          {open ? (
            <>
              <button
                type="button"
                className="sidebar__trigger"
                onClick={handleDrawerClose}
              >
                <CmIcon name="arror-l__line--777" width="12"></CmIcon>
              </button>
              <div className="sidebar__wrap">
                <CmTree useCount="10" menu={menuList}></CmTree>
              </div>
            </>
          ) : (
            <button
              type="button"
              className="sidebar__trigger"
              onClick={handleDrawerOpen}
            >
              <CmIcon name="arror-r__line--777" width="12"></CmIcon>
            </button>
          )}
        </div>
      </Drawer>
      <div className="sidebar__main">{props.contents}</div>
    </div>
  )
}
