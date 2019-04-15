import React from 'react'

export default function InputEmail(props) {
    const { email, onChange, onSubmission } = props;
    return (
        <div className="subscription-form">
            <input className="email-field" placeholder="Your email.." value={email} onChange={onChange}></input>
            <input className="input-subscribe" type="submit" value="Subscribe" onClick={onSubmission}></input>
        </div >
    )
}
