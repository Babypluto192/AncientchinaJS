import React from 'react';
import classes from "../style/Header.module.css";
import OffCanvas from "./OffCanvas";
import Search from "./Search";



function Header (props) {
    const search = props.search

    return (


         <header>
             <OffCanvas />
           <h1>Древний Китай</h1>
             <Search {...{ search }}/>



         </header>
    )
};





export default Header;
