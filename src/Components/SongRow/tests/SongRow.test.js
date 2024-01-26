import '@testing-library/jest-dom';
import React from "react";
import { render } from "@testing-library/react";
import SongRow from "../SongRow";

describe("<SongRow />", () => {
    const song = {
        trackNumber: 1,
        songName: "Song 1",
        artistName: "Artist 1",
    };

    it("renders without crashing", () => {
        render(<SongRow song={song} />);
    });

    it("renders the song name and artist name correctly", () => {
        const { getByText } = render(<SongRow song={song} />);
        expect(getByText("Song 1")).toBeInTheDocument();
        expect(getByText("Artist 1")).toBeInTheDocument();
    });

    it("renders the track number correctly", () => {
        const { getByText } = render(<SongRow song={song} />);
        expect(getByText("1")).toBeInTheDocument();
    });

    it("renders the images correctly", () => {
        const { getByAltText } = render(<SongRow song={song} />);
        const heartImage = getByAltText("heart");
        const checkMarkImage = getByAltText("checkMark");
        const curvedArrowImage = getByAltText("curvedArrow");
        const downArrowImage = getByAltText("downArrow");

        expect(heartImage).toBeInTheDocument();
        expect(checkMarkImage).toBeInTheDocument();
        expect(curvedArrowImage).toBeInTheDocument();
        expect(downArrowImage).toBeInTheDocument();
    });
});