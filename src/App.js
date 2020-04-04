import React from 'react';
import './App.css';

import Navbar from './Components/Navbar';
import PostList from './Components/PostList';

function App() {
  return (
    <>
      <Navbar />
      <div className="content">
        <PostList />
      </div>
    </>
  );
}

export default App;
