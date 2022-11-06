import React from 'react'
import {Route, Routes} from "react-router-dom"
import Notes from './Notes'
import Signup from './Signup'
import Login from './Login'
import AddLectures from "./AddLectures"

const MainPage = () => {
  return (
    <Routes>
        <Route path='/' element={<Notes></Notes>}></Route>
        <Route path='/Login' element={<Login></Login>}></Route>
        <Route path='Signup' element={<Signup></Signup>}></Route>
        <Route path='/AddLectures' element={<AddLectures></AddLectures>}></Route>

    </Routes>
  )
}

export default MainPage