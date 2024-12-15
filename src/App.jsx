
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './App.css'
import NavBar from './components/NavBar'
import Home from './components/home'

function App() {
  
  const router =createBrowserRouter([
    {path:"/",
      element:
      <div>
        <NavBar/>
        <Home/>
      </div>
    },
  ])

  return (
    <>
    <RouterProvider router={router}/>
    </>
  )
}

export default App
