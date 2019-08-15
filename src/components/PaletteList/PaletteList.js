import React, { Component } from 'react'
import styled from 'styled-components'

import MiniPalette from '../MiniPalette';

const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100vh;
  background: blue;
`
const Container = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  flex-wrap: wrap;
  width: 50%;
  background-color: blue;
`
const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: white;
`
const Palettes = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 30%);
  grid-gap: 5%;
  width: 100%;
`

class PaletteList extends Component {
  render() {
    const { palettes } = this.props
    return (
      <Wrapper>
        <Container>
          <Nav>
            <h1>Color Burst</h1>
          </Nav>
          <Palettes>
            {palettes.map(palette => (
              <MiniPalette {...palette} />
            ))}
          </Palettes>
        </Container>

      </Wrapper>
    );
  }
}

export default PaletteList;