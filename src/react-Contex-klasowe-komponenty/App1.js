import React, { Component } from 'react';
import {AppContext,defaultObject} from '../react-Contex-klasowe-komponenty/AppContext';
import Button from '../react-Contex-klasowe-komponenty/Button';
import UserInfo from '../react-Contex-klasowe-komponenty/UserInfo';

class App1 extends Component {
  state = { 
    isUserLogged:defaultObject.isUserLogged,
   }
   hadleToggleStateIsLogged=()=>{
     // eslint-disable-next-line no-labels
     this.setState((prevState)=>({isUserLogged: !prevState.isUserLogged}));
   }
  render() { 
    return ( 
      
      <div>
        <AppContext.Provider value={{
          isUserLogged:this.state.isUserLogged,
          toggleLoggedState:this.hadleToggleStateIsLogged
        }}>
          <UserInfo/>
          <Button/>
        </AppContext.Provider>
      </div>
     );
  }
}
 
export default App1;
