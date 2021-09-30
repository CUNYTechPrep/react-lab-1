import React from 'react';

class Board extends React.Component {
  render() {
    let className = "board";

    //If the selected property is set to true (when index is proper)
    //will add " selected" className which will cause the CSS 
    //to take effect
    if (this.props.selected) {
      className += " selected";
    }
    //returns a div that has a text of the card number(+1 b/c of
    //indexing). The "board" CSS affects all of them while the 
    //"selected" CSS affects one of them
    return (
      <div className={className}>
        {this.props.index + 1}
      </div>
    );
  }
}

class BoardSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = { key: 0 }
  }

  //Test to see how events work
  // handleClick(){
  //   alert("BRUH")
  // }



  //Once the user interacts w/ the board, this will take place



  render() {
    //Initializes the board


    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      //If the key is bigger than the number of boards, will restart counter
      if (this.state.key === this.props.numBoards) {
        this.setState({ key: 0 })
      }
      //isSelected will be a boolean variable that holds the index of the selected board
      let isSelected = ii === this.state.key;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      //When the button is clicked, the key will increment. This key will serve as 
      //an pointer for the board that will be selected.
      <div>
        <div className="boards">{boards}</div>

        <button onClick={(e) => this.setState({ key: this.state.key + 1 })}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
