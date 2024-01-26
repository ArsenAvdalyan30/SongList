import React from "react";
import styles from "./PlayAllButton.module.css";

const PlayAllButton = ({ onClick }) => {
  return (
    <button className={styles.buttonFormTrack} onClick={onClick}>
      <img src={"/rightArrow2.png"} alt="arrow" />
      <p>Play All</p>
      <span data-testid="dropdown-icon">&#9662;</span>
    </button>
  );
};

export default PlayAllButton;
