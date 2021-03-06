import React, { useState, useEffect } from 'react'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import { Picker } from 'emoji-mart'
import 'emoji-mart/css/emoji-mart.css'

function PaletteMetaForm({ palettes, savePalette, hideForm }) {
  const [open, setOpen] = useState('form');
  const [newPaletteName, setNewPaletteName] = useState('')

  // Validates unique palette name
  useEffect(() => {
    ValidatorForm.addValidationRule("isPaletteNameUnique", value =>
      palettes.every(
        ({ paletteName }) => paletteName.toLowerCase() !== value.toLowerCase()
      )
    )
  })

  function handleChange(event) {
    setNewPaletteName(event.target.value)
  }

  function saveThePalette(emoji) {
    const newPalette = {
      paletteName: newPaletteName,
      emoji: emoji.native
    }
    savePalette(newPalette)
  }

  function handleClose() {
    setOpen(false);
  }

  function showEmojiPicker() {
    setOpen('emoji')
  }

  return (
    <div>
      <Dialog open={open === 'emoji'} onClose={hideForm}>
        <DialogTitle id="form-dialog-title">Pick An Emoji For Your Palette</DialogTitle>
        <Picker title='Pick Palette Emoji' onSelect={saveThePalette} />
      </Dialog>
      <Dialog open={open === 'form'} onClose={handleClose} aria-labelledby="form-dialog-title">
        <DialogTitle id="form-dialog-title">Choose Palette Name</DialogTitle>
        <ValidatorForm onSubmit={() => showEmojiPicker()}>
          <DialogContent>
            <DialogContentText>
              Enter the name of your new Palette. Don't forget to make it unique!
          </DialogContentText>
            <TextValidator
              fullWidth
              margin='normal'
              label='Palette Name'
              name='paletteName'
              value={newPaletteName}
              onChange={handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Please Enter Palette Name', 'Palette Name Already Used']}
            />
          </DialogContent>
          <DialogActions>
            <Button onClick={hideForm} color="primary">Cancel</Button>
            <Button
              varient='contained'
              color='secondary'
              type='submit'
            >
              Save Palette
           </Button>
          </DialogActions>
        </ValidatorForm>
      </Dialog>
    </div>
  );
}

export default PaletteMetaForm