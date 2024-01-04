
import { useEffect, useState } from 'react';
import Post from './post.js'
import './App.css';

function App() {

  const [posts, setPosts] = useState({})


  useEffect(() => {
    fetch('https://dummyjson.com/products')
      .then(res => res.json())
      .then((data) => {
        // Set the entire data object as post data
        setPosts(data);
        console.log(posts);
      })
      .catch(error => console.log(error))

  }, [])


  return (

    <div>
      {
        posts.products?.map((elem) => {
          return (<Post title={elem.title} description={elem.description} />)
        })
      }
    </div>
  );
}

export default App