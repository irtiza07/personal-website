import React, { useState } from 'react';
import InputEmail from './InputEmail';
import axios from 'axios';


export default function FormContainer() {
    const [email, setEmail] = useState('');
    const onChange = e => {
        setEmail(e.target.value);
    };
    const onSubmission = () => {
        axios.post('http://localhost:5000/subscribe', {
            email: email
        }).then(response => console.log(response.status))
            .catch(error => console.log(error));
        setEmail('');
    }
    return (
        <div className="form-container">
            <InputEmail email={email} onChange={onChange} onSubmission={onSubmission}></InputEmail>
        </div>
    )
}
