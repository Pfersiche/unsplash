import "./App.css";
import { useState } from "react";

function App() {
  const [searchQuery, setSearchQuery] = useState("");

  function handleSearch(event) {
    setSearchQuery(event.target.value);
    // console.log(searchQuery)
  }

  async function getImage() {
    try {
      const API = `http://localhost8092/photos?subject=${searchQuery}`;
      const res = await axios.get(API);
      setImg(res.data[0].img_url);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="App">
      <h1>find any image</h1>
      <input
        type="text"
        placeholder="enter image subject"
        onChange={handleSearch}
      />
      <button onClick={getImage}>explore!</button>
      {img && <img src={img} alt={searchQuery} />}
    </div>
  );
}

export default App;
