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
      sel: 0,
    };
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.sel;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
      
    }


    return (
      <div>
        <div className="boards">{boards}</div>
       {/* <p>The button has been clicked { this.state.sel } times</p> */}
        <button onClick={ (e) => this.handleClick(e) }>Toggle { this.props.btnText }</button>
      </div>
    );

  }

  handleClick(event) {
    if(this.state.sel===0){
      this.setState({
        sel: 1,
      });
      
    }
    if(this.state.sel===1){
      this.setState({
        sel: 2,
      });
      
    }
    if(this.state.sel===2){
      this.setState({
        sel: 0,
      });
      
    }
  }


}

export default BoardSwitcher;
