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
  constructor(props) {
    super(props);
    this.state = {counter: 0, binaryMode: false};
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected;
      if(this.state.binaryMode){
        isSelected = (((this.state.counter % 2**(this.props.numBoards))) >> (ii)) & 1;
      }else{
        isSelected = this.state.counter % this.props.numBoards === ii;
      }
      
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={()=> this.setState({counter: this.state.counter + 1})}>Toggle</button>
        <button onClick={()=> this.setState({binaryMode: !this.state.binaryMode})}>ToggleBinaryMode</button>
      </div>
    );
  }
}

export default BoardSwitcher;
