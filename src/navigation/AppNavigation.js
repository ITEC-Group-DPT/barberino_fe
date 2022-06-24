import React from 'react'
import {
    BrowserRouter as Router,
    Routes, //used to be Switch
    Route,
    Link
} from "react-router-dom";

import Home from '../pages/Home/home';

const AppNavigation = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
            </Routes>
        </Router>
    )
}

export default AppNavigation