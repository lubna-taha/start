import React from 'react'
import {createHashRouter,RouterProvider } from 'react-router-dom'
import Layout from './Components/Layout/Layout';
import About from './Components/About/About';
import Portfolio from './Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';
import Home from './Components/Home/Home';

export default function App() {

let routes = createHashRouter([
  {path:'',element : <Layout/>,children :[
    {index: true , element :<Home/>},
    {path:"about", element :<About/> },
    {path:"portfolio", element: <Portfolio/>},
    {path:"contact", element: <Contact/>}
  ]}
])

  return <RouterProvider router={routes}></RouterProvider>
}

