import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Bag from './Components/routes/Bag.jsx'
import {Provider} from "react-redux"
import Home from './Components/routes/Home.jsx'
import "./index.css"
import App from './Components/routes/App.jsx'
import { RouterProvider,createBrowserRouter } from 'react-router-dom'
import mintraStore from './store/index.js'

const router =createBrowserRouter([
  {
    path:"/",
    element:<App/>,
    children:[
      {
        path:"/",
        element:<Home/>
      },
      {
        path:"/bag",
        element:<Bag/>
      },
      // {
      //   path:"/home",
      //   element:<Home/>
      // }
    ]
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={mintraStore}>
      <RouterProvider router={router}></RouterProvider>
    </Provider>
  </StrictMode>,
)
