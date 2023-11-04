import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register.jsx/Register'
import Home from '../Pages/Home/Home'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            }
        ]
    },
    {
        path:'/login',
        element:<Login></Login>
    },
    {
        path:'/register',
        element:<Register></Register>
    }
])

export default routes