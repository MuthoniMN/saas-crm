import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './pages/Home/Home.jsx'
import Error from './error-page.jsx'
import './App.css'
import Layout from './components/Layout'
import AddClient from './pages/AddClient/AddClient.jsx'
import AddProject from './pages/AddProject/AddProject.jsx'

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
        errorElement: <Error />
      }
    ]
  },
  {
    path: '/client/new',
    element: <AddClient />
  },
  {
    path: '/project/new',
    element: <AddProject />
  }

])

function App() {

  return (
    <RouterProvider router={router} />
  )
}

export default App
