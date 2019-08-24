import React, { Component } from 'react'
import ColorBox from '../ColorBox/ColorBox'
import Navbar from '../Navbar/Navbar'
import PaletteFooter from '../PaletteFooter';
import styled from 'styled-components'
import './Palette.css'

const Wrapper = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
`

const PaletteColors = styled.div`
  height: 90vh;
`

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
      <Wrapper>
        <Navbar
          level={level}
          changeLevel={this.changeLevel}
          changeFormat={this.changeFormat}
          showingAllColors
        />
        {/* <div className='Palette-colors'>{colorBoxes}</div> */}
        <PaletteColors>{colorBoxes}</PaletteColors>
        <PaletteFooter paletteName={paletteName} emoji={emoji} />
      </Wrapper>
    );
  }
}

export default Palette;