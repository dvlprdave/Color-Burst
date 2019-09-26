import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Slider from 'rc-slider'
import 'rc-slider/assets/index.css'

import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

import { Nav, Logo, SliderWrapper, SelectContainer } from './NavbarStyles'

const Navbar = ({ level, changeLevel, showingAllColors, changeFormat }) => {

  const [format, setFormat] = useState('hex')
  const [open, setOpen] = useState(false)

  function changeHexFormat(e) {
    setFormat(e.target.value)
    setOpen(true)
    changeFormat(e.target.value)
  }

  function closeSnackbar() {
    setOpen(false)
  }

  return (
    <Nav>
      <Logo>
        <Link to='/'>Color-Burst</Link>
      </Logo>
      {showingAllColors && (
        <div className='slider-container'>
          <span>Level: {level}</span>
          <SliderWrapper>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </SliderWrapper>
        </div>
      )}
      <SelectContainer>
        <Select value={format} onChange={changeHexFormat}>
          <MenuItem value='hex'>HEX - #fff </MenuItem>
          <MenuItem value='rgb'>RGB - rgb(255, 255, 255) </MenuItem>
          <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0) </MenuItem>
        </Select>
      </SelectContainer>
      <Snackbar
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        open={open}
        autoHideDuration={2000}
        message={
          <span id='message-id'>
            Format Changed To {format.toUpperCase()}
          </span>
        }
        ContentProps={{
          'aria-describedby': 'message-id'
        }}
        onClose={closeSnackbar}
        action={[
          <IconButton
            onClick={closeSnackbar}
            color='inherit'
            key='close'
            aria-label='close'
          >
            <CloseIcon />
          </IconButton>
        ]}
      />
    </Nav>
  )
}

export default Navbar;