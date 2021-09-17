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
  state ={
    item: 0
  }
  constructor(props){
    super(props);
    this.changeItem = this.changeItem.bind(this);
  }
  changeItem(){
    if(this.state.item === this.props.numBoards - 1){
      this.setState({
        item: 0
      });
    } else {
      this.setState({
        item: this.state.item + 1
      })
    }
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.item;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button
          onClick={this.changeItem}
        >Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
