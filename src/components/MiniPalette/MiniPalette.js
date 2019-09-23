import React from 'react'
import styled from 'styled-components'

import { MiniColorStyles, Main, Colors, Title, Emoji, StyledDeleteIcon } from './MiniPaletteStyles'

const MiniColor = styled.div`${MiniColorStyles}`

const MiniPalette = ({ paletteName, emoji, colors, handleClick, handleDelete, id }) => {

  function deletePalette(e) {
    e.stopPropagation()
    handleDelete(id)
  }

  const miniColorBoxes = colors.map(color => (
    <MiniColor
      style={{ backgroundColor: color.color }}
      key={color.name}
    />
  ))
  return (
    <Main onClick={handleClick}>
      {/* Inline style used to override default Material transition  */}
      <StyledDeleteIcon
        style={{ transition: 'all 0.2s ease-in-out' }}
        onClick={deletePalette}
      />
      <Colors>{miniColorBoxes}</Colors>
      <Title>{paletteName} <Emoji>{emoji}</Emoji></Title>
    </Main>
  )
}

export default MiniPalette