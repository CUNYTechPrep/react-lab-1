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
    state = {
        iiBox : 0,
    };
  toggleBox(event) {
    if(this.state.iiBox >= 2){
      this.state.iiBox -=3
    }
    this.setState({
      iiBox : this.state.iiBox + 1
    });
  }
  render() {
    let boards = [];
    let boxNum = this.state.iiBox
    // if (boxNum >2) {
    //   this.state.iiBox -= 2;
    // }
    for (let ii = 0; ii < this.props.numBoards; ii++) {

      let isSelected = ii === boxNum;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }


    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick= {(e) => this.toggleBox() }  >Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
