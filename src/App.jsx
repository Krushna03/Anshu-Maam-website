import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Pages/Home'
import ProjectLayout from './Layout/ProjectLayout'
import AboutUs from './Pages/AboutUs'
import Services from './Pages/Services'
import ContactUs from './Pages/ContactUs'
import PersonalWellness from './Pages/PersonalWellness'
import CorporateWellness from './Pages/Coporate-wellness'
import PowerCharge from './Pages/PowerCharge'
import LeadersCertificate from './Pages/LeadersCertificate'
import TwentyOneDaysMindfull from './Pages/21DaysMindfull'

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
        },
        {
          path: "/personal-wellness",
          element: <PersonalWellness />
        },
        {
          path: "/corporate-wellness",
          element: <CorporateWellness />
        },
        {
          path: "/powercharge",
          element: <PowerCharge />
        },
        {
          path: "/leaders-certification",
          element: <LeadersCertificate />
        },
        {
          path: "/mindfulness-journey",
          element: <TwentyOneDaysMindfull />
        },
      ]
    },
  ]) 

  return <RouterProvider router={router} />
}

export default App