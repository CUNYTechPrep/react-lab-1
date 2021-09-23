import React from "react";

class Board extends React.Component {
  render() {
    let className = "board";
    if (this.props.selected) {
      className += " selected";
    }
    return <div className={className}>{this.props.index + 1}</div>;
  }
}

class BoardSwitcher extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicks: 0,
    };
  }

  handleClick(event) {
    this.setState({
      clicks: this.state.clicks + 1,
    });
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      //check if the index matches the clicks number then state its true and display the border around the clicked BoardSwitcher
      let isSelected = ii === this.state.clicks;
      boards.push(<Board index={ii} selected={isSelected} key={ii} />);
      //once the clicks go past numofBoards reset to default start
      if (this.state.clicks === this.props.numBoards) {
        this.setState({
          clicks: 0,
        });
      }
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        {/*on click return  */}
        <button onClick={(e) => this.handleClick(e)}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
