// use effect from codesandbox
// update document title
// close replacement for componentdidmount, did update , willmount
import React, { useState, useEffect } from "react";
export default function () {
  const [count, setCount] = useState(0);
  // use effect is a function
  useEffect(() => {
    document.title = ` You clicked ${count} times`;
  });
  // simple use effect example to update the document title
  // runs after every render
  return (
    <div>
      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
