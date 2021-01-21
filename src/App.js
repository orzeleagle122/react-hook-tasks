import React, { Component } from 'react';
import App1 from './react-Contex-klasowe-komponenty/App1';
import App2 from './useContext-hook/App2';
import App3 from './Store/App3';
import App4 from './createRef/App4';
import Counter from './createRef/Counter';

const App = () => {
  return ( 
    <div>
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
    </div>

   );
}
 
export default App;
