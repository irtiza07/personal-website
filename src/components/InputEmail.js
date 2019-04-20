import React from 'react';
import Popup from 'reactjs-popup';

export default function InputEmail(props) {
    const { email, onChange, onSubmission, confirmationModalOpen, setConfirmationModalOpen } = props;
    const confirmationModalStyle = {
        width: '300px',
        height: '100px',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '500',
    }
    return (
        <div className="subscription-form">
            <input className="email-field" placeholder="Your email.." value={email} onChange={onChange}></input>
            <input className="input-subscribe" type="submit" value="Subscribe" onClick={onSubmission}></input>
            <Popup open={confirmationModalOpen} contentStyle={confirmationModalStyle}>
                <div>Thank you for reaching out to me. I will get back to you as soon as I can.</div>
            </Popup>
        </div >
    )
}
