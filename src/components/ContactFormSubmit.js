import React from 'react'

export default function ContactFormSubmit(props) {
    const { onSubmission } = props;
    return (
        <div>
            <input className="input-submit" type="submit" value="Submit" onClick={onSubmission}></input>
        </div>
    )
}
