import React from 'react';

const Counter = ({index,counter}) => {
    // console.log(`render licznika nr: ${index}`);
    return ( 
        <>
            <p>Licznik nr {index}, wynosi: {counter}</p>
        </>
     );
}
 
export default Counter;