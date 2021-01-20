import React, { useState } from 'react';
import {AppContext,defaultObject} from '../useContext-hook/AppContext';
import Button from '../useContext-hook/Button';
import UserInfo from '../useContext-hook/UserInfo';

const App2 =()=> {
  const [isUserLogged,setIsUserLogged]=useState(defaultObject.isUserLogged);

   const hadleToggleStateIsLogged=()=>{
     // eslint-disable-next-line no-labels
    //  this.setState((prevState)=>({isUserLogged: !prevState.isUserLogged}));
     setIsUserLogged((prevValue)=>!prevValue);
   }

    return ( 
      
      <div>
        <AppContext.Provider value={{isUserLogged,hadleToggleStateIsLogged}}>
          <UserInfo/>
          <Button/>
        </AppContext.Provider>
      </div>
     );

}
 
export default App2;
