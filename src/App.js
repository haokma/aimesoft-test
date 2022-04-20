import "./App.css";
import { useScroll, useDebounce } from "./hooks";

function App() {
  const { scrollTop } = useScroll();
  const debounced1 = useDebounce(() => console.log(1), 3000);
  const debounced2 = useDebounce(() => console.log(2), 3000);
  const debounced3 = useDebounce(() => console.log(3), 3000);

  return (
    <div className="App">
      <button onClick={debounced1}>Debounce1</button>
      <button onClick={debounced2}>Debounce2</button>
      <button onClick={debounced3}>Debounce3</button>
      <button onClick={debounced1.cancel}>Cancel1</button>
      <button onClick={debounced2.cancel}>Cancel2</button>
      <button onClick={debounced3.cancel}>Cancel3</button>
    </div>
  );
}

export default App;
