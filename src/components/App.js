import React from 'react'
import '../styles/App.css';
const App = () => {
const [shape, setShape] = useState("Square");

  const handleShapeChange = (event) => {
    setShape(event.target.value);
  };

  const handleAddShapeClick = () => {
    const divClass = shape === "Square" ? "square" : "circle";
    const div = <div className={divClass} />;
    document.getElementById("shapes-holder").appendChild(div);
  };
  return (
    <div id="main">
      <div id="shape-creator">
        <select onChange={handleShapeChange}>
          <option value="Square">Square</option>
          <option value="Circle">Circle</option>
        </select>
        <button onClick={handleAddShapeClick}>Add Shape</button>
      </div>
      <div id="shapes-holder">
      </div>
    </div>
  )
}


export default App;
