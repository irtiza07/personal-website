import React from 'react';
import Popup from 'reactjs-popup';


export default function ContactFormSubmit(props) {
    const { onSubmission, confirmModelOpen } = props;
    const confirmationModalStyle = {
        width: '300px',
        height: '100px',
        textAlign: 'center',
        fontStyle: 'italic',
        fontWeight: '500',
    }

    return (
        <div>
            <input className="input-submit" type="submit" value="Submit" onClick={onSubmission}></input>
            <Popup open={confirmModelOpen} contentStyle={confirmationModalStyle}>
                <div>Thank you for reaching out to me. I will get back to you as soon as I can.</div>
            </Popup>
        </div>
    )
}
