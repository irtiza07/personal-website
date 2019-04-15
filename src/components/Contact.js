import React from 'react'
import Header from './Header';
import Basic from './Basic';
import ContactFormContainer from './ContactFormContainer';
import Footer from './Footer';

export default function Contact() {
    const title = "I'm excited to hear what you have to say";
    const content = "Shoot me a message about whatever you want to know about me. Whether its any new blog post ideas, project collaboration or just starting a conversation, feel free to fill up the details and submit the form below."
    return (
        <div className="contact-container">
            <Header></Header>
            <Basic title={title} content={content}></Basic>
            <ContactFormContainer></ContactFormContainer>
            <Footer></Footer>
        </div>
    )
}
