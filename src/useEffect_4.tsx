// another example
// run effect only once
// program to get the mouse position in the window continuosly
import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);
  // making the default values of the mouse

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };
  // getting the current value of mouse position
  //
  // The useEffect hook takes a callback function that will be run after the component renders
  useEffect(() => {
    // This callback function is used to perform side effects, such as setting up event listeners
    console.log("useFffect called");
    window.addEventListener("mousemove", logMousePosition);
  }, []);
  // when we are adding blank listbox it limits the ahowing part only once
  // Only run this effect once, when the component mounts
  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
// . A side effect is an action that affects something outside of the component itself,
