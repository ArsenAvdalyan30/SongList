import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import SongList from "../SongList";

// Mock SongRow component
jest.mock("../SongRow/SongRow", () => {
    return jest.fn(() => null);
});

describe("<SongList />", () => {
    const songs = [
        { trackNumber: 1, songName: "Song 1", artistName: "Artist 1" },
        { trackNumber: 2, songName: "Song 2", artistName: "Artist 2" },
    ];

    it("renders without crashing", () => {
        render(<SongList songs={songs} />);
    });

    it("renders the table headers correctly", () => {
        const { getByText } = render(<SongList songs={songs} />);
        expect(getByText("Song Name")).toBeInTheDocument();
        expect(getByText("Artist Name")).toBeInTheDocument();
        expect(getByText("Track")).toBeInTheDocument();
    });

    it("renders each song using SongRow component", () => {
        render(<SongList songs={songs} />);
        expect(require("../SongRow/SongRow")).toHaveBeenCalledTimes(songs.length);
    });
});