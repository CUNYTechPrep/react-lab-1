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
    this.state={
      isSelected: 0
    }
  }
  handleclick = () =>{
      this.setState({
        isSelected: this.state.isSelected>1? 0:this.state.isSelected+1
    }
      )
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
       let isSelected = ii === this.state.isSelected;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }



    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.handleclick}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
