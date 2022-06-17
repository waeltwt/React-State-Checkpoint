import React from 'react';
import './App.css';
import myimage from './wael.jpg'

class Profile extends React.Component {
constructor(props){
  super(props);
  this.state= {person:{
    counter: 0,
    name : 'wael',
    profession :'developer web',
    Bio:'I am looking for a job',
    image: myimage
    
  } }}


  render() {
    return (
    <div>
    
    <img src={this.state.person.image} alt='anyimage'/>      
    <h3>full name : {this.state.person.name}</h3>
    <h3>profession : {this.state.person.profession}</h3>
    <h3>Biography : {this.state.person.Bio}</h3>
    
    

    
    </div>
    ) }
}

export default Profile;