import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register.jsx/Register'
import Home from '../Pages/Home/Home'
import Error from '../Components/Error/Error'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<Error></Error>,
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