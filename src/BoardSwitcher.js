import React from 'react';
//import ReactDOM from 'react-dom'

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

  constructor(props) {
    super(props);
    this.state = {
    selectedIndex: 0
    }    
    }

    onToggleClick = (event) => {
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
    });
  }

  render() {
    let boards = []; //array
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selectedIndex;
      
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher