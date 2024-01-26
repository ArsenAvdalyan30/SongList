import React, { useState } from "react";
import styles from "./MusicUploadForm.module.css";

const MusicUploadForm = ({ onUpload }) => {
  const [selectedFile, setSelectedFile] = useState(null);

  const handleFileChange = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      onUpload(selectedFile);
    }
  };

  return (
    <div className={styles.upload}>
      <label htmlFor="upload-input">Upload Music</label>
      <input
        id="upload-input"
        type="file"
        accept=".mp3, .wav"
        onChange={handleFileChange}
      />
      <button onClick={handleUpload} disabled={!selectedFile}>
        Upload
      </button>
      {selectedFile && <p>Selected file: {selectedFile.name}</p>}
    </div>
  );
};

export default MusicUploadForm;
