import React from "react";
import styles from "./AddAllButton.module.css";

const AddAllButton = ({ onClick }) => {
  return (
    <button className={styles.buttonFormTrack} onClick={onClick}>
      <img src={"/rightArrow2.png"} alt="arrow" />
      <p>Add All</p>
      <span data-testid="dropdown-icon">&#9662;</span>
    </button>
  );
};

export default AddAllButton;
