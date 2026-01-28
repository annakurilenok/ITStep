import { useState } from "react";
import TextInput from "./TextInput";
import Button from "./Button";

function LoginForm({}) {
    const [email, setEmail] = useState('')
}

export default function LoginForm() {
    const handleSubmit = ((event) => {
        event.preventDefault();
    });
    return(
        <form onSubmit={handleSubmit}>
            <TextInput type='email' />
            <TextInput type='login' onChange={(e) => {setEmail(event.target.value)}} />
        </form>
    )
}