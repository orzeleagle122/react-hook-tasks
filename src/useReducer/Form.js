import React, { useState } from 'react';

const Form = ({onSubmitHandler}) => {


    const [value,setValue]=useState('');

    const handleChange=(event)=>{
        
        setValue(event.target.value);
    }

    const handleOnSubmit=(event)=>{
        event.preventDefault();
        const newItem={
            id:Math.floor(Math.random()*1000),
            title:value
        }

        onSubmitHandler({type:'ADD', data: newItem});
        setValue('');

    }
    
    return ( 
        <form onSubmit={handleOnSubmit}>
            <input type="text" value={value} onChange={handleChange}/>
            <button onSubmit={handleOnSubmit}>dodaj pozycje</button>
        </form>
     );
}
 
export default Form;