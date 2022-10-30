import { Component } from 'react';
import Imag  from './images/img1.png';
import  "./App.css" 


class App extends Component{
  constructor(){
    super();
    this.state = {
      
      show : true,
      Person : { 
                fullName : "RHIF MAROUEN",
                bio : "DEVLOPPEUR WEB", 
                imgSrc: Imag, 
                profession:"DOVLOPPEUR ",
                },
                time:0,
              }
    
    this.clickHandler = this.clickHandler.bind(this);
  }
  


  clickHandler(){
    this.setState(function (prevState){
      return{
        show : !prevState.show ,
      }
    });
  }
  componentDidMount() {
    setInterval(() => {
      this.setState((previousState) => ({
      time: previousState.time + 1,
      }));
    }, 1000);
  }


  render(){
    if(this.state.show)
    return (
      <div className="container">
         <button type="button" className="btn btn-warning" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={Imag} alt="imag" width="300" height="230" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
        <h2>{this.state.time}</h2>
      </div>
      );
      else return (
        <div className="container">
          <button type="button" className="btn btn-warning" onClick={this.clickHandler}>Show</button>
      
      </div>
      );
  }
}

export default App;