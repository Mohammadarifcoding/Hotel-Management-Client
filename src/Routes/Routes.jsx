import {createBrowserRouter} from 'react-router-dom'
import App from '../App'
import Login from '../Pages/Login/Login'
import Register from '../Pages/Register.jsx/Register'
import Home from '../Pages/Home/Home'
import Error from '../Components/Error/Error'
import Rooms from '../Pages/Rooms/Rooms'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import PrivateProvide from '../Components/Provider/PrivateProvide'
import MyBookings from '../Pages/MyBookings/MyBookings'
import Gallery from '../Pages/Gallery/Gallery'
import HowToBook from '../Components/HowToBook/HowToBook'

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
                loader: ({params})=> fetch(`https://hotel-managment-server.vercel.app/api/v1/${params.id}`)
            },
            {
                path:'/myBookings',
                element:<PrivateProvide><MyBookings></MyBookings></PrivateProvide>
            },
            {
                path:'/gallery',
                element:<Gallery></Gallery>
            },
            {
                path:'/howToBook',
                element:<HowToBook></HowToBook>
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