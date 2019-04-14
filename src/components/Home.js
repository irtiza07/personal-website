import React from 'react';
import Welcome from './Welcome';
import Header from './Header';
import Basic from './Basic';
import Skills from './Skills';

export default function Home() {
    const aboutMeTitle = "Hi, I'm Irtiza. Nice to meet you.";
    const aboutMeText = 'I am a recent Computer Science graduate from Georgia Institute of Technology working as a software engineer in the Silicon Valley. Since beginning my journey as a programmer, I have worked on algorithmically complex projects, such as implementing custom UDP protocols, training Convulutional Neural Networks and implementing facial recognition algorithms, as well as more real-world consumer products for companies like Yelp. Combining experience with my curiosity about the lastest advances in technology, I can code and design solutions to the most complex problems using cutting edge technology.';

    const writingText = "I learn best by teaching. As a result, I have a dedicated blog where I write and journal my progress as a software engineer in the Silicon Valley. The blog consists of posts from a myriad of topics starting from new web technologies to gadget reviews to fitness for software engineers. If you are interested join the mailing list below and I will send a weekly email digest. Once a week. No Spam."


    return (
        <div className="home-container">
            <Header></Header>
            <Welcome></Welcome>
            <Basic title={aboutMeTitle} content={aboutMeText}></Basic>
            <Skills></Skills>
            <Basic title="Writing" content={writingText}></Basic>
        </div>
    )
}
