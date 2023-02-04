import React, { useState, useEffect } from 'react';
import Appbar from '../component/Appbar.jsx';
import axios from 'axios';


export function Dashboard() {
    const [seconds, setSeconds] = useState(0);

    const url = 'http://localhost:5000/users';

    axios.get(url).then((response) => {
        console.log(response);
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