import React from 'react'
import styled from 'styled-components'

import { MiniColorStyles, Main, Colors, Title, Emoji, StyledDeleteIcon } from './MiniPaletteStyles'

const MiniColor = styled.div`${MiniColorStyles}`

const MiniPalette = React.memo(({ paletteName, emoji, colors, handleDelete, handleClick, id }) => {
  // FIXME: React.memo not working
  function deletePalette(e) {
    e.stopPropagation()
    handleDelete(id)
  }

  console.log('Rendering :', paletteName);
  const miniColorBoxes = colors.map(color => (
    <MiniColor
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))
  return (
    <Main onClick={() => handleClick(id)}>
      {/* Inline style used to override default Material transition  */}
      <StyledDeleteIcon
        style={{ transition: 'all 0.2s ease-in-out' }}
        onClick={deletePalette}
      />
      <Colors>{miniColorBoxes}</Colors>
      <Title>{paletteName} <Emoji>{emoji}</Emoji></Title>
    </Main>
  )
})

export default MiniPalette