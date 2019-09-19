import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import PaletteFooter from './PaletteFooter';
import ColorBox from './ColorBox/ColorBox';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { MainColorBox } from './ColorBox/ColorBoxStyles'

const PaletteWrapper = styled.div`
  height: 50%;
`
const GoBackBox = styled(MainColorBox)`
  background-color: black;
  position: relative;
`
const GoBackBtn = styled(Link)`
  width: 100px;
  height: 30px;
  position: absolute;
  display: inline-block;
  top: 50%;
  left: 50%;
  margin-left: -50px;
  margin-top: -15px;
  text-align: center;
  text-decoration: none;
  outline: none;
  background: rgba(255,255,255, 0.3);
  font-size: 1rem;
  line-height: 30px;
  color: white;
  text-transform: uppercase;
  border: none;
  cursor: pointer;
`
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
      <PaletteWrapper className='Palette SingleColorPalette'>
        <Navbar
          changeFormat={this.changeFormat}
          showingAllColors={false}
        />
        <div className='Palette-colors'>
          {colorBoxes}
          {/* <div className='go-back ColorBox'>
            <Link to={`/palette/${id}`} className='back-button'>GO Back</Link>
          </div> */}
          <GoBackBox>
            {/* <Link to={`/palette/${id}`} className='back-button'>GO Back</Link> */}
            <GoBackBtn to={`/palette/${id}`}>
              GO Back
            </GoBackBtn>
          </GoBackBox>
        </div>
        <PaletteFooter
          paletteName={paletteName}
          emoji={emoji}
        />
      </PaletteWrapper>
    )
  }
}

export default SingleColorPalette;