import React from "react";
import Welcome from "./Welcome";
import Header from "./Header";
import Basic from "./Basic";
import Skills from "./Skills";
import MailingList from "./MailingList";
import Footer from "./Footer";

export default function Home() {
  const aboutMeTitle = "Hi, I'm Irtiza. Nice to meet you.";
  const aboutMeText =
    "I am a recent Computer Science graduate from Georgia Institute of Technology working as a software engineer in the Silicon Valley. Since beginning my journey as a programmer, I have worked on algorithmically complex projects, such as implementing custom UDP protocols, training Convulutional Neural Networks and implementing facial recognition algorithms, as well as more real-world consumer products for companies like Yelp and JDA Software. Combining experience with my curiosity about the lastest advances in technology, I can code and design solutions to the most complex problems using cutting edge technology.";

  return (
    <div className="home-container">
      <Header />
      <Welcome />
      <Basic title={aboutMeTitle} content={aboutMeText} />
      <Skills />
      <MailingList />
      <Footer />
    </div>
  );
}
