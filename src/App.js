import { Component } from 'react';
import Imag  from './images/img1.png';


class App extends Component{
  constructor(){
    super();
    this.state = {
      //number:1,
      show : true,
      Person : { 
                fullName : "RHIF MAROUEN",
                bio : "DEVLOPPEUR WEB", 
                imgSrc: Imag, 
                profession:"DOVLOPPEUR "
              },
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

  render(){
    if(this.state.show)
    return (
      <div className="container">
        <button className="btn btn-primary" onClick={this.clickHandler}>Hide</button>
        <br/>
        <img src={Imag} alt="imag" width="400" height="430" />
        <h1>{this.state.Person.fullName}</h1>
        <h2>{this.state.Person.bio}</h2>
        <h2>{this.state.Person.profession}</h2>
      </div>
      );
      else return (
        <div className="container">
      <button className="btn btn-primary" onClick={this.clickHandler}>Show</button>
      </div>
      );
  }
}

export default App;