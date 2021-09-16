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
        /* state consists of the array of boards and currently selected board */
        let boards = [];
        /* Create the boards and set first board to be selected. */
        for (let i = 0; i < this.props.numBoards; i += 1) {
            boards.push(<Board index={i} selected={i === 0} key={i}/>)
        }
        this.state = {
            toggledIndex: 0,
            boards: boards
        }


    }

    /* Update index of next selected board. If index out of bounds, wrap around. */
    updateToggleIndex() {
        let newIndex = (this.state.toggledIndex + 1) % this.state.boards.length;
        this.setState({toggledIndex: newIndex});
    }

    render() {
        let newIndex = this.state.toggledIndex;
        this.state.boards[newIndex] = <Board index={newIndex} selected={true} key={newIndex}/>
        /* Unselect the old index, wrap around if old index is out of bounds */
        let oldIndex = (newIndex - 1 < 0) ? this.state.boards.length - 1 : newIndex - 1;
        this.state.boards[oldIndex] = <Board index={oldIndex} selected={false} key={oldIndex}/>

        return (
            <div>

                <div className="boards">{this.state.boards}</div>
                <button onClick={() => this.updateToggleIndex()}>Toggle</button>
            </div>
        );
    }
}

export default BoardSwitcher;
