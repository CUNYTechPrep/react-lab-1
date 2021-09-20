import React from 'react';

//Note: using the React.Component we can define a component and we must use the render() method
//other methods are optional

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
  toggleClick(){
     console.log('melissa');
   }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) { //numBoards is passed in through the index.js file and sets this to 3 
      let isSelected = ii === 0; // this controls which board is selected this also determines the value isSelected (true or false)
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} /> //index displays the number on the board; selected highlights the board; 
      );
    }


    return ( //this displays the boards and the toggle button
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.toggleClick}>Toggle</button> 
      </div>
    );
  }
}

export default BoardSwitcher;
