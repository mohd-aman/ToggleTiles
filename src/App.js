import logo from "./logo.svg";
import "./App.css";
import useReactKeypress from "./hooks/useReactKeypress";
import { useEffect, useState } from "react";
import data from "./data/resonateData.json";
import Tile from "./components/Tile";
import RegisteredCombo from "./components/RegisteredCombo";

function App() {
  const {
    addKeyPressListener,
    removeKeyPressListener,
    getAllRegisteredCombos,
  } = useReactKeypress();

  const [showD, setShowD] = useState(true);
  
  return (
    <>
      <div className="tiles-container">
        {data.tiles.filter(({value})=>{
          return !(value === 'D' && !showD)
        }).map(({ id, value, combo }) => {
          return (
            <Tile
              key={id}
              name={value}
              addKeyPressListener={addKeyPressListener}
              combo={combo}
              removeKeyPressListener={removeKeyPressListener}
            />
          );
        })}
      </div>
      <div className="details-container">
        <button onClick={() => setShowD(false)}>Unmount D</button>
        <RegisteredCombo getAllRegisteredCombos={getAllRegisteredCombos} />
      </div>
    </>
  );
}

export default App;
