import React from "react";
import { Link } from "react-router-dom";
import "./Navigation.css";

function Navigation(props) {
  return (
    <>
      <Link className="nav" to="/">
        <h1 className="title">PULLS</h1>
      </Link>
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
    </>
  );
}

export default Navigation;
