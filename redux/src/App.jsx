import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './layout/Header'
import Footer from './layout/Footer'
import Home from './components/Home'
import About from './components/About'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Master from './layout/Master'
import AdminMaster from './layout/AdminMaster'
import Dashboard from './components/Admin/Dashboard'
import AddCategory from './components/Admin/AddCategory'
import Login from './components/Login'
import MyClass from './components/MyClass'
import Counter from './components/Counter'
import FormHanding from './components/Admin/FormHandling'
import ManageCategory from './components/Admin/ManageCategory'
import ViewCategory from './components/ViewCategory'
import UpdateCategory from './components/Admin/UpdateCategory'
import Pay from './components/Pay'
import Payment from './components/Payment'

function App() {
 
  return (
   <>
    <BrowserRouter>
            <Routes>
              <Route path='/' element={<Master/>}>
                  {/* outlets call */}
                    <Route path='/' element={<Home/>}/>
                    <Route path='/about' element={<About/>}></Route>
                    <Route path='/counter' element={<Counter/>}></Route>
                    <Route path='/viewCategory' element={<ViewCategory/>}></Route>
                    <Route path='/pay' element={<Pay/>}></Route>
                    <Route path='/login' element={<Login/>}></Route>
                    <Route path='/payment' element={<Payment/>}></Route>
              </Route>
              <Route path='/admin' element={<AdminMaster></AdminMaster>}>
                      {/* Admin Outlets */}
                      <Route path='/admin' element={<Dashboard/>}></Route>
                      <Route path='/admin/addCategory' element={<AddCategory/>}></Route>
                      <Route path='/admin/ManageCategory' element={<ManageCategory/>}></Route>
                      <Route path='/admin/updateCategory/:id' element={<UpdateCategory/>}></Route>
                      <Route path='/admin/useformHook' element={<FormHanding/>}></Route>
              </Route>
              <Route path='/myclass' element={<MyClass/>}></Route>
            </Routes>

    </BrowserRouter>
   </>
  )
}

export default App
