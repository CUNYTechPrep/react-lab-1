import React, { useState } from "react";

const Board = ({ val, isSelected }) => {
  if (val === isSelected) {
    return <div className="board selected"> {val} </div>;
  } else {
    return <div className="board"> {val} </div>;
  }
};

const BoardSwitcher = ({ numBoards }) => {
  const [isSelected, setIsSelected] = useState(1);
  let [numberOfBoards, setNumberOfBoards] = useState(numBoards);
  let arr = [];
  for (let i = 1; i <= numBoards; i++) {
    arr.push(i);
  }
  const toggleFrame = () => {
    setIsSelected(isSelected + 1);
    if (isSelected > numberOfBoards - 1) {
      setIsSelected(1);
    }
  };

  return (
    <div>
      <div className="boards">
        {arr.map((val) => {
          return <Board val={val} isSelected={isSelected} />;
        })}
      </div>
      <button onClick={toggleFrame}>Toggle</button>
    </div>
  );
};

export default BoardSwitcher;
