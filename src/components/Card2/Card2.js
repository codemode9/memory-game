import React, { Component } from "react";

class Card2 extends Component {

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
        <img src={"https://cdn.bulbagarden.net/upload/thumb/2/2a/104Cubone.png/250px-104Cubone.png"} onClick={this.clickLevelChange} alt=""/>
    </div>
    );}}
export default Card2;