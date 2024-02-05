import { GreetProps } from "./greet.types";


function GreetTdd(props: GreetProps) {
    return (
        <div>Hello { props.name  ? props.name :'Guest'}</div>
    );
}

export default GreetTdd;
