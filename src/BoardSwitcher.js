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
            toggledIndex: 0,
            boards: []
        }
        /* Create the boards and set first board to be selected. */
        for (let i = 0; i < this.props.numBoards; i += 1) {
            this.state.boards.push(<Board index={i} selected={i === 0} key={i}/>)
        }
    }

    /* Update index of next selected board. If index out of bounds, wrap around. */
    updateToggleIndex() {
        let boardsCopy = this.state.boards;
        let newIndex = (this.state.toggledIndex + 1) % this.state.boards.length;
        let oldIndex = (newIndex - 1 < 0) ? this.state.boards.length - 1 : newIndex - 1;
        /* Toggle the board at the new index. */
        boardsCopy[newIndex] = <Board index={newIndex} selected={true} key={newIndex}/>
        /* Un-toggle the board at the new index if numBoards > 1, else leave it toggled. */
        if (this.props.numBoards !== 1) {
            boardsCopy[oldIndex] = <Board index={oldIndex} selected={false} key={oldIndex}/>
        }

        this.setState({toggledIndex: newIndex, boards: boardsCopy})
    }

    render() {
        return (
            <div>
                <div className="boards">{this.state.boards}</div>
                <button onClick={() => this.updateToggleIndex()}>Toggle</button>
            </div>
        );
    }
}

export default BoardSwitcher;
