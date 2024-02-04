import { GreetProps } from "./greet.types";


function GreetTdd(props: GreetProps) {
    return (
        <div>Hello { props.name}</div>
    );
}

export default GreetTdd;
