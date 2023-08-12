'use client'
import {useState, useEffect} from 'react';
import { fetchFromAPI } from './fetchFromApi';

export const fetchforMeta =  (url) => {
    const [data, setData] = useState([])
    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true)
            try {
                const res  = await fetchFromAPI(`${url}/${id}`);
                setData(res)
            } catch (error) {
                alert(error)
            }
        }
        fetchData()
    }, [])

    return data
}