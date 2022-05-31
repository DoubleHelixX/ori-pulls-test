import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar } from "react-bootstrap";
import "./Navigation.css";

function Navigation(props) {
  return (
    <>
      {/* <h1 className="title">PULLS</h1>

       */}
      <Navbar>
        <Navbar.Brand className="brand" href="/">
          Pulls
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="justify-content-end" style={{ width: "100%" }}>
            <Link className="nav" to="/">
              Dashboard
            </Link>
            <Link className="nav" to={"/projects"}>
              Projects
            </Link>
            <Link className="nav" to={"/forum"}>
              Forum
            </Link>
            <Link className="nav" to={"/database"}>
              Database
            </Link>
            <Link className="nav" to={"/search"}>
              Search
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
