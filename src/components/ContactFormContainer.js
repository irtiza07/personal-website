import React, { useState } from 'react';
import ContactNameField from './ContactNameField';
import ContactEmailField from './ContactEmailField';
import ContactMessageField from './ContactMessageField';
import ContactFormSubmit from './ContactFormSubmit';
import axios from 'axios';


export default function ContactFormContainer() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const onChangeName = (e) => setName(e.target.value);
    const onChangeEmail = (e) => setEmail(e.target.value);
    const onChangeMessage = (e) => setMessage(e.target.value);
    const onSubmit = () => {
        if (!name || !email || !message) {
            alert("Please complete all the given fields");
        } else {
            axios.post('http://localhost:5000/contact', {
                name: name,
                email: email,
                message: message
            }).then(response => console.log(response.status))
                .catch(error => console.log(error));
            setEmail('');
            setName('');
            setMessage('');
        }
    }
    return (
        <div className="contact-form-container">
            <ContactNameField name={name} onChange={onChangeName}></ContactNameField>
            <ContactEmailField email={email} onChange={onChangeEmail}></ContactEmailField>
            <ContactMessageField message={message} onChange={onChangeMessage}></ContactMessageField>
            <ContactFormSubmit onSubmission={onSubmit}></ContactFormSubmit>
        </div>
    )
}
