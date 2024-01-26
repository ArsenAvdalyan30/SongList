import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent, screen, getByTestId } from "@testing-library/react";
import PlayAllButton from "../PlayAllButton";

describe("<PlayAllButton />", () => {
    it("renders without crashing", () => {
        render(<PlayAllButton />);
    });

    it("renders the button text correctly", () => {
        const { getByText } = render(<PlayAllButton />);
        const buttonText = getByText("Play All");
        expect(buttonText).toBeInTheDocument();
    });

    it("renders the arrow image correctly", () => {
        const { getByAltText } = render(<PlayAllButton />);
        const arrowImage = getByAltText("arrow");
        expect(arrowImage).toBeInTheDocument();
    });

    it("calls the onClick function when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<PlayAllButton onClick={onClickMock} />);
        const button = getByText("Play All");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });

    it("renders the dropdown icon correctly", () => {
        const { getByTestId } = render(<PlayAllButton />);
        const dropdownIcon = getByTestId("dropdown-icon");
        expect(dropdownIcon).toBeInTheDocument();
    });
});