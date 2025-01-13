import './styles/App.css'
import {Staff} from "./pages/Staff.tsx";
import {Field} from "./pages/Field.tsx";
import {Crops} from "./pages/Crops.tsx";
import {Vehicle} from "./pages/Vehicle.tsx";
import {Equipment} from "./pages/Equipment.tsx";
import {CropDetails} from "./pages/CropDetails.tsx";
import {Dashboard} from "./pages/Dashboard.tsx";
import {Error} from "./pages/Error.tsx";
import {RootLayout} from "./components/RootLayout.tsx";
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

function App() {

const routes = createBrowserRouter([
    {
        path: '',
        element: <RootLayout/>,
        children: [
            {path: '', element: <Dashboard/>},
            {path: '/staff', element: <Staff/>},
            {path: '/field', element: <Field/>},
            {path: '/crops', element: <Crops/>},
            {path: '/vehicle', element: <Vehicle/>},
            {path: '/equipment', element: <Equipment/>},
            {path: '/cropDetails', element: <CropDetails/>},
            {path: '*', element: <Error/>}
        ]
    },
])

  return (
      <>
          <RouterProvider router={routes}/>



      </>
  )
}

export default App
