import React from 'react'
import FormContainer from './FormContainer';

export default function MailingList() {
    return (
        <div className="mailing-list-container">
            <h1 className="basic-section-title">Writing</h1>
            <h2 className="basic-section-text">I learn best by teaching. As a result, I have a dedicated blog where I write and journal my progress as a software engineer in the Silicon Valley. The blog consists of posts from a myriad of topics starting from new web technologies to gadget reviews to fitness for software engineers. If you are interested, join the mailing list below and I will send a weekly email digest consisting of everything that happened in the world of technology that week, tips and tricks that I picked up over the week, anything trending in the world of web development and finally, any new blog posts that was uploaded that week. Once a week. No Spam.</h2>
            <FormContainer></FormContainer>
        </div>
    )
}
