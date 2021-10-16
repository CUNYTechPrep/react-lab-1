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

/*
inside of the BoardSwitcher, I made a constructor that takes in a prop and pass it into the 
super() method, as required by react

inside of the state object, I created a currentSelected key, instantiated with the value 0, to signify the 
0th box will be highlighed when button is pressed 

I then created a method / event handler  called "updateCurrentSelected()" t, and is responsible for 
updting the state object, created in the constructor. When we setState , ie. update the state object , we increment the currentSelected by 1.


*/
class BoardSwitcher extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      currentSelected:0,
    };
  }

  updateCurrentSelected(){
    this.setState({
      currentSelected : this.state.currentSelected +1
    });
  }
  render() {
    let boards = [];
    let numberOfBoards = this.props.numBoards;

    for (let ii = 0; ii < numberOfBoards; ii++) {
      let isSelected = ii === this.state.currentSelected % numberOfBoards;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={ ()=> this.updateCurrentSelected() }>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
