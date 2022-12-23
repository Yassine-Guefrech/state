import React from 'react';

class Profile extends React.Component{
    constructor(){
      super()
      this.state={
        fullName : "langer anticule",
        bio : "i am a web developper",
        imgSrc:"/anticule.png", 
        profession : 'Batal',
        counter : 0
      }
    }

    componentDidMount(){
      setInterval(() => {
        this.setState({counter : this.state.counter +1})
      },1000);
    }

    render(){
      return (
        <div>
          <h1>{this.state.counter}</h1>
           <h1>{this.state.fullName}</h1>
           <img src={this.state.imgSrc} alt='Not Found'/>
           <h3>{this.state.bio}</h3>
           <h4>{this.state.profession}</h4>
           
        </div>
      );
      }
    }
    export default Profile