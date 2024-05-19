import { useState } from "react";
import ConfigureCounter from "./components/Counter/ConfigureCounter.jsx";
import Counter from "./components/Counter/Counter.jsx";
import Header from "./components/Header.jsx";

function App() {
  const [chosenCount, setChosenCount] = useState(0);

  function handleSetCount(newCount) {
    setChosenCount(newCount);
  }

  return (
    <>
      <Header />
      <main>
        <ConfigureCounter onSet={handleSetCount} />
        <Counter key={chosenCount} initialCount={chosenCount} />
      </main>
    </>
  );
}

export default App;
