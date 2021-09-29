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
    super(props); // required so that props work
    this.state = {clicks: 0,};
  }

  handleClick(event) {
    this.setState({
      clicks: this.state.clicks + 1
    });
    if(this.state.clicks > 1){
      this.setState({
        clicks: 0
      });
    }
  }
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.clicks;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={ (e) => this.handleClick(e) }>{ this.props.btnText }Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;


















