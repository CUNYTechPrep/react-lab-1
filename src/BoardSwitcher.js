import React from 'react';
import ToggleButton from './ToggleButton'

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

  // constructor(props){
  //   super(props);
  //   this.state = {boardToToggle: 0}
  // }
  
  state = {
    boardToToggle: 0
  }

  toggleButton = () => {
    this.setState({
      boardToToggle: (this.state.boardToToggle + 1) % 3
    });
  }

  



  render() {
    let boards = [];
    console.log("value of toggle:", this.state.boardToToggle);

    // 0, 1, 2; will only be true/1 when ii is 0 via the loop -> need to cycle through === 0, 1, 2 somehow in the isSelected statement
    // store some state, when you toggle the button, add + 1, then do mod 3, so that the numbers cycle from 0->2

    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.boardToToggle;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (

      // <ToggleButton>
      //   {/* {boards} */}
        
      // </ToggleButton>

        <div>
        <div className="boards">{boards}</div>
        <button onClick={this.toggleButton}>Toggle</button>
      </div>
      
    
      

    );

  }
}

export default BoardSwitcher;

