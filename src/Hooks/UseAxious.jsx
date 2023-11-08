import React, { useContext } from 'react';
import axios from "axios";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from '../Components/Provider/AuthProvider';

const AxiousSecure = axios.create({
    baseURL: 'https://hotel-managment-server.vercel.app/api/v1',
    withCredentials:true
})
const UseAxious = () => {
    const { loading ,user, In, update , Google , OUT ,  creatUser } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        AxiousSecure.interceptors.response.use(res => {
            return res;
        }, error => {
            console.log('error tracked in the interceptor', error.response)
            if (error.response.status === 401 || error.response.status === 403) {
                console.log('logout the user')
                OUT()
                .then()
                .catch(error => console.log(error))    
            }
        })
    }, [])

    return AxiousSecure;
};


export default UseAxious;