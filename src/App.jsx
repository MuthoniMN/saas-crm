import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Error from './error-page.jsx'
import Deals from './pages/Deals/Deals.jsx'
import './App.css'
import Layout from './components/Layout'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />
      },
      {
        path: '/deals',
        element: <Deals />
      }
    ]
  }

])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
