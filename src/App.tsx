import "./App.css";
import { CounterProvider } from "./CounterContext";
import { CounterButton } from "./components/CounterButton";

function App() {
  return (
    <CounterProvider>
      <CounterButton />
    </CounterProvider>
  );
}
export default App;
