import { useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import useAuth from './useAuth';

const axiosSecure = axios.create({
    baseURL: 'http://localhost:5000',
});

const useAxiosSecure = () => {
    const { logOut } = useAuth();
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('access-token');

        const requestInterceptor = axiosSecure.interceptors.request.use((config) => {
            if (token) {
                config.headers.Authorization = `Bearer ${token}`;
            }
            return config;
        });

        const responseInterceptor = axiosSecure.interceptors.response.use(
            (response) => {
                return response;
            },
            async (error) => {
                if (error.response && (error.response.status === 401 || error.response.status === 403)) {
                    await logOut();
                    navigate('/login');
                }
                return Promise.reject(error);
            }
        );

        return () => {
            // Cleanup the interceptors when the component unmounts
            axiosSecure.interceptors.request.eject(requestInterceptor);
            axiosSecure.interceptors.response.eject(responseInterceptor);
        };
    }, [logOut, navigate]);

    return [axiosSecure]; // Return the axios instance
};

export default useAxiosSecure;
