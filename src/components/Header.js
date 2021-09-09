import React from "react";
import {Nav, Navbar, NavLink, Button} from "react-bootstrap";
import {Link, Router} from "react-router-dom";
export default function Header(){
    return(
            <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                <Navbar.Brand className={"marg"}><h1>The Movies app</h1></Navbar.Brand>
                    <Nav>
                        <Button variant="primary" className={"marg"}>Sign out</Button>
                    </Nav>
            </Navbar>

        )
}