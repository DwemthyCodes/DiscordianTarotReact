import React, { useMemo } from 'react';
import logo from './logo.svg';
import './App.css';
import { useDiscordianTarotDeck } from './TarotDeck';

function App() {
  const { draw } = useDiscordianTarotDeck()

  const past = useMemo(() => {
    console.log("drawing past")
    return draw()
  },[])

  const present = useMemo(() => {
    console.log("drawing present")
    return draw()
  },[])

  const future = useMemo(() => {
    console.log("drawing future")
    return draw()
  },[])
  return (
    <div className="App">
      <header className="App-header">
        <div>
          <h3>Past</h3>
          <p>{past.name}</p>
          <p>{past.meaning}</p>
        </div>
        <div>
          <h3>Present</h3>
          <p>{present.name}</p>
          <p>{present.meaning}</p>
        </div>
        <div>
          <h3>Future</h3>
          <p>{future.name}</p>
          <p>{future.meaning}</p>
        </div>
      </header>
    </div>
  );
}

export default App;
