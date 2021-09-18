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
    this.state = {
      clicks: 0,
    };
  }

  onToggle = () => {
    let numberOfClicks = this.state.clicks;
    this.setState( {
      clicks:  numberOfClicks >= 2 ?   0  : numberOfClicks + 1
      //if clicks >= 2 then set to 0 else clicks + 1
    })
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
        <button onClick={ this.onToggle}>Toggle</button>
      </div>
    );
  }

}

export default BoardSwitcher;
