import { render, screen } from "@testing-library/react"
import{Application} from "./Application"
import React from "react"
describe("Application component", () => { 
    test("Application renders correctly", () => { 
        render(<Application />)
        let nameElement = screen.getByRole('textbox');
        expect(nameElement).toBeInTheDocument();

        // check that the select element is also in the document
        let jobSelectionElement = screen.getByRole('combobox');
        expect(jobSelectionElement).toBeInTheDocument();

        // check that the terms and condition element is also in the document
        let termsElement = screen.getByRole('checkbox');
        expect(termsElement).toBeInTheDocument();

        // check that the Submit button element is also in the document
        let submitButtonElement = screen.getByRole('button');
        expect(submitButtonElement).toBeInTheDocument();
    })
})