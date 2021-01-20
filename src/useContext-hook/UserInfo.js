import React, { useContext } from 'react';
import {AppContext} from './AppContext';

const UserInfo =()=> {
        const {isUserLogged}=useContext(AppContext);
        const userLoggedInfo=isUserLogged?'zalogowany':'niezalogowany';

        return ( 
            <div>
                <p>użytkownik jest {userLoggedInfo}</p>
            </div>
         );
    }

 
export default UserInfo;