import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'

import Palette from './components/Palette/Palette'
import PaletteList from './components/PaletteList/PaletteList'
import SingleColorPalette from './components/SingleColorPalette/SingleColorPalette'
import NewPaletteForm from './components/NewPaletteForm/NewPaletteForm'

import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'

const savedPalettes = JSON.parse(window.localStorage.getItem('palettes'))

class App extends Component {
  state = {
    palettes: savedPalettes || seedColors
  }

  findPalette(id) {
    return this.state.palettes.find(function (palette) {
      return palette.id === id;
    });
  }

  deletePalette = (id) => {
    this.setState(
      st => ({ palettes: st.palettes.filter(palette => palette.id !== id) }),
      this.syncLocalStorage
    )
  }

  savePalette = (newPalette) => {
    this.setState(
      { palettes: [...this.state.palettes, newPalette] },
      this.syncLocalStorage
    )
  }

  // Save created palette to local storage
  syncLocalStorage = () => {
    window.localStorage.setItem('palettes', JSON.stringify(this.state.palettes))
  }

  render() {
    return (
      <Switch>
        <Route
          exact
          path='/palette/new'
          render={(routeProps) => (
            <NewPaletteForm
              savePalette={this.savePalette}
              palettes={this.state.palettes}
              {...routeProps}
            />
          )}
        />
        <Route
          exact
          path='/palette/:id'
          render={routeProps => (
            <Palette
              palette={generatePalette(
                this.findPalette(routeProps.match.params.id)
              )}
            />
          )}
        />
        <Route
          exact
          path='/palette/:paletteId/:colorId'
          render={routeProps => (
            <SingleColorPalette
              colorId={routeProps.match.params.colorId}
              palette={generatePalette(
                this.findPalette(routeProps.match.params.paletteId)
              )}
            />
          )}
        />
        <Route
          render={(routeProps) => (
            <PaletteList
              palettes={this.state.palettes}
              deletePalette={this.deletePalette}
              {...routeProps}
            />
          )}
        />
      </Switch>
    );
  }
}

export default App;