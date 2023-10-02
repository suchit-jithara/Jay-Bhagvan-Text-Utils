// Jay Bhagvan 
import react from 'react'

function Demo2(props) {
    return <h2>I am a {props.brand}!</h2>;
}

export default function Demo1() {
    const carName = "Demo2";
    return (
        <>
            <h1>Who lives in my Demo1?</h1>
            <Demo2 brand={carName} />
        </>
    );
}