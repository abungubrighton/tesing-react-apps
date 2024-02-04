import { render,screen } from "@testing-library/react"
import GreetTdd from "./GreetTdd"

test('GreetTdd renders correctly', () => {
    render(<GreetTdd />)
    const textElement = screen.getByText('Hello')
    expect(textElement).toBeInTheDocument()
});

test('Greet component renders with a name', () => { 
    render(<GreetTdd name="John Doe" />)
    const textElement = screen.getByText('Hello John Doe')
    expect(textElement).toBeInTheDocument()
 })
