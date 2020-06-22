import React, {useState, useEffect} from 'react';
import axios from 'axios'

function useAuthAxios() {
    
        const accessToken = localStorage.getItem('token')
        const apiUrl = 'http://localhost:5000'

        const authAxios = axios.create({
            baseURL: apiUrl,
            headers: {
                Authorization: `Bearer ${accessToken}`,
        }})
    
    return authAxios;
}

export default useAuthAxios;

