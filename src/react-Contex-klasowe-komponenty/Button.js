import React, { Component } from 'react';
import { AppContext } from './AppContext';

class Button extends Component {
    state = {  }
    render() { 
        return ( 
            <AppContext.Consumer>
                {
                    ({toggleLoggedState})=>{
                        return (
                            <button onClick={toggleLoggedState}>
                                Przełacz stan uzytkownika
                            </button>
                        )
                    }
                }
            
            </AppContext.Consumer>
         );
    }
}
 
export default Button;