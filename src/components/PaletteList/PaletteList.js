import React from 'react'
import { Link } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group'

import MiniPalette from '../MiniPalette/MiniPalette';
import { Wrapper, Container, Nav, Palettes } from './PaletteListStyles'


const PaletteList = ({ palettes, deletePalette, history }) => {

  function goToPalette(id) {
    history.push(`/palette/${id}`)
  }

  return (
    <Wrapper>
      <Container>
        <Nav>
          <h1>Color Burst</h1>
          <Link to='/palette/new'>Create Palette</Link>
        </Nav>
        <Palettes>
          <TransitionGroup component={null}>
            {palettes.map(palette => (
              <CSSTransition
                key={palette.id}
                classNames='fade'
                timeout={500}
              >
                <MiniPalette
                  {...palette}
                  handleClick={() => goToPalette(palette.id)}
                  handleDelete={deletePalette}
                  key={palette.id}
                  id={palette.id}
                />
              </CSSTransition>
            ))}
          </TransitionGroup>
        </Palettes>
      </Container>
    </Wrapper >
  );
}

export default PaletteList;