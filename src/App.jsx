import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Error from './error-page.jsx'
import Deals from './pages/Deals/Deals.jsx'
import './App.css'
import Layout from './components/Layout'
import AddClient from './pages/AddClient/AddClient.jsx'

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
  },
  {
    path: '/client/new',
    element: <AddClient />
  }

])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
