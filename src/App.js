import React, { Component } from 'react';
import App1 from './react-Contex-klasowe-komponenty/App1';
import App2 from './useContext-hook/App2';
import App3 from './Store/App3';
import App4 from './createRef/App4';
import App5 from './useRef/App5';
import Counter from './createRef/Counter';
import App6 from './useReducer/App6';
import App7 from './useMemo/App7';

const App = () => {
  return ( 
    <div>
      <h3>useMemo</h3>
      <App7/>
      <h3>useReducer</h3>
      <App6/>
      <h3>react Context w kompomencie klasowym</h3>
      <App1/>
      <h3>react Context w komponencie fukcyjnym - Hooki</h3>
      <App2/>
      <h3>Symulacja Store</h3>
      <App3/>
      <h3>createRef</h3>
      <App4/>
      <h3>createRef-counter</h3>
      <Counter/>
      <h3>createRef</h3>
      <App5/>

    </div>

   );
}
 
export default App;
