import {useState} from "react";

interface Coordinates{
  x: number,
  y: number
}

function App() {
  const[coordinates, setCoordinates] = useState<Coordinates>();
  /* const [x, setX] = useState(0);
  const [y, setY] = useState(0); */
  // x en y waardes die coordinaten beschrijven!

  const setRandom = () => {
    let x = Math.floor(Math.random() * window.innerWidth);
    let y = Math.floor(Math.random() * window.innerWidth);

    setCoordinates({x,y});
    /* setX(x);
    setY(y); */
  }
  return (
    <div
    style={{paddingTop: "10%",
    paddingBottom:"32%",}}
     className="App">
      <button onClick={setRandom}>Random Cage</button>
      {/* x !== 0 && y ! == 0 */ coordinates && 
      (<img src="https://www.placecage.com/gif/200/200" style={{position: "fixed", top:coordinates.x, left: coordinates.y}}/>
    )}
    </div>
  );
}

export default App;
