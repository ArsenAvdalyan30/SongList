import React from "react";
import styles from "./SongRow.module.css";

const SongRow = ({ song }) => {
  return (
    <tr>
      <td className={styles.firstAndLastColumn}>
        <img src={"/proccessing.png"} alt="proccessing" />
        <img src={"/rightArrow2.png"} alt="arrow" />
      </td>
      <td>{song.songName}</td>
      <td>{song.artistName}</td>
      <td>{song.trackNumber}</td>
      <td className={styles.firstAndLastColumn}>
        <img src={"/heart.png"} alt="heart" />
        <img src={"/checkMark.png"} alt="checkMark" />
        <img src={"/curvedArrow1.png"} alt="curvedArrow" />
        <img src={"/downArrow.png"} alt="downArrow" />
      </td>
    </tr>
  );
};
export default SongRow;
