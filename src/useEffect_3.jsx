// main part of use effect: conditional rendering
import React, { useEffect, useState } from "react";
export default function () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating");
    document.title = ` You clicked ${count} times`;
  }, [count]);
  // eqiuivalent to if (count changes){
  // then the use effect component is executed
  // else  nothing will be changed in the terminal
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/*important part about this is whenever the count value is changing only the useeffect function will change
       */}

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
