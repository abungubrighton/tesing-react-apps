import { render,screen } from "@testing-library/react";
import Greet from "./Greet";

test('greet component renders correctly', () => {
    render(<Greet />)
    const textElement = screen.getByText('greet');
    expect(textElement).toBeInTheDocument();
});

// test using regular expression

test('Greet component renders correctly ', () => {
    render(<Greet />)
    const textElement = screen.getByText(/greet/i);
    expect(textElement).toBeInTheDocument();
})

