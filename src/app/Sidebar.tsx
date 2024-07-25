'use client'

import React, { ReactNode } from 'react'
import { styled, Theme, CSSObject } from '@mui/material/styles'
import MuiDrawer from '@mui/material/Drawer'
import CmTree from './CmTree' // 트리메뉴

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
    width: `calc(${theme.spacing(8)} + 1px)`,
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
                &lt;
              </button>
              <div>
                <CmTree></CmTree>
              </div>
            </>
          ) : (
            <button
              type="button"
              className="sidebar__trigger"
              onClick={handleDrawerOpen}
            >
              &gt;
            </button>
          )}
        </div>
      </Drawer>
      <div className="sidebar__wrap">{props.contents}</div>
    </div>
  )
}
