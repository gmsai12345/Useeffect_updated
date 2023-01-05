import React, { useEffect, useState } from "react";
export default function () {
  const [count, setCount] = useState(0);
  const [name, setName] = useState("");
  useEffect(() => {
    console.log("updating");
    document.title = ` You clicked ${count} times`;
  });
  return (
    <div>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      {/* the basic thing about this program is whenever the user writes on box it 
      renders evdrytime for each character typed then in the terminal box it keeps on adding after
      every character*/}

      <button onClick={() => setCount(count + 1)}>{count}</button>
    </div>
  );
}
