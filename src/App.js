import "./App.css";
import React from "react";
import Accordion from "./Accordion";

function App() {
  const items = [
    {
      id: 1,
      title: "Where are the chairs",
      content: "here are the chairs",
      open: false,
    },
    {
      id: 2,
      title: "Where are the apples",
      content: "here are the apples",
      open: false,
    },
    {
      id: 3,
      title: "Where are the people",
      content: "here are the people",
      open: false,
    },
  ];

  const [boxes, setBoxes] = React.useState(items);

  function toggleOpen(id) {
    setBoxes((prev) =>
      prev.map((box) =>
        box.id === id
          ? { ...box, open: !box.open }
          : { ...box, open: prev.some((box) => box.open) ? false : box.open }
      )
    );
    console.log(boxes);
  }

  const accordions = boxes.map((box) => (
    <Accordion
      toggleOpen={() => toggleOpen(box.id)}
      key={box.id}
      title={box.title}
      content={box.content}
      open={box.open}
    />
  ));

  return <>{accordions}</>;
}

export default App;
