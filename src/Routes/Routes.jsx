import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register.jsx/Register'
import Home from '../Pages/Home/Home'
import Error from '../Components/Error/Error'
import Rooms from '../Pages/Rooms/Rooms'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'

const routes = createBrowserRouter([
    {
        path:'/',
        element:<App></App>,
        errorElement:<Error></Error>,
        children:[
            {
                path:'/',
                element:<Home></Home>
            },
            {
                path:'/rooms',
                element:<Rooms></Rooms>
            },
            {
                path:'/roomDetails/:id',
                element:<RoomDetails></RoomDetails>,
                loader: ({params})=> fetch(`http://localhost:5000/api/v1/${params.id}`)
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