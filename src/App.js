import React from "react";
// import logo from './logo.svg';
import "./App.css";
import Tabs from "./components/Tabs";

const tabs = [
  {
    label: "Tab 1 label",
    content: "Hello Lilly"
  },
  {
    label: "Tab 2 label",
    content: "Hello Chewie"
  },
  {
    label: "Tab 2 label",
    content: "Hello Smooch"
  }
];

function App() {
  return (
    <div className="App">
      <Tabs items={tabs} />
    </div>
  );
}

export default App;
