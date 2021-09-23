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

  // set it to 0 
  state = {
    clicks: 0,
  };

  // increase 1 when user clicks
  handleClick(event) {
    this.setState({
      clicks: this.state.clicks + 1
    });
  }

  render() {

    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {


      // Line 37 - 45 is new code
      
      // when the number is 3, clicks beack to 0
      if(this.state.clicks === 3){
        this.state.clicks = 0;
      }

      // let isSelected = ii === 0; the number can be 0, 1 , 2
      let isSelected = ii === this.state.clicks;

      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={ (e) => this.handleClick(e)} >Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
