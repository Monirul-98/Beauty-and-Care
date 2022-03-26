import "./App.css";
import QueAns from "./components/QueAns/QueAns";
import Store from "./components/Store/Store";

function App() {
  return (
    <div className="App">
      <h1 className="my-3">Beauty and Care</h1>
      <Store></Store>
      <QueAns></QueAns>
    </div>
  );
}

export default App;
