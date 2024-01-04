// URL for USer = https://jsonplaceholder.typicode.com/users
import React, { useState } from 'react'
import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import NamePage from './pages/NamePage/NamePage';
import CommentPage from './pages/CommentPage/CommentPage';
import ImagePage from './pages/ImagePage/ImagePage';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';
import Navbar from './Layout/Navbar/Navbar';
import Counter from './component/HomePage/Counter/Counter';
import Multiverse from './component/HomePage/Multiverse/Multiverse';
import Qrcode from './component/HomePage/Qrcode/Qrcode';
import TodoList from './component/HomePage/TodoList/TodoList';
import Login from './pages/LoginPage/Login';
import Signup from './pages/SignupPage/Signup';


function App() {

  const [value, setValue] = useState<any>({});
  console.log("parent", value);

  return (
    <>
      <div >
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={< Login />} />
            <Route path="/Signup" element={<Signup />} />

            <Route path="/Home" element={< HomePage />} />
            <Route path="/Counter" element={<Counter />} />
            <Route path="/Multiverse" element={<Multiverse />} />
            <Route path="/Qrcode" element={<Qrcode />} />
            <Route path="/TodoList" element={<TodoList />} />

            <Route path="/Users" element={< NamePage value={value} setValue={setValue} />} />
            <Route path="/Images" element={< ImagePage value={value} />} />
            <Route path="/Comments" element={< CommentPage value={value} />} />
            <Route path="/*" element={<NotFoundPage />} />


          </Routes>
        </BrowserRouter>
      </div>
    </>
  )
}

export default App



