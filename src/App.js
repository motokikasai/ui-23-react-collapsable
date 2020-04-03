import React from "react";
import "./styles/App.css";
import data from "../src/data.json";
import Collapsable from "./components/collapsable";

function App() {
  return (
    <section>
      <h1>Collapsable List</h1>
      <ul className="App">
        {data.map(item => {
          return <Collapsable data={item} />;
        })}
      </ul>
    </section>
  );
}

export default App;
