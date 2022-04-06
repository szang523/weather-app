import "./App.css";
import Search from "./components/Search/Search";

function App() {
  const apiKey = "96b7e702087a5e96f30cc8a2e1e36891";

  return (
    <div className="container">
      <h1> Weather App </h1>
      <Search />
    </div>
  );
}

export default App;
