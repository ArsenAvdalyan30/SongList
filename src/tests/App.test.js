
import React from "react";
import { render, fireEvent, waitFor } from "@testing-library/react";
import App from "../App";

// Mock PlayAllButton, AddAllButton, and MusicUploadForm components
jest.mock("../Components/PlayAllButton/PlayAllButton", () => ({ onClick }) => (
    <button onClick={onClick}>Mock Play All Button</button>
));

jest.mock("../Components/AddAllButton/AddAllButton", () => ({ onClick }) => (
    <button onClick={onClick}>Mock Add All Button</button>
));

jest.mock(
    "../Components/MusicUploadForm/MusicUploadForm",
    () =>
        ({ onUpload }) =>
        (
            <div>
                Mock Music Upload Form
                <input type="file" onChange={(e) => onUpload(e.target.files[0])} />
            </div>
        )
);

describe("<App />", () => {
    it("renders without crashing", () => {
        render(<App />);
    });

    it("handles Play All button click", () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Spy on the console.log function
        const { getByText } = render(<App />);
        const playAllButton = getByText("Mock Play All Button");
        fireEvent.click(playAllButton);
        // Assert
        expect(consoleSpy).toHaveBeenCalledWith('Play All Clicked'); // Replace 'Your log message' with the expected log message
        consoleSpy.mockRestore();
    });

    it("handles Add All button click", () => {
        const consoleSpy = jest.spyOn(console, 'log'); // Spy on the console.log function
        const { getByText } = render(<App />);
        const addAllButton = getByText("Mock Add All Button");
        fireEvent.click(addAllButton);
        //Assert
        expect(consoleSpy).toHaveBeenCalledWith('Add All clicked'); // Replace 'Your log message' with the expected log message
        consoleSpy.mockRestore();
    });

    it("handles file upload", async () => {
        jest.useFakeTimers();
        const consoleSpy = jest.spyOn(console, 'log');
        const { getByText } = render(<App />);
        const fileInput = getByText("Mock Music Upload Form").querySelector(
            "input[type='file']"
        );

        const file = new File([""], "test.mp3", { type: "audio/mp3" });
        fireEvent.change(fileInput, { target: { files: [file] } });
        jest.advanceTimersByTime(2000);
        //Assert
        expect(consoleSpy).toHaveBeenCalledWith('File uploaded: test.mp3');
        expect(consoleSpy).toHaveBeenCalledWith('Upload complete');
        consoleSpy.mockRestore();
    });
});
