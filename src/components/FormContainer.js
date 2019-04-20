import React, { useState } from 'react';
import InputEmail from './InputEmail';
import axios from 'axios';

export default function FormContainer() {
    const [email, setEmail] = useState('');
    const [confirmationModalOpen, setConfirmationModalOpen] = useState(false);
    const onChange = e => {
        setEmail(e.target.value);
    };
    const onSubmission = () => {
        axios.post('http://ec2-18-217-52-23.us-east-2.compute.amazonaws.com/subscribe', {
            email: email
        }).then(() => setConfirmationModalOpen(true))
            .catch(error => {
                console.log(error);
                alert("Please enter a valid email.");
            });
        setEmail('');
    }
    return (
        <div className="form-container">
            <InputEmail email={email} onChange={onChange} onSubmission={onSubmission} confirmationModalOpen={confirmationModalOpen} setConfirmationModalOpen={setConfirmationModalOpen}></InputEmail>
        </div >
    )
}
