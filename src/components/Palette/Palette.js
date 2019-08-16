import React, { Component } from 'react'
import ColorBox from '../ColorBox/ColorBox'
import Navbar from '../Navbar/Navbar'
import './Palette.css'
import PaletteFooter from '../PaletteFooter';

class Palette extends Component {
  state = {
    level: 500,
    format: 'hex'
  }

  changeLevel = (level) => {
    this.setState({ level })
  }

  changeFormat = (val) => {
    this.setState({ format: val })
  }

  render() {
    const { colors, paletteName, emoji, id } = this.props.palette
    const { level, format } = this.state

    const colorBoxes = colors[level].map(color => (
      <ColorBox
        background={color[format]}
        name={color.name}
        moreUrl={`/palette/${id}/${color.id}`}
        showLink
        key={color.id}
      />
    ))
    return (
      <div className='Palette'>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showingAllColors
        />
        <div className='Palette-colors'>{colorBoxes}</div>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </div>
    );
  }
}

export default Palette;