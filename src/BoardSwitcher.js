import React from 'react';

//Note: using the React.Component we can define a component and we must use the render() method
//other methods are optional

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


//extends means create a class as a child of another class; in this case BoardSwitcher is the child of the Component class
//react components have a built-in state object - we can store property values that belong to the component; the state object is initialized in the constructor 
//it can contain any number of properties; to refer to the state object anywhere in the component use this.state.propertyName and its referred to in the render method
//To change a value in the state object, use the this.setState({}) method. This causes the component to re-render and update the necessary values
// The constructor() method is called before anything else, when the component is initiated, and it is the natural place to set up the initial state and other initial values.
// The constructor() method is called with the props, as arguments, and you should always start by calling the super(props) before anything else, 
// this will initiate the parent's constructor method and allows the component to inherit methods from its parent (React.Component).
//Constructor - method for creating and initializing an object; cannot have more than one constructor, will throw an error

//we can access props in the Class by using the this.props.propertyName; we dont have to pass it through the render method, the entire class obtains props - read-only - immutable
//we can just create the state object on our own no need for the constructor
class BoardSwitcher extends React.Component {
  
  state = {
    clicks:0, //this keeps track of how many times the toggle button is clicked and this will help us to select the next board in the list =
  };
  
  toggleClick(event){
    this.setState({
      clicks: this.state.clicks + 1 //once we click the toggle button update the clicks property by adding 1
    });
    if(this.state.clicks === 2){ //if the clicks is at 2 that means its on the last board #3 and it should go back to board #1 which results in clicks being 0
      this.setState({
        clicks: 0
      });
    }
  }

  render() {
    let boards = [];
    
    for (let ii = 0; ii < this.props.numBoards; ii++) { //numBoards is passed in through the index.js file and sets this to 3 
      let isSelected = ii === this.state.clicks; // this controls which board is selected this also determines the value isSelected (true or false)
      boards.push(
        <Board index={ii} selected={isSelected} key={ii} /> //index displays the number on the board; selected highlights the board; 
      );
    }


    return ( //this displays the boards and the toggle button
      <div>
        <div className="boards">{boards}</div>
        <button onClick={(e) => this.toggleClick(e)}>Toggle</button> 
      </div>
    );
  }
}

export default BoardSwitcher;
