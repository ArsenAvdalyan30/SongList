import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import MusicUploadForm from "../MusicUploadForm";

describe("<MusicUploadForm />", () => {
    it("renders without crashing", () => {
        render(<MusicUploadForm />);
    });

    it("updates the state when a file is selected", () => {
        render(<MusicUploadForm />);
        const fileInput = screen.getByLabelText("Upload Music");
        const file = new File([''], 'test.mp3', { type: 'audio/mp3' });

        fireEvent.change(fileInput, { target: { files: [file] } });

        expect(screen.getByText("Selected file: test.mp3")).toBeInTheDocument();
    });

    it("calls the onUpload function when the Upload button is clicked", () => {
        const onUploadMock = jest.fn();
        render(<MusicUploadForm onUpload={onUploadMock} />);
        const fileInput = screen.getByLabelText("Upload Music");
        const file = new File([''], 'test.mp3', { type: 'audio/mp3' });

        fireEvent.change(fileInput, { target: { files: [file] } });

        const uploadButton = screen.getByText("Upload");
        fireEvent.click(uploadButton);

        expect(onUploadMock).toHaveBeenCalledWith(file);
    });

    it("disables the Upload button when no file is selected", () => {
        render(<MusicUploadForm />);
        const uploadButton = screen.getByText("Upload");
        expect(uploadButton).toBeDisabled();
    });

    it("enables the Upload button when a file is selected", () => {
        render(<MusicUploadForm />);
        const fileInput = screen.getByLabelText("Upload Music");
        const file = new File([''], 'test.mp3', { type: 'audio/mp3' });

        fireEvent.change(fileInput, { target: { files: [file] } });

        const uploadButton = screen.getByText("Upload");
        expect(uploadButton).toBeEnabled();
    });
});