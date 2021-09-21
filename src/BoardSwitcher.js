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
      selected: 0, //setting initial value
    }
    this.handleClick = this.handleClick.bind(this);
  }

  setToBoard(selected){
    this.setState({
      selected: selected
    });
  }
  
  handleClick() {
    if(this.state.selected + 1 === this.props.numBoards){
      this.state.selected = 0;
      this.setToBoard(this.state.selected);
    }
    else{
      this.state.selected = this.state.selected + 1;
      this.setToBoard(this.state.selected);
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
        <button onClick={() => this.handleClick()}>Toggle</button>
      </div>
    );

  }
}

export default BoardSwitcher;
