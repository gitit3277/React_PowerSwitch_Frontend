import React from 'react';
import ReactDOM from 'react-dom';
import logo from './logo.svg';
import './App.css';
import 'request';



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

state = {
  loading: true, 
  ps_01_relay_1: null
};

state = {
  loading: true, 
  ps_01_relay_0: null ,
  ps_01_relay_1: null ,
  ps_01_relay_2: null ,
  ps_01_relay_3: null ,
  ps_01_relay_4: null ,
  ps_01_relay_5: null ,
  ps_01_relay_6: null ,
  ps_01_relay_7: null ,
};

async componentDidMount() {

 const url = "http://localhost:9000/relay_0_CheckStatus"
 const response2 = await fetch(url); 
 const data =await response2.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_0: data+"", loading: false})
 

if (this.state.ps_01_relay_0=="true"){
 
 document.getElementById('temo').style.background='green';
 
}

else if (this.state.ps_01_relay_0=="false"){
  
  document.getElementById('temo').style.background='red';
  
 }

 console.log(typeof data);
 console.log(data.toString() );  
 
 ////////////////////////////////////////////////////////////

 const url_1 = "http://localhost:9000/relay_1_CheckStatus"
 const response2_1= await fetch(url_1); 
 const data_1 =await response2_1.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_1: data_1+"", loading: false})
 

if (this.state.ps_01_relay_1=="true"){
 
 document.getElementById('temo1').style.background='green';
 
}

else if (this.state.ps_01_relay_1=="false"){
  
  document.getElementById('temo1').style.background='red';
  
 }

/////////////////////////////////////////////////////////////

 const url_2 = "http://localhost:9000/relay_2_CheckStatus"
 const response2_2= await fetch(url_2); 
 const data_2 =await response2_2.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_2: data_2+"", loading: false})
 

if (this.state.ps_01_relay_2=="true"){

 document.getElementById('temo2').style.background='green';
 
}

else if (this.state.ps_01_relay_2=="false"){
  
  document.getElementById('temo2').style.background='red';

 }

/////////////////////////////////////////////////////////////

 const url_3 = "http://localhost:9000/relay_3_CheckStatus"
 const response2_3= await fetch(url_3); 
 const data_3 =await response2_3.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_3: data_3+"", loading: false})
 

if (this.state.ps_01_relay_3=="true"){

 document.getElementById('temo3').style.background='green';
 
}

else if (this.state.ps_01_relay_3=="false"){
  
  document.getElementById('temo3').style.background='red';
 
 }

 /////////////////////////////////////////////////////////////

 const url_4 = "http://localhost:9000/relay_4_CheckStatus"
 const response2_4= await fetch(url_4); 
 const data_4 =await response2_4.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_4: data_4+"", loading: false})
 

if (this.state.ps_01_relay_4=="true"){

 document.getElementById('temo4').style.background='green';
 
}

else if (this.state.ps_01_relay_4=="false"){

  document.getElementById('temo4').style.background='red';
 
 }

//////////////////////////////////////////////////////////////

 const url_5 = "http://localhost:9000/relay_5_CheckStatus"
 const response2_5= await fetch(url_5); 
 const data_5 =await response2_5.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_5: data_5+"", loading: false})
 

if (this.state.ps_01_relay_5=="true"){

 document.getElementById('temo5').style.background='green';

}

else if (this.state.ps_01_relay_5=="false"){
 
  document.getElementById('temo5').style.background='red';
 
 }

 /////////////////////////////////////////////////////////////

 const url_6 = "http://localhost:9000/relay_6_CheckStatus"
 const response2_6= await fetch(url_6); 
 const data_6 =await response2_6.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_6: data_6+"", loading: false})
 

if (this.state.ps_01_relay_6=="true"){

 document.getElementById('temo6').style.background='green';

}

else if (this.state.ps_01_relay_6=="false"){
 
  document.getElementById('temo6').style.background='red';

 }

 /////////////////////////////////////////////////////////////

 const url_7 = "http://localhost:9000/relay_7_CheckStatus"
 const response2_7= await fetch(url_7); 
 const data_7 =await response2_7.json(); 

  // this.setState({person: data.results[0], loading: false})
  this.setState({ps_01_relay_7: data_7+"", loading: false})
 

if (this.state.ps_01_relay_7=="true"){

 document.getElementById('temo7').style.background='green';
 
}

else if (this.state.ps_01_relay_7=="false"){
  
  document.getElementById('temo7').style.background='red';

 }

}



render(){

  function switch_clicky() {
    
    if (document.getElementById('temo').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_0_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_0_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }

  function switch_clicky1() {

    if (document.getElementById('temo1').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_1_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo1').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_1_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }

  function switch_clicky2() {

    if (document.getElementById('temo2').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_2_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo2').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_2_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }

  function switch_clicky3() {

    if (document.getElementById('temo3').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_3_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo3').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_3_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }


  function switch_clicky4() {

    if (document.getElementById('temo4').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_4_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo4').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_4_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }

  function switch_clicky5() {

    if (document.getElementById('temo5').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_5_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo5').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_5_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }

  function switch_clicky6() {

    if (document.getElementById('temo6').style.background=='green'){
      const response1 = fetch("http://localhost:9000/relay_6_turnOFF")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    else if (document.getElementById('temo6').style.background=='red'){
      const response1 = fetch("http://localhost:9000/relay_6_turnON")
     // alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";
      return 0;
    }

    //alert('Outlet will now change state ');
    window.location.href="http://localhost:3000";

  }

    function switch_clicky7() {

      if (document.getElementById('temo7').style.background=='green'){
        const response1 = fetch("http://localhost:9000/relay_7_turnOFF")
       // alert('Outlet will now change state ');
        window.location.href="http://localhost:3000";
        return 0;
      }
  
      else if (document.getElementById('temo7').style.background=='red'){
        const response1 = fetch("http://localhost:9000/relay_7_turnON")
       // alert('Outlet will now change state ');
        window.location.href="http://localhost:3000";
        return 0;
      }
  
      //alert('Outlet will now change state ');
      window.location.href="http://localhost:3000";

  }

  function switch_clicky8() {
    fetch("http://localhost:9000/relay_0_turnOFF")
    fetch("http://localhost:9000/relay_1_turnOFF")
    fetch("http://localhost:9000/relay_2_turnOFF")
    fetch("http://localhost:9000/relay_3_turnOFF")
    fetch("http://localhost:9000/relay_4_turnOFF")
    fetch("http://localhost:9000/relay_5_turnOFF")
    fetch("http://localhost:9000/relay_6_turnOFF")
    fetch("http://localhost:9000/relay_7_turnOFF")

    window.location.href="http://localhost:3000";

    fetch("http://localhost:9000/relay_0_turnON")
    fetch("http://localhost:9000/relay_1_turnON")
    fetch("http://localhost:9000/relay_2_turnON")
    fetch("http://localhost:9000/relay_3_turnON")
    fetch("http://localhost:9000/relay_4_turnON")
    fetch("http://localhost:9000/relay_5_turnON")
    fetch("http://localhost:9000/relay_6_turnON")
    fetch("http://localhost:9000/relay_7_turnON")

    window.location.href="http://localhost:3000";


}
 

  return (
    
 
    
    <div className="App">
      <div className = "Nav">
        <h3>Outdoor Lines</h3>
        <span>AVR01-VRV</span><br/>
        <div>
    </div>
        
        <button id="temo"  onClick={switch_clicky}>Dashboard</button>
        <button id="temo1" onClick={switch_clicky1}>Andon</button>
        <button id="temo2" onClick={switch_clicky2}>TV-3</button>
        <button id="temo3" onClick={switch_clicky3}>TV-4</button><br/>
        <button id="temo4" onClick={switch_clicky4}>RasPi-1</button>
        <button id="temo5" onClick={switch_clicky5}>RasPi-2</button>
        <button id="temo6" onClick={switch_clicky6}>PA-1</button>
        <button id="temo7" onClick={switch_clicky7}>PA-2</button><br/> 
        <button id="temo8"  onClick={switch_clicky8}>Power Cycle</button><br/>

        <span>AVR02-Inverter</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>
        
        <span>APT01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC02</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC03</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC04</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC05</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC06</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>AAC07</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

       
        </div>
      
      
      <div className = "Feed">
      <header className="App-header">
        {<img src = "http://10.172.86.23/aac01/static/images/snake/SET_Logo.png" className="App-logo" alt="logo"/> }
        <p>
          AMS SET Power Switch Page
        </p>
        <a
          className="App-link"
          href="http://set.ad.goodmanmfg.com/air/ams_incident_login.php"
          target="_blank"
          rel="noopener noreferrer"
        >
          AMS Support Ticket Request
        </a>
      </header>
      </div>
      
      
      
      
      
      <div className = "Nav">
        <h3>Indoor Lines</h3> 
        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        <span>APK01</span><br/>
        <button>Dashboard</button>
        <button>Andon</button>
        <button>TV-3</button>
        <button>TV-4</button><br/>
        <button>Raspi-1</button>
        <button>Raspi-2</button>
        <button>PA-1</button>
        <button>PA-2</button><br/>
        <button>Power Cycle</button><br/>

        
      </div>
    </div>
  );
  }
}

export default App
