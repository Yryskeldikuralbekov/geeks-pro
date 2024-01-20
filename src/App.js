import React, { useEffect, useState } from "react"
import './App.css';
import axios from "axios";


function App() {
  const [post, setPost] = useState('')

  
  axios.get("https://pokeapi.co/api/v2/pokemon/")
    .then((response) => setPost(response.data.results))
    
  // axios.get("https://pokeapi.co/api/v2/pokemon/1/")
  //   .then((response) => console.log(response.data.sprites))

  return (
    <div className="App">
        <h2>
          {
            post && post.map((posts, index) =>
            <ul className="name_foto">
              <li className="text">{posts.name}</li>
              <li className="foto"><img className="img" src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${index + 1 }.png`} /></li>
            </ul>
            )
          }
        </h2>
    </div>
  );
}

export default App;
