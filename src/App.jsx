import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import MainLayout from './MainLayout/MainLayout'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Contact from './Pages/Contact/Contact'
import First from './Pages/About/First'
import Second from './Pages/About/Second'

const App = () => {
  const routes = createBrowserRouter([
    {
      path: '/',
      element: <MainLayout />,
      children: ([
        {
          path: '/',
          element: <Home />
        },
        {
          path: 'about',
          element: <About />,
          children: ([
            {
              path: 'first',
              element: <First />
            },
            {
              path: 'second',
              element: <Second />
            }
          ])
        },
        {
          path: 'contact',
          element: <Contact />
        }

      ])
    }

  ])

  return (
    <div>

      <RouterProvider router={routes} />

    </div>
  )
}

export default App