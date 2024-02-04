type GreetProps = {
    name?: string
}

function GreetTdd(props: GreetProps) {
    return (
        <div>Hello { props.name}</div>
    );
}

export default GreetTdd;
