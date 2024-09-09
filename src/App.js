import React from 'react'
import Sidebar from './Components/Sidebar'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Landing from './Components/Landing';
import Create from './Components/Create';
import Media from './Components/Media';
import Analytics from './Components/Analytics';
import Comment from './Components/Comment';
import Plugins from './Components/Plugins';
import User from './Components/User';
import Setting from './Components/Setting';
import AddPost from './Components/AddPost';

function App() {
  return (
    <>
     <BrowserRouter>
    <Sidebar />
     <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/create" element={<Create />} />
          <Route path="/media" element={<Media />} />
          <Route path="/analytics" element={<Analytics />} />
              <Route path="/comments" element={<Comment />} />
              <Route path="/plugins" element={<Plugins />} />
              <Route path="/user" element={<User />} />
              <Route path="/setting" element={<Setting />} />
              <Route path="/create/addpost" element={<AddPost />} />
            {/* <Route path="*" element={<Errorpage />} /> */}
        </Routes>
     </BrowserRouter>
    
    </>
  )
}

export default App