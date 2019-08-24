import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5vh;
  font-weight: bold;
`

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <Wrapper className='Palette-footer'>
      {paletteName}
      <span className='emoji'>{emoji}</span>
    </Wrapper>
  );
}

export default PaletteFooter;