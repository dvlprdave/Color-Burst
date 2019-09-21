import React, { Component } from 'react'
import { Link } from 'react-router-dom';

import MiniPalette from '../MiniPalette/MiniPalette';
import { Wrapper, Container, Nav, Palettes } from './PaletteListStyles'



class PaletteList extends Component {
  goToPalette(id) {
    this.props.history.push(`/palette/${id}`)
  }

  render() {
    const { palettes, deletePalette } = this.props
    return (
      <Wrapper>
        <Container>
          <Nav>
            <h1>Color Burst</h1>
            <Link to='/palette/new'>Create Palette</Link>
          </Nav>
          <Palettes>
            {palettes.map(palette => (
              <MiniPalette
                {...palette}
                handleClick={() => this.goToPalette(palette.id)}
                handleDelete={deletePalette}
                key={palette.id}
                id={palette.id}
              />
            ))}
          </Palettes>
        </Container>

      </Wrapper>
    );
  }
}

export default PaletteList;