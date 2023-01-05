import React, { useState, useEffect } from "react";

function HookMouse() {
  const [x, setX] = useState(0);
  const [y, setY] = useState(0);

  const logMousePosition = (e) => {
    console.log("Mouse event");
    setX(e.clientX);
    setY(e.clientY);
  };

  useEffect(() => {
    console.log("useFffect called");
    window.addEventListener("mousemove", logMousePosition);

    return () => {
      console.log("Component unmounting code");
      window.removeEventListener("mousemove", logMousePosition);
    };
  }, []);
  //. A side effect is an action that affects something outside of the component itself,
  // but can also be donw sideeffects inside the function also
  return (
    <div>
      Hooks - X - {x} Y - {y}
    </div>
  );
}

export default HookMouse;
// when the component unmount the cleanup call which is inside the return part is called
// cleam up function is called before the component unmounts
