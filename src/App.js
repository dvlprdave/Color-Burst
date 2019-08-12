import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'


function App() {
  return (
    <Switch>
      <Route exact path='/' />
      <Route exact path='/palette/:id' />
    </Switch>
    // <div>
    //   <Palette palette={generatePalette(seedColors[4])} />
    // </div >
  );
}

export default App;
