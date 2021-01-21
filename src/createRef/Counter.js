import React, { Component, createRef } from 'react';

class Counter extends Component {
    state = { 
        counter:0,
        isCounterVisible:true
     }

     componentRef=createRef(true);

     handleAsync=()=>{
        setTimeout(()=>{
            if(this.componentRef.current)(
               this.setState(prevState=>({
                counter:prevState.counter+1
            })) 
            )
            
        },3000);
     }

     handleShowHide=()=>{
        this.setState({ isCounterVisible: !this.state.isCounterVisible });
     }

    render() { 
        const {counter}=this.state;
        const counterElement=this.state.isCounterVisible?(
            <div ref={this.componentRef}>                
                <p>Wartość licznika wynosi {counter}</p>
                <button onClick={this.handleAsync}>pobierz asynchroniczne dane</button>
            </div>
        ):(
            null
        );
        
        return ( 
            <>
                <button onClick={this.handleShowHide}>{this.state.isCounterVisible?'ukryj':'pokaz'} counter</button>
                {counterElement}
            </>
         );
    }
}
 
export default Counter;