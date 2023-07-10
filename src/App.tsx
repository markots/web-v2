import React from "react";

import Features from "./Screen/Features";
import FeedSlider2 from "./Screen/Features/slide2";
import FeedSlider3 from "./Screen/Features/slide3";
import FeedSlider4 from "./Screen/Features/slide6";
import Feature5 from "./Screen/Features/slide5";
import HorizontalScrollContainer from "./component/Features/horin";
import FeedSlider6 from "./Screen/Features/slide6";
import FeedSlider7 from "./Screen/Features/slide7";
import FeedSlider5 from "./Screen/Features/slide8";
import Header from "./Screen/Header";

function App() {
  return (
    <div className="flew-grow-1  bg-black relative w-full">
      <Header />
      <Features />
      <FeedSlider2 />
      <FeedSlider3 />

      <Feature5 />
      <FeedSlider6 />
      <FeedSlider7 />
      <FeedSlider5 />
    </div>
  );
}

export default App;
