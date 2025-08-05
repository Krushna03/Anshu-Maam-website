import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import ProjectLayout from './Layout/ProjectLayout'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'

function App() {
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <ProjectLayout />,
      children: [
        {
          index: true,
          element: <Home />
        },
        {
          path: "/about-us",
          element: <AboutUs />
        },
        {
          path: "/services",
          element: <Services />
        },
        {
          path: "/contact-us",
          element: <ContactUs />
        }
      ]
    },
  ]) 

  return <RouterProvider router={router} />
}

export default App