import React, { Component } from 'react';
import { AppContext } from './AppContext';

class Button extends Component {
    state = {  }

    static contextType=AppContext;
    render() { 
        return ( 
            <button onClick={this.context.toggleLoggedState}>
                Przełacz stan uzytkownika
            </button>

         );
    }
}
 
export default Button;