import React from 'react';
import styled from 'styled-components'

const Wrapper = styled.footer`
  display: flex;
  justify-content: flex-end;
  align-items: center;
  height: 5vh;
  font-weight: bold;
`

const Emoji = styled.span`
  font-size: 1.5rem;
  margin: 0 1rem;
`

const PaletteFooter = ({ paletteName, emoji }) => {
  return (
    <Wrapper>
      {paletteName}
      <Emoji>{emoji}</Emoji>
    </Wrapper>
  );
}

export default PaletteFooter;