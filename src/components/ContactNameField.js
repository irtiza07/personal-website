import React from 'react'

export default function ContactNameField(props) {
    const { name, onChange } = props;
    return (
        <div>
            <input className="contact-name-field" placeholder="Full Name" value={name} onChange={onChange}></input>
        </div>

    )
}
