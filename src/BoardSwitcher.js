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
  //set the current index
  constructor(props){
    super(props);
    this.state={
     currentIndex:0    
    }
  }
  
  //function to chnage the toggle button 
  ToggleHandler = () =>{
 
    let index = this.state.currentIndex;
 
    //if index equals 2 set it back to 0 else plus 1
    this.setState({
      currentIndex: index === 2 ? 0 : index+1
    })
    
  }
 
  render() {
    let boards = [];
    for (let ii = 0; ii < this.props.numBoards; ii++) {
      
      //change the number to this.state.currentIndex
      let isSelected = ii === this.state.currentIndex;
      
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} />
      );
    }
 
 
    return (
      <div>
        <div className="boards">{boards}</div>
        <button onClick={this.ToggleHandler}>Toggle</button>
      </div>
    );
  }
}
 
export default BoardSwitcher;

