import React from 'react';
import ReactDom from 'react-dom';
import Navbar from './Navbar';

it("renders without crashing", ()=> {
    const div = document.createElement("div");
    ReactDom.render(<Navbar></Navbar>, div)
})
