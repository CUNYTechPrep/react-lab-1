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
      select: 0
    }
  }
  next(){
    this.setState({select: (this.state.select+1)%3});
  }
  
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.select;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={()=>this.next()}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
