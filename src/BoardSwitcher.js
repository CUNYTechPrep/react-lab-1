import React from 'react';
//import ReactDOM from 'react-dom'


class Board extends React.Component {
  // constructor(props) 
  //   super(props);
  state={
    start_at:0
  }

  handleClick=(event)=>{
    this.setState({start:(this.state.start_at+1) % 3})
  }
  // render() {
  //   let className = "board";
  //   if (this.props.selected) {
  //     className += " selected";
  //   }
  //   return (
  //     <div className={className}>
  //       {this.props.index + 1}
  //     </div>
  //   );
  // }
}

class BoardSwitcher extends React.Component {
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      
      let isSelected = ii === 0;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }

    return (
      <div>
        <div className="boards">{boards}</div>
        <button>Toggle</button>
      </div>
    );
  }
}

export default BoardSwitcher;
