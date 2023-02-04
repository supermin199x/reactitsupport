import React, { useState, useEffect } from 'react';
import Appbar from '../component/Appbar.jsx';
import Alert from '@mui/material/Alert';
import axios from 'axios';


export function Dashboard() {
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setSeconds(seconds => seconds + 1);
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    const url = 'http://localhost:5000/users';

    axios.get(url).then((response) => {
        
    const result = response;

    console.log(result);
    })
    .catch((error) => {
    // handle errors
    });

    return (
        <>
            <Appbar />
            {seconds}
            
        </>    
    );
}