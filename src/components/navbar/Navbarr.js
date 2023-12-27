import "./navbar.css" ;
import { useState } from "react" ;
// import React from 'react' ;
// import Container from 'react-bootstrap/Container';
// import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';
// import logo from "../../images/imgs-ayoub/logo.png";
// import { Button } from 'react-bootstrap';
import { Navbar, Container, Button } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

function Navbarr() {

    const [ toggle , setToggle ] = useState(true) ;

    const handleClick = () => {

        setToggle( !toggle )
    }

    console.log( toggle ) ;

    return (
        <div className="Navbar">
            <Navbar expand="lg">
                <Container fluid>
                    <Navbar.Brand><NavLink to="/">AH-ISMAGI</NavLink></Navbar.Brand>
                    <div className="search">
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                        <NavLink href="#link"><i class="fa-sharp fa-solid fa-magnifying-glass"></i></NavLink>
                    </div>
                    <Navbar.Collapse id="basic-navbar-nav">
                    <ul className="me-0 navbar-nav">
                        {/* <div className="lwest1"> */}
                        {/* <div className="lwest"> */}
                        <div className="lwest1">
                            <NavLink to="/movies">Movies</NavLink>
                            <NavLink to="/series">Series</NavLink>
                            <NavLink to="/animes">Animes</NavLink>
                        </div>
                        {/* </div> */}
                        <div className="lwest2">
                        <NavLink to="/search">
                            <div className={`inputContainer ${toggle ? "" : "isToggle"}`}>
                                <input type="text" name="search" className="inputSearch" />
                                <i onClick={handleClick} className="fa-sharp fa-solid fa-magnifying-glass"></i>
                            </div>
                        </NavLink>
                        <NavLink to="/ContactUs"><Button variant="primary">Subscribe</Button></NavLink>
                        <NavLink to="/search" className="notif"><i className="fa-regular fa-bell"></i><span>3</span></NavLink>
                        <NavLink to="/search" className="profile"><img src="images/profile.jpg" alt="Profile" /><i class="fa-solid fa-chevron-down"></i></NavLink>
                        </div>
                    </ul>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    );
}

export default Navbarr;
