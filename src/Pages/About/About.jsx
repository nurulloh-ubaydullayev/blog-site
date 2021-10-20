import "./About.scss";
import React from "react";

// Components
import Header from "../../Components/Header/Header";
import BlogIntro from "../../Components/BlogIntro/BlogIntro";
import NajotTalim from "../../Components/najotTalim/najotTalim";
import MyWorks from "../../Components/MyWorks/MyWorks";
import PortHeader from "../../Components/PortHeader/PortHeader";
import Footer from "../../Components/Footer/Footer";
import TelegramLink from "../../Components/TelegramLink/TelegramLink";

function About() {
  const fullPage = React.useRef(null);

  React.useEffect(() => {
    // window.scrollTo(0, document.body.scrollHeight);
    // window.addEventListener("scroll", () => {
    //   fullPage.current.style.bottom =
    //     Math.round(window.pageYOffset) * -1 + "px";
    // });
  }, []);

  return (
    <div className="about" ref={fullPage}>
      <Footer />
      <BlogIntro />
      <NajotTalim />
      <TelegramLink />
      <MyWorks />
      <PortHeader />
      <Header />
    </div>
  );
}

export default About;
