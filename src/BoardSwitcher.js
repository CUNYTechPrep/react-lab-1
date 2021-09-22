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
    this.state = {
      clicks: 0,
    }
  }

  handleClick(event) {
      this.setState({
        clicks: (this.state.clicks + 1)%3
      });
  }


  render() {
    let boards = [];
    console.log(this.state.clicks)
    for (let i = 0; i < this.props.numBoards; i++) {
      let isSelected = i === this.state.clicks;
      boards.push(
        <Board index={i} selected={isSelected} key={i} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={(e) => this.handleClick(e)}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
