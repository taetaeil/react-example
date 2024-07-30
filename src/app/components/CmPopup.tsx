'use client'

// import * as React from 'react'
import { styled } from '@mui/material/styles'
import Dialog from '@mui/material/Dialog'
import DialogTitle from '@mui/material/DialogTitle'
import DialogContent from '@mui/material/DialogContent'
import DialogActions from '@mui/material/DialogActions'

import React, { ReactNode } from 'react'

const BootstrapDialog = styled(Dialog)(({}) => ({}))

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
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <DialogTitle id="customized-dialog-title">
          <p>{props.title}</p>
          <button type="button" aria-label="close" onClick={handleClose}>
            X
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
      </BootstrapDialog>
    </React.Fragment>
  )
}
