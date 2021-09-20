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
    selectedIndex: 0
    }
    
  }

  onToggleClick = (event) =>  {
    // Here's the meat of the problem. Notice how we can use this.props here (and anywhere else in the component).
    // When this is called, React updates the state and updates the UI to reflect the new render output.
    this.setState({
      selectedIndex: (this.state.selectedIndex + 1) % this.props.numBoards
    })
  
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selectedIndex;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.onToggleClick}>Toggle</button>
        
      </div>
    );
  }
}

export default BoardSwitcher;
