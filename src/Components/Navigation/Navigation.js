import React from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, Image } from "react-bootstrap";

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
            <Image
              src={"./D8717CE0-50AA-4887-9AF9-3EE9CD68D219_1_105_c.jpeg"}
              title="source: imgur.com"
              className="img-fluid shadow-4"
              style={{
                borderRadius: "50%",
                width: 50,
                display: "flex",
                flexDirection: "column",
              }}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}

export default Navigation;
