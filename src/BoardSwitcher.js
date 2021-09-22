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
  constructor(){
    super();
    this.state = {
      selected: 0
    }
  } 

  toggle=()=>{
    if(this.state.selected !== 2)
      this.setState({
        selected: this.state.selected+1
      })
    if(this.state.selected === 2){
      this.setState({
        selected: 0
      })
    }
  }

  render() {
    let boards = [];
    
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selected;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.toggle}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
