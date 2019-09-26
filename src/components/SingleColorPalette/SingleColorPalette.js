import React, { Component } from 'react';
import Navbar from '../Navbar/Navbar';
import PaletteFooter from '../PaletteFooter';
import ColorBox from '../ColorBox/ColorBox';

import { PaletteColors } from '../Palette/PaletteStyles'    // This is height of 90vh
import { PaletteWrapper, GoBackBox, GoBackBtn } from './SingleColorPaletteStyles'

class SingleColorPalette extends Component {
  constructor(props) {
    super(props)
    this._shades = this.gatherShades(this.props.palette, this.props.colorId)
    this.state = {
      format: 'hex'
    }
  }

  gatherShades(palette, colorToFilterBy) {
    let shades = []
    let allColors = palette.colors

    for (let key in allColors) {
      shades = shades.concat(
        allColors[key].filter(color => color.id === colorToFilterBy)
      )
    }
    //return all shades of given color
    return shades.slice(1)
  }

  changeFormat = (val) => {
    this.setState({ format: val })
  }

  render() {
    const { format } = this.state
    const { paletteName, emoji, id } = this.props.palette
    const colorBoxes = this._shades.map(color => (
      <ColorBox
        key={color.name}
        name={color.name}
        background={color[format]}
        showLink={false}
      />
    ))
    return (
      <PaletteWrapper>
        <Navbar
          changeFormat={this.changeFormat}
          showingAllColors={false}
        />
        <PaletteColors>
          {colorBoxes}
          <GoBackBox>
            <GoBackBtn to={`/palette/${id}`}>
              GO Back
            </GoBackBtn>
          </GoBackBox>
        </PaletteColors>
        <PaletteFooter
          paletteName={paletteName}
          emoji={emoji}
        />
      </PaletteWrapper>
    )
  }
}

export default SingleColorPalette;