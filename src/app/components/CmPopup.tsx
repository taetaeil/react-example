'use client'

import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'
import '../styles/popup.scss' // css 파일
import CmIcon from './CmIcon'

import React, { ReactNode } from 'react'

export default function MuModal(props: {
  title: string
  trigger: ReactNode
  contents: ReactNode
}) {
  const [open, setOpen] = React.useState(false)

  const handleClickOpen = () => {
    setOpen(true)
  }
  const handleClose = () => {
    setOpen(false)
  }

  return (
    <React.Fragment>
      <button type="button" onClick={handleClickOpen}>
        {props.trigger}
      </button>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="cm-popup"
      >
        <DialogTitle id="customized-dialog-title">
          <p>{props.title}</p>
          <button type="button" aria-label="close" onClick={handleClose}>
            <CmIcon name="close__line--222"></CmIcon>
          </button>
        </DialogTitle>
        <DialogContent>{props.contents}</DialogContent>
        <DialogActions>
          <button type="button" className="btn__line" onClick={handleClose}>
            취소
          </button>
          <button type="button" className="btn__primary" onClick={handleClose}>
            적용
          </button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  )
}
