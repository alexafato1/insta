import {React, useState} from 'react';

import './App.css';
import Post from './Post.js';

function App() {
  const [posts, setPosts] = useState([
    { 
    username:"alexa", 
    caption:"WOW it works", 
    imageUrl:"https://sun9-47.userapi.com/N4NH_Qf8Gq5OrTPlecP-nKgz7CnvNkT8h1Wp9A/96NwACx41og.jpg"
  },
    {
    username:"alexa", 
    caption:"WOW it works", 
    imageUrl:"https://sun9-47.userapi.com/N4NH_Qf8Gq5OrTPlecP-nKgz7CnvNkT8h1Wp9A/96NwACx41og.jpg"
    }
  ]);
     
  return (
    <div className="app">
      
      <div className="app_header">
        <img
          className="app_headerImage"
          src="https://www.instagram.com/static/images/web/mobile_nav_type_logo.png/735145cfe0a4.png"
          alt="instagram"
        />
      </div>
      {
        posts.map(post => (
          <Post username={post.username} caption={post.caption} imageUrl={imageUrl}/>
        ))
      }
      <Post username="serg" caption="WOW it works"  imageUrl="https://sun9-73.userapi.com/Ae-JV-4ofQhVPe3DOvHy2Y7YdWD3GtwCsZNNRA/En8EMcFTOho.jpg"/>
      <Post username="matv" caption="WOW it works" imageUrl="https://sun9-13.userapi.com/kO1M1bkb3e4Xv7tHerehOR4c_ue4uf4_MV0duw/HjAipjhxiDc.jpg" />
    </div>
  );
}

export default App;
