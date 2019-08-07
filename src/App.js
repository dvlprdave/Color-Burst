import React from 'react';
import Palette from './components/Palette/Palette';
import seedColors from './seedColors'
import { generatePalette } from './colorHelpers'


function App() {
  return (
    < div >
      {console.log(generatePalette(seedColors[4]))}
      <Palette palette={generatePalette(seedColors[4])} />
    </div >
  );
}

export default App;
