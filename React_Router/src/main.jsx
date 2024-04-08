import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { RouterProvider, createBrowserRouter,createRoutesFromElements,Route } from 'react-router-dom'
import Layout from './Layout.jsx'
import Home from './Components/Home/Home.jsx'
import ABout from './Components/About/ABout.jsx'
import Contact_us from './Components/Contact_us/Contact_us.jsx'
import User from './Components/User/User.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element :<Layout/>,
//     children :[
//       {
//         path:"",
//         element :<Home/>
//       },
//       {
//         path: "about",
//         element : <ABout/>
//       },
//       {
//         path: "contact_us",
//         element : <Contact_us/>
//       }
//     ]
//   },
  
// ])

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
       <Route path='' element= {<Home/>}/>
      <Route path='/about' element= {<ABout/>}/>
      <Route path='/contact_us' element= {<Contact_us/>}/>
      <Route path='/user/:userid' element= {<User/>}/>
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider  router={router}/>
  </React.StrictMode>,
)
