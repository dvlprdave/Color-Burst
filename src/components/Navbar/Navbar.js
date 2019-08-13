import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import Select from '@material-ui/core/Select'
import MenuItem from '@material-ui/core/MenuItem'
import Slider from 'rc-slider'
import Snackbar from '@material-ui/core/Snackbar';
import CloseIcon from '@material-ui/icons/Close';
import { IconButton } from '@material-ui/core';

import 'rc-slider/assets/index.css'
import './Navbar.css'

class Navbar extends Component {
  state = {
    format: 'hex',
    open: false
  }

  // Changes color format (hex / rgb / rgba)
  changeFormat = (e) => {
    this.setState({
      format: e.target.value,
      open: true
    })
    this.props.changeFormat(e.target.value)
  }

  closeSnackbar = () => {
    this.setState({ open: false })
  }

  render() {
    const { level, changeLevel } = this.props
    const { format, open } = this.state
    return (
      <nav className='Navbar'>
        <div className='logo'>
          <Link to='/'>Color-Burst</Link>
        </div>
        <div className='slider-container'>
          <span>Level: {level}</span>
          <div className='slider'>
            <Slider
              defaultValue={level}
              min={100}
              max={900}
              step={100}
              onAfterChange={changeLevel}
            />
          </div>
        </div>
        <div className='select-container'>
          <Select value={format} onChange={this.changeFormat}>
            <MenuItem value='hex'>HEX - #fff </MenuItem>
            <MenuItem value='rgb'>RGB - rgb(255, 255, 255) </MenuItem>
            <MenuItem value='rgba'>RGBA - rgba(255, 255, 255, 1.0) </MenuItem>
          </Select>
        </div>
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
          onClose={this.closeSnackbar}
          action={[
            <IconButton
              onClick={this.closeSnackbar}
              color='inherit'
              key='close'
              aria-label='close'
            >
              <CloseIcon />
            </IconButton>
          ]}
        />
      </nav>
    );
  }
}

export default Navbar;