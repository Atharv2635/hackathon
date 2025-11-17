import { Route, Routes } from 'react-router'
import './App.css'
import { ToastContainer } from 'react-toastify'
import Register from './pages/Register'
import Login from './pages/Login'
import AddBlogs from './pages/AddBlogs'
import Home from './pages/Home'
import AddCategory from './pages/AddCategory'

function App() {


  return (
    <>
      <Routes>
        <Route path='/register' element={<Register />} />
        <Route path='/*' element={<Login/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='addblog' element={<AddBlogs/>}/>
        <Route path='addcategory' element={<AddCategory/>}/>
        <Route path='myblog' element={<AddBlogs/>}/>
        {/* </Route> */}
      </Routes>
      <ToastContainer/>
    </>
  )
}

export default App
