'use client';
import {BsFillMoonStarsFill} from "react-icons/bs"
import { useState } from 'react';

const toggleDarkMode = () => {
    setDarkMode(prevMode => !prevMode)
}

const darkModeFunc = () => {
    const [darkMode, setDarkMode] = useState(false)
    
    return (
        <li><BsFillMoonStarsFill className="cursor-pointer tx-xl" onClick={toggleDarkMode}/></li>
    )
}

export default darkModeFunc