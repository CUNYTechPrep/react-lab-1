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
      numbOfClicks: 0,
    };
  }

  handleClick(){
    // First approach
    // if (this.state.numdOfClicks < this.props.numBoards){
    //   this.setState({
    //     numdOfClicks: this.state.numdOfClicks += 1,
    //   });
    // }
    // else {
    //   this.setState({
    //     numdOfClicks: 0,
    //   });
    // }

    //Second approach
    this.setState({
      numbOfClicks: (this.state.numbOfClicks + 1) % this.props.numBoards,
    });
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.numbOfClicks;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button className="toggleBtn" onClick={ () => this.handleClick()}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
