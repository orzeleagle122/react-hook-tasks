import React, { useEffect, useReducer } from 'react';
import DataInfo from './DataInfo';
import Form from './Form';

const dane=[
    {id:'1',title:'title1'},
    {id:'2',title:'title2'},
    {id:'3',title:'title3'},
    {id:'4',title:'title4'},
    {id:'5',title:'title5'}
];

// reducer - przyjmuje stan i akcje, zwraca nowy stan
const daneReducer=(state,action)=>{
    switch(action.type){
        case 'ADD':
            return [...state,action.data];
        case 'REMOVE':
            return state.filter((item)=>item.id!==action.id);
        case 'FETCH':
            return action.data;
        default:
            throw new Error('Ooops something went wrong!');
    }
}

const fetchAsync=async()=>{
    await new Promise(resolve=>setTimeout(resolve,3000));

}

const App = () => {
    
    // useRecuder(reducer:fukcja,poczatkowy stan)
    //dispatch - zawieze obiekt akcji którą musimy przekazać
    const [state,dispatch]=useReducer(daneReducer,[]);
    
    const daneElements=state.map(item=>(<DataInfo {...item} onClickHandler={dispatch} key={item.id} />))

    const asyncFetch=async()=>{
        await fetchAsync();
        dispatch({
            type:'FETCH',
            data: dane
        })
    };

    useEffect(()=>{
        asyncFetch();
    },[]);

    return ( 
        <> 
            {daneElements}
            <Form onSubmitHandler={dispatch}/>
        </>
     );
}
 
export default App;