import React from 'react'

export default function ContactEmailField(props) {
    const { email, onChange } = props;
    return (
        <div>
            <input className="contact-email-field" placeholder="Email" value={email} onChange={onChange}></input>
        </div>

    )
}
