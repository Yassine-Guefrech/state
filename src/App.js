import React from 'react';
import './App.css';
import Profile from './Profile/Profile';


class App extends React.Component{
constructor(){
  super()
  this.state={
    show:false
  }
}
  handleShow =()=> this.setState({show :!this.state.show})
render(){
  return (
    <div>
   
      <button onClick={this.handleShow}> {this.state.show ? 'Hide' : 'Show'} </button> 

      {
        this.state.show &&    <Profile/>
      }
    </div>
  );
}
}

export default App;
