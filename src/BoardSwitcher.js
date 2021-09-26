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
    currentNumber: 0,
    boards: []
    };

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    if(this.state.currentNumber === this.props.numBoards-1){
      this.setState({currentNumber : 0})
    }else{
      this.setState({currentNumber : this.state.currentNumber+1})
    }
    let currentBoards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.currentNumber;
      currentBoards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
     this.setState({boards : currentBoards})
  }
  
  componentDidMount(){
    let currentBoards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === 0;
      currentBoards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
     this.setState({boards : currentBoards})
  }

  render() {
    

    return (
      <div>
        <div className="boards">{this.state.boards}</div>
        <button onClick={this.handleClick}>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
