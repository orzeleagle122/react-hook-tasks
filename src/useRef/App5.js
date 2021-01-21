import React, { createRef, useRef, useState } from 'react';

const App5 =()=> {
    const [counter,setCounter]=useState(0);
    const textInputRef=useRef();
    const numberInputRef=createRef();

    const handleFocusOnInput=()=>{
        textInputRef.current.focus();
    }

    const handleRender=()=>{
        setCounter(counter+1);
    }

        return ( 
            <>
                <input ref={textInputRef} type="text" />
                <input ref={numberInputRef} type="number" />
                <button onClick={handleFocusOnInput}>Ustaw focus na input</button>
                <button onClick={handleRender}>przerenderuj component</button>
            </>
         );

}
 
export default App5;