import React, { useMemo, useState } from 'react';
import Counter from './Counter';

const App7 = () => {

    const [firstCounter,setFirstCounter]=useState(0);
    const [secondCounter,setSecondCounter]=useState(0);

    const increaseFirstCounter=()=>setFirstCounter(firstCounter+1);

    const increaseSecondCounter=()=>setSecondCounter(secondCounter+1);

    const firstCounterComponent=useMemo(()=>{
        (<Counter counter={firstCounter} index={1} />)
    },[])

    return ( 
        <>
            <p>Licznik nr 1, wynosi: {firstCounter}</p>
            <p>Licznik nr 2, wynosi: {secondCounter}</p>
            <button onClick={increaseFirstCounter}>zwiększ licznik nr 1</button>
            <button onClick={increaseSecondCounter}>zwiększ licznik nr 2</button>
            {/* <Counter index={1}/> */}
            {firstCounterComponent}
            <Counter counter={secondCounter} index={2}/>
        </>
     );
}
 
export default App7;