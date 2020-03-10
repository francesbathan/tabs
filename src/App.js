import React from "react";
// import logo from './logo.svg';
import styles from "./App.css";
import Tabs from "./components/Tabs";
import ToDoList from "./components/ToDoList";

const tabs = [
  {
    label: "Tab 1 label",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Et blanditiis cum non? Molestiae, tenetur dolore. Recusandae, nulla? Nobis voluptatibus sapiente nihil ipsam. Iure dolores vitae perspiciatis, sapiente nihil cupiditate aliquid."
  },
  {
    label: "Tab 2 label",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates perspiciatis. Earum expedita dolore labore mollitia ad assumenda veniam, recusandae sed, iste porro repudiandae accusantium sunt doloremque commodi in quis."
  },
  {
    label: "Tab 3 label",
    content:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea, voluptates perspiciatis. Earum expedita dolore labore mollitia ad assumenda veniam, recusandae sed, iste porro repudiandae accusantium sunt doloremque commodi in quis."
  }
];

function App() {
  return (
    <div className="App">
      <Tabs items={tabs} className={styles.Tabs} />
      <ToDoList className={styles.ToDo} />
    </div>
  );
}

export default App;
