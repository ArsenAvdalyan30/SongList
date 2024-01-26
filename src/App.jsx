import React, { useState } from "react";
import SongList from "./Components/SongList/SongList.jsx";
import PlayAllButton from "./Components/PlayAllButton/PlayAllButton.jsx";
import AddAllButton from "./Components/AddAllButton/AddAllButton.jsx";
import MusicUploadForm from "./Components/MusicUploadForm/MusicUploadForm.jsx";
import styles from "./App.module.css";

function App() {
  const [songs, setSongs] = useState([
    {
      songName: "hallo",
      artistName: "BlackBird",
      trackNumber: 0,
    },
    {
      songName: "hallo 1",
      artistName: "BlackBird 1",
      trackNumber: 1,
    },
    {
      songName: "hallo 2",
      artistName: "BlackBird 2",
      trackNumber: 2,
    },
    {
      songName: "hallo 3",
      artistName: "BlackBird 3",
      trackNumber: 3,
    },
  ]);

  const handlePlayAll = () => {
    console.log("Play All Clicked");
  };

  const handleAddAll = () => {
    console.log("Add All clicked");
  };

  const handleUpload = (file) => {
    console.log(`File uploaded: ${file.name}`);
    // Simulate upload process with timeout
    setTimeout(() => {
      console.log("Upload complete");
    }, 2000);
  };

  return (
    <>
      <div className={styles.app}>
        <div className={styles.songBar}>
          <div className={styles.buttonsContainer}>
            <PlayAllButton onClick={handlePlayAll} />
            <AddAllButton onClick={handleAddAll} />
          </div>
          <div className={styles.buttonsContainer}>
            <button>
              <span>&#8645;</span>
              <span className={styles.buttonFormSpan1}> Track</span>
              <span>&#9662;</span>
            </button>
            <div className={styles.inputContainer}>
              <input type="text" placeholder="Filter" />
            </div>
          </div>
        </div>
        <SongList songs={songs} />
        <MusicUploadForm onUpload={handleUpload} />
      </div>
    </>
  );
}

export default App;
