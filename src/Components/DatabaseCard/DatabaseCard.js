import React from "react";
import { Dropdown } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencil } from "@fortawesome/free-solid-svg-icons";
import "./DatabaseCard.css";

function DatabaseCard(props) {
  return (
    <>
      <div className="database">
        <h1>
          Database <FontAwesomeIcon icon={faPencil} />
        </h1>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="light"
            bg="dark"
            expand="lg"
          >
            Gucci
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="light"
            bg="dark"
            expand="lg"
          >
            Balenciaga
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <Dropdown>
          <Dropdown.Toggle
            id="dropdown-basic"
            variant="light"
            bg="dark"
            expand="lg"
          >
            Prada
          </Dropdown.Toggle>

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <button className="seeMoreButton">See More</button>
      </div>
    </>
  );
}

export default DatabaseCard;
