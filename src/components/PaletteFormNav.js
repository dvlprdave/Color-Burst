import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator';
import clsx from 'clsx';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/button'

function PaletteFormNav({ classes, open, handleDrawerOpen, savePalette, palettes }) {

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

  return (
    <div>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Persistent drawer
          </Typography>
          <ValidatorForm onSubmit={() => savePalette(newPaletteName)}>
            <TextValidator
              label='Palette Name'
              name='paletteName'
              value={newPaletteName}
              onChange={handleChange}
              validators={['required', 'isPaletteNameUnique']}
              errorMessages={['Please Enter Palette Name', 'Palette Name Already Used']}
            />
            <Button
              varient='contained'
              color='secondary'
              type='submit'
            >
              Save Palette
            </Button>
            <Link to='/'>
              <Button variant='contained' color='secondary'>
                Go Back
            </Button>
            </Link>
          </ValidatorForm>
        </Toolbar>
      </AppBar>
    </div>
  )
}

export default PaletteFormNav