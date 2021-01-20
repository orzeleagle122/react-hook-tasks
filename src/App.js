import React, { Component } from 'react';
import App1 from './react-Contex-klasowe-komponenty/App1';
import App2 from './useContext-hook/App2';

const App = () => {
  return ( 
    <div>
      <h3>react Context w kompomencie klasowym</h3>
      <App1/>
      <h3>react Context w komponencie fukcyjnym - Hooki</h3>
      <App2/>
    </div>

   );
}
 
export default App;
