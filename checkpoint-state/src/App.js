import React, { Component } from 'react'
import ProfileImg from './Profile'

export default class App extends Component {
  constructor(props){
    super(props)
    this.state={
      fullName:"Moemen Saied",
      bio: "Hi, I'm Moemen, a passionate web developer with 0 years of experience creating dynamic and user-friendly websites My expertise lies in front-end development, including HTML, CSS, and JavaScript, as well as various front-end frameworks such as React and Vue. I take pride in writing clean, well-documented code that is easy to maintain and scale.",
      imgSrc: "/avatar.png",
      profession:"Web Developer",
      show:false,
      mountedTime: 0,
    }
  }
  show=()=> {
    this.setState({show:!this.state.show})
  }

  componentDidMount() {
    this.startTime = new Date().getTime();

    // Update elapsed time every second
    this.intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const elapsedTimeInSeconds = Math.floor((currentTime - this.startTime) / 1000);
      this.setState({ elapsedTime: elapsedTimeInSeconds });
    }, 1000);
  }
  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    return (
      <div>
          <button onClick= {()=>{this.show();this.componentDidMount()}} style={{
    textAlign:"center",
    padding: "9px 25px",
    backgroundColor: "black",
    borderRadius:"40px",
    color:"aliceblue",
}}> 
          {this.state.show ? 'Hide Profile' : 'Show Profile'}
          </button>
          {this.state.show ? <ProfileImg fullName={this.state.fullName} 
          pic={this.state.imgSrc}
          bio={this.state.bio} 
          profession={this.state.profession}>
          </ProfileImg> : null} 
          <p>Time since last mount: {this.state.elapsedTime} seconds</p>

      </div>
    )
  }
}
