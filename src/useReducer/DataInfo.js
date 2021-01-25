import React from 'react';

const DataInfo = ({id,title,onClickHandler}) => {
    const handleOnClick=()=>{
        onClickHandler({
            id,
            type:'REMOVE'
        });
    }

    return ( 
        <>
            <p>{title}</p>
            <button onClick={handleOnClick}>usun pozycje</button>
        </>
     );
}
 
export default DataInfo;