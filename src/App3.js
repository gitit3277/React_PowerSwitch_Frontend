import React from 'react';
import logo from './logo.svg';
import './App.css';

//////////////////
class App extends React.Component{
    constructor(props){
      super(props);
      this.state={apiResponse:""};

    }

callAPI(){
 // fetch("http://localhost:9000/testAPI")
 
  fetch("http://localhost:9000/testAPI")
 
  
  .then(res => res.text())
  .then(res => this.setState({apiResponse: res}));

}



componentWillMount(){
  this.callAPI();
}

relay_0_ON(){
  fetch("http://localhost:9000/relay_0_turnON")

}

relay_0_OFF(){
  fetch("http://localhost:9000/relay_0_turnOFF")

}








render(){

  function switch_clicky() {
    //relay_0_ON();
    
    fetch("http://localhost:9000/relay_0_turnON")
   
    // alert('You will now be taken to the power switch controls ');
    // window.location.href="http://10.0.0.83";
  
  }

  function switch_clicky2() {
    //relay_0_ON();
    
    fetch("http://localhost:9000/relay_0_turnOFF")
   
    // alert('You will now be taken to the power switch controls ');
    // window.location.href="http://10.0.0.83";
  
  }

  return (
   // <div className="App">
   //   <header className="App-header">
   //   <h3>Line Name Left</h3>
   //     <span>AVR01</span><br/>
   //     <button onClick={switch_clicky}>AVR01 On</button>
   //     <button onClick={switch_clicky2}>AVR01 Off</button>

   //     <img src={logo} className="App-logo" alt="logo" />
       
   //   </header>
   //   <p>{this.state.apiResponse}</p>
   // </div>

    <div className="App">
      <div className = "Nav">
        <h3>Line Name Left</h3>
        <span>AVR01</span><br/>
        <button onClick={switch_clicky}>AVR012</button>
    
        <button>TV</button>

        </div>

        <div className = "Feed">
      <header className="App-header">
        <img src = "http://10.172.86.23/aac01/static/images/snake/SET_Logo.png" className="App-logo" alt="logo"/>
        <p>
          AMS SET Power Switch Page
        </p>
        <a
          className="App-link"
          href="http://10.172.3.11"
          target="_blank"
          rel="noopener noreferrer"
        >
          Power Switch Front
        </a>
      </header>
      </div>


        <div className = "Nav">
        <h3>Right Nav</h3> 
        <span>AMF02</span>
        <button>TV-1</button>
        <button>TV-2</button>

        </div>


        </div>

  );
}
}


export default App;
