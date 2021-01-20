import React, { useContext } from 'react';
import { AppContext } from './AppContext';

const Button=()=>{
        const {toggleLoggedState}=useContext(AppContext);

        return ( 
            <button onClick={toggleLoggedState}>
                Przełacz stan uzytkownika
            </button>

         );

}
 
export default Button;