import React, { useState } from 'react';
import InputEmail from './InputEmail';


export default function FormContainer() {
    const [email, setEmail] = useState('');
    const onChange = e => {
        setEmail(e.target.value);
    };
    const onSubmission = () => {
        console.log(email);
    }
    return (
        <div className="form-container">
            <InputEmail email={email} onChange={onChange} onSubmission={onSubmission}></InputEmail>
        </div>
    )
}
