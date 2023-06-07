import React from 'react'
import { RouterProvider } from 'react-router-dom';
import {ROUTES} from  './routes' 

const App = () => {
  return (
    <React.StrictMode>
    <RouterProvider router={ROUTES} />
  </React.StrictMode>
  )
}

export default App