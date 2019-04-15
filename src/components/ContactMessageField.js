import React from 'react'

export default function ContactMessageField(props) {
    const { message, onChange } = props;
    return (
        <div>
            <textarea className="contact-message-field" placeholder="Message" value={message} onChange={onChange}></textarea>
        </div>

    )
}
