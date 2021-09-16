import React, {useState} from 'react';

const Board = ({index, selected, setActive}) => {
    const handleStyling = () => selected ? " selected" : "";

    return (
        <div className={"board " + handleStyling()}>
            {index + 1}
        </div>
    )
}

const BoardSwitcher = ({numBoards}) => {
    const [active, setActive] = useState(0);

    const generateBoards = () => {
        const boards = [];

        for (let i = 0; i < numBoards; i++) {
            boards.push(<Board index={i} selected={i === active} key={i} setActive={setActive}/>)
        }

        return boards
    }

    const handleToggleClick = () => setActive((active + 1) % 3);

    return (
        <div>
            <div className={"boards"}>{generateBoards()}</div>
            <button onClick={handleToggleClick}>Toggle</button>
        </div>
    )
}

export default BoardSwitcher;
