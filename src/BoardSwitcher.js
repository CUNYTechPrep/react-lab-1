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

class BoardSwitcher extends React.Component{

    constructor(props){
        super(props)

        this.state={
            selected:0
        }
    }

    handleButtonClick(){
        this.setState({selected: this.state.selected + 1} 
        )}

render() {
    let boards = [];

    for (let ii = 0; ii < this.props.numBoards; ii++) {
        //issSelected becomes selected board which starts from 0 % the number of boards 

        let isSelected =  this.state.selected % this.props.numBoards === ii;
        boards.push(
            <Board index={ii} selected={isSelected} key={ii} />
        );
    }

        return (
        <div>
            <div className="boards">{boards}</div>
            <button onClick ={()=>this.handleButtonClick()}>Toggle</button>
        </div>
        );
        
    }
}

export default BoardSwitcher;
