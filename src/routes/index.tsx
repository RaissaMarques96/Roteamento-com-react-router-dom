import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Detail from '../pages/detail'
import Home from '../pages/home'

const Routes = () => {
    const routes = createBrowserRouter([
        {
            path: "/",
            element: <Home />
        },
        {
            path: "detail/:id",
            element: <Detail/>
        }
    ])
    return (
        <RouterProvider router={routes} />
    )
}

export default Routes