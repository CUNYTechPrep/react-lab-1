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
    super(props)
    this.state = {
      currentSelected: 0
    }
  }

  handleClick(){
    if(this.state.currentSelected === 2)
      this.setState({currentSelected: 0})
    else
      this.setState({currentSelected: this.state.currentSelected + 1})
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.currentSelected;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick = {() => this.handleClick()}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
