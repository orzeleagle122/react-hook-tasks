import React, { useState } from 'react';

import Button from '../Store/Button';
import UserInfo from '../Store/UserInfo';

import AppProvider from '../Store/AppContext';

const App3 =()=> {

    return ( 
      
      <div>
        <AppProvider>
          <UserInfo/>
          <Button/>
        </AppProvider>
      </div>
     );

}
 
export default App3;
