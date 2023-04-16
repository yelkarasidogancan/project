import "./App.css";

import { useState } from "react";

function App() {
  const [inputList, setInputList] = useState([]);
  const [isHovered, setIsHovered] = useState(false);
  const [isAdd, setIsAdd] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const [droppedItem, setDroppedItem] = useState(null);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  const handleDragStart = (event, control) => {
    event.dataTransfer.setData("control", control);
  };

  const handleDrop = (event) => {
    const control = event.dataTransfer.getData("control");

    switch (control) {
      case "input":
        setInputList([
          ...inputList,
          <input className="input" key={inputList.length} />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "textarea":
        setInputList([
          ...inputList,
          <textarea className="textarea" key={inputList.length} />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "input2":
        setInputList([
          ...inputList,
          <input className="input" key={inputList.length} />,
          <input className="input" key={inputList.length + 1} />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "date":
        setInputList([
          ...inputList,
          <input
            type="date"
            className="date"
            id="datemax"
            name="datemax"
            max="1979-12-31"
            key={inputList.length}
          />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "button":
        setInputList([
          ...inputList,
          <input
            type="button"
            className="button"
            value="Click Me!"
            key={inputList.length}
          />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      default:
        break;
    }
  };
  const handleDropClick = (event) => {
    setDroppedItem(selectedItem);
    setSelectedItem(null);
    const item = selectedItem;

    switch (item) {
      case "input":
        setInputList([
          ...inputList,
          <input className="input" key={inputList.length} />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "textarea":
        setInputList([
          ...inputList,
          <textarea className="textarea" key={inputList.length} />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "input2":
        setInputList([
          ...inputList,
          <input className="input" key={inputList.length} />,
          <input className="input" key={inputList.length + 1} />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "date":
        setInputList([
          ...inputList,
          <input
            type="date"
            className="date"
            id="datemax"
            name="datemax"
            max="1979-12-31"
            key={inputList.length}
          />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      case "button":
        setInputList([
          ...inputList,
          <input
            type="button"
            className="button"
            value="Click Me!"
            key={inputList.length}
          />,
        ]);
        setIsHovered(false);
        setIsAdd(false);
        break;
      default:
        break;
    }
  };

  const deleteItems = () => {
    setInputList([]);
  };

  const handleDragOver = (event) => {
    event.preventDefault();
    setIsHovered(true);
    setIsAdd(true);
  };
  const handleDragLeave = (event) => {
    event.preventDefault();
    setIsHovered(false);
    setIsAdd(false);
  };

  return (
    <>
      <div className="App">
        <div className="navbar">
          <div className="items">
            <div
              className="item"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, "input")}
              onClick={() => handleItemClick("input")}
            >
              Input
            </div>
            <div
              className="item"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, "textarea")}
              onClick={() => handleItemClick("textarea")}
            >
              Textarea
            </div>
            <div
              className="item double"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, "input2")}
              onClick={() => handleItemClick("input2")}
            >
              Double Input
            </div>
            <div
              className="item"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, "date")}
              onClick={() => handleItemClick("date")}
            >
              Date
            </div>
            <div
              className="item"
              draggable="true"
              onDragStart={(event) => handleDragStart(event, "button")}
              onClick={() => handleItemClick("button")}
            >
              Button
            </div>
          </div>

          <div>
            <div className="deleteButton" onClick={deleteItems}>
              Delete
            </div>
          </div>
        </div>
        <div className="rightSide">
          <div className="h1">{isAdd ? <h1>Drop</h1> : <h1>Drag</h1>}</div>
          <div
            className={`inputSide ${isHovered ? "hover" : " "}`}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            onClick={handleDropClick}
          >
            <div className="inside">{inputList}</div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
