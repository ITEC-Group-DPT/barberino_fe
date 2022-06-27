import React from 'react'
import {
    BrowserRouter as Router,
    Routes, //used to be Switch
    Route,
} from "react-router-dom";

import Home from '../pages/Home/home';
import Contact from '../pages/Contact/contact';

const AppNavigation = () => {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route path="/contact" element={<Contact />} />
            </Routes>
        </Router>
    )
}

export default AppNavigation