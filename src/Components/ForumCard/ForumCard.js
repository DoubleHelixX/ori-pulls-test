import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faComments } from "@fortawesome/free-solid-svg-icons";
import "./ForumCard.css";

function ForumCard(props) {
  return (
    <>
      <div className="forumPosition">
        <h1 className="forumTitle">Forum +</h1>

        <div className="forumCard">
          Hovha(NY): Looking for a brown leather belt for 7/15/2022 Vogue Shoot
          <div>Lars C. replied 30 min ago</div>
          <FontAwesomeIcon icon={faComments} />
          <div className="messageAmount">1</div>
          <div className="buttonGroupForum">
            <button className="accessoriesButton">ACCESSORIES</button>
            <button className="needItemButton">NEED ITEM</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default ForumCard;
