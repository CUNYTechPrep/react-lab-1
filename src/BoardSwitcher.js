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
    this.state={
      selected : 0 
    };
  }

  respondToMe(event){
    this.setState({
      selected: function(){
        if(this.state.selected + 1 <= this.numBoards){
        return this.state.index + 1;
      
      }else{
        return 0;
      }
    }
    });
  }

  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      let isSelected = ii === this.state.selected;
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} /> //isSelected must increment
      );
    }

    return (
      <div> 
        <div className="boards">{boards}</div>
        <button onClick={(e)=>{this.respondToMe(e)}}>Toggle</button>
      </div>
    );
  }
}



export default BoardSwitcher;
