import { useState } from "react";
import "./App.scss";
import Card from "./components/Card";
import Socials from "./components/Socials";
import Contact from "./components/Contact";
import Scrollers from "./components/scroller/Scrollers";

function App() {
  return (
    <>
      <div>
        <div className="container grid grid-cols-2 gap-10 items-center justify-center py-10">
          <Card
            cardBg={"#b68bed"}
            cardTextColor={"#532eb9"}
            cardHeadingFirst={"UI/UX & Graphic "}
            cardHeadingSecond={"Design"}
            cardProjects={"148+ Projects"}
            cardItems={[
              "Experience Design",
              "Interaction",
              "Illustration",
              "Animation",
            ]}
          />
          <Card
            cardBg={"#c4f8d3"}
            cardTextColor={"#1b646b"}
            cardHeadingFirst={"FrontEnd"}
            cardHeadingSecond={"Developer"}
            cardProjects={"148+ Projects"}
            cardItems={[
              "Experience Design",
              "Interaction",
              "Illustration",
              "Animation",
            ]}
          />
        </div>
        <Scrollers />
        <div className="container socials socials_section">
          <Socials />
        </div>
      </div>

      <Contact />
    </>
  );
}

export default App;
