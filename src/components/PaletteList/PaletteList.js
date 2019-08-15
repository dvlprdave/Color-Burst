import React, { Component } from 'react'
import MiniPalette from '../MiniPalette';

class PaletteList extends Component {
  render() {
    const { palettes } = this.props
    return (
      <div>
        {palettes.map(palette => (
          <MiniPalette {...palette} />
        ))}
      </div>
    );
  }
}

export default PaletteList;