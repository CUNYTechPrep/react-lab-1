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



class BoardSwitcher extends React.Component{
  getInitialState(){
    return{
    selectedIndex:0
    }
  }

  onToggleClick(evt){
    this.setState({

      selectedIndex: (this.state.selectedIndex) % this.props.numBoards
    })
  }


  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selectedIndex;
      //change this so that ii === a variable??

      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      )
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>
    );
}
}

export default BoardSwitcher;
