import React,{createRef,Component} from 'react';

class App4 extends Component {
    state = {  }

    textInput=createRef();
    paragraphElement=createRef();

    handleFocusTextInput=()=>{
        this.textInput.current.focus();
    }
    handleAddChar=()=>{
        this.paragraphElement.current.textContent+='!!!';
    }

    render() { 
        console.log(this.textInput);
        return ( 
            <>
                <input type="text" ref={this.textInput} />
                <p ref={this.paragraphElement}>hello</p>
                <input type="number" />
                <button onClick={this.handleFocusTextInput}>ustaw focus na input</button>
                <button onClick={this.handleAddChar}>dodaj '!!!'</button>
            </>
         );
    }
}
 
export default App4;