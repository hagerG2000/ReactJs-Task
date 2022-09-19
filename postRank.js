import { useState } from "react";
var s=0;
const Create = () => {
  const [rank, setrank] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    setrank(s);
    const blog = { rank };

    fetch('http://localhost:3000/', {
      method: 'POST',
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(blog)
    }).then(() => {
      console.log('new blog added');
    })
  }

  return (
    <div className="create">
      <h2>Add a New Blog</h2>
      <button onClick={handleSubmit}>test</button>
    </div>
  );
}
 
export default Create;