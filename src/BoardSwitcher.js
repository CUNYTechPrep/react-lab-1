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
      click:0
    }
  }

  
  isClicked= () => {
      if(this.state.click < 2){
      this.setState({
        click: this.state.click = this.state.click + 1
      });
    }
    else{
      this.setState({
        click: this.state.click = 0
      });
    }
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.click;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={() => this.isClicked()}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
