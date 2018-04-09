import React, { Component } from "react";

class Card1 extends Component {

    state = {
        levelOfClick: 2
        
    };
    
    
    

clickLevelChange = event => {
    //const { name, value } = event.target;
    
    this.setState({
        levelOfClick: -1
    })
    
    if (this.state.levelOfClick<=0) {
        alert ("You Lose!")
        this.setState({
            levelOfClick: +2
        })
    }
}


render() {
    return(
    <div className="card">
        <img src={"https://cdn.bulbagarden.net/upload/thumb/c/c6/094Gengar.png/250px-094Gengar.png"} onClick={this.clickLevelChange} alt=""/>
    </div>
    );}}
export default Card1;