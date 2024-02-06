import { render, screen } from "@testing-library/react";
import { Application } from "./Application";
describe("Application component", () => {
    test("Application renders correctly", () => {
        render(<Application />);
        let pageHeading = screen.getByRole("heading", {
            level: 1,
            name: "Job Application", // Specify the text content of the heading
        });
        expect(pageHeading).toBeInTheDocument();

        let sectionHeading = screen.getByRole("heading", {
            level: 2,
            name: "Section 1" // Specify the text content of the heading
        });
        expect(sectionHeading).toBeInTheDocument();
        
        let nameElement = screen.getByRole("textbox", {
            name: "Name",
        });
        expect(nameElement).toBeInTheDocument();

        // check that the Bio information is available
        let bioElement = screen.getByRole("textbox", {
            name: "Bio",
        });
        expect(bioElement).toBeInTheDocument();
        // check that the select element is also in the document
        let jobSelectionElement = screen.getByRole("combobox");
        expect(jobSelectionElement).toBeInTheDocument();

        // check that the terms and condition element is also in the document
        let termsElement = screen.getByRole("checkbox");
        expect(termsElement).toBeInTheDocument();

        // check that the Submit button element is also in the document
        let submitButtonElement = screen.getByRole("button");
        expect(submitButtonElement).toBeInTheDocument();
    });
});
