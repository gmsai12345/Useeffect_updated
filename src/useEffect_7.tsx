// fetchin data from api using button click
import React, { useState, useEffect } from "react";
import axios from "axios";
// post use statate is used for getting the api data therefore if
// whenver some value has to be updated or it gets changed after render we have to use use state
//  id is also used to get the id submitted by the user to fetch
// id on button click is noted in use state idFromButtonClick
// and only when the button is clicked it will post the data according to the id submitted by user
// and then displayed in body
function DataFetching() {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [idFromButtonClick, setIdFromButtonClick] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${id}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [idFromButtonClick]);

  const handleClick = () => {
    setIdFromButtonClick(id);
  };

  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        Fetch Post
      </button>
      <div>{post.title}</div>
      {/* <ul>
				{posts.map(post => (
          <li key={post.id}>{post.title}</li>
				))}
			</ul> */}
    </div>
  );
}

export default DataFetching;
