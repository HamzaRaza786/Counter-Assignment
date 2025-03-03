import { useState } from 'react'
import './App.css'
import { CounterContext } from './CounterContext';
import { CounterButton } from './components/CounterButton';

function App() {
  const [count, setCount] = useState(0)

  return (
      <CounterContext.Provider value={{ currentCount: count, updateCount: setCount }}>
        <CounterButton />
      </CounterContext.Provider>
  );
}
export default App
