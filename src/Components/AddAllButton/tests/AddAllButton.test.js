import '@testing-library/jest-dom';
import React from "react";
import { render, fireEvent } from "@testing-library/react";
import AddAllButton from "../AddAllButton";

describe("<AddAllButton />", () => {
    it("renders without crashing", () => {
        render(<AddAllButton />);
    });

    it("renders the button text correctly", () => {
        const { getByText } = render(<AddAllButton />);
        const buttonText = getByText("Add All");
        expect(buttonText).toBeInTheDocument();
    });

    it("renders the arrow image correctly", () => {
        const { getByAltText } = render(<AddAllButton />);
        const arrowImage = getByAltText("arrow");
        expect(arrowImage).toBeInTheDocument();
    });

    it("calls the onClick function when clicked", () => {
        const onClickMock = jest.fn();
        const { getByText } = render(<AddAllButton onClick={onClickMock} />);
        const button = getByText("Add All");
        fireEvent.click(button);
        expect(onClickMock).toHaveBeenCalled();
    });

    it("renders the dropdown icon correctly", () => {
        const { getByTestId } = render(<AddAllButton />);
        const dropdownIcon = getByTestId("dropdown-icon");
        expect(dropdownIcon).toBeInTheDocument();
    });
});