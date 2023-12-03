// app.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import UsersList from './components/UsersList';
import PostList from './components/posts/PostList';
import AlbumsList from './components/albums/AlbumsList';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<UsersList />} />
        <Route path="/user/:userId/posts" element={<PostList />} />
        <Route path="/user/:userId/albums" element={<AlbumsList />} />
      </Routes>
    </Router>
  );
};

export default App;
