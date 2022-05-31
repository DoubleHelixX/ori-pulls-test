import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShirt } from "@fortawesome/free-solid-svg-icons";
import "./ProjectsCard.css";

function ProjectsCard(props) {
  return (
    <>
      <div className="projects">
        <h1 className="projectsTitle">Projects</h1>
        <FontAwesomeIcon icon={faShirt} />
        <h3>Vogue Italia / Fall 2022</h3>
        <FontAwesomeIcon icon={faShirt} />
        <h3>Elle / Winter 2023</h3>
        <FontAwesomeIcon icon={faShirt} />
        <h3>GQ / Spring 2023</h3>
        <div className="buttonGroup">
          <button className="viewAll">View All</button>
          <button className="newProject">New Project</button>
        </div>
      </div>
    </>
  );
}

export default ProjectsCard;
