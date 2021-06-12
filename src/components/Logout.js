import React, {useEffect} from 'react';
import {Redirect} from "react-router";

function Logout({setIsAuth}) {

    useEffect(() => {
        setIsAuth(false)
    }, [])
    return (
       <Redirect to='/signin' />
    );
}

export default Logout;