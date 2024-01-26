import React from "react";
import SongRow from "../SongRow/SongRow";
import "./SongList.module.css";

const SongList = ({ songs }) => {
  return (
    <>
      <table>
        <thead>
          <tr>
            <th></th>
            <th>Song Name</th>
            <th>Artist Name</th>
            <th>Track</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {songs.map((song) => (
            <SongRow key={song.trackNumber} song={song} />
          ))}
        </tbody>
      </table>
    </>
  );
};

export default SongList;
