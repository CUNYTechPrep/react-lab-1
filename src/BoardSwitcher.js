//This program allows us to cycle through frames by allowing us to
//Toggle our frame on the next board when the toggle button is clicked

import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      selected : 0 
    };
  }

  //response of the click function

  respondToMe(event){

    //I call a function inside setState which is passed the 
    //component state from when that setState was called - which I call previousState

    this.setState((previousState) => {

      //if the selected previousState (0-2) is equal to this.props.numBoards-1 
      //(because selected begins from 0, otherwise we would have to do an extra click)
      //we restart the selected state at 0, otherwise we increment the state

      if (previousState.selected === this.props.numBoards-1){
        return{
          selected : 0
        }
      }
      return {
        selected: previousState.selected +1
      }
    }); 
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selected;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} /> 
      );
      console.log(this.state.selected)
    }

    return (
      <div> 
        <div className="boards">{boards}</div>
        <button onClick={(e)=>{this.respondToMe(e)}}>Toggle</button>
      </div>
    );
  }
}



export default BoardSwitcher;
