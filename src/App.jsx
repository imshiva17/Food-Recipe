import React from "react";
import Navbar from "./components/Navbar";
import Mainroutes from "./routes/Mainroutes";
import BgImage from "../src/assets/2.png";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};
const App = () => {
  return (
    <div style={bgStyle} className="">
      <div className="min-h-screen bg-white/50 backdrop-blur-3xl px-20">
        <Navbar />
        <Mainroutes />
      </div>
    </div>
  );
};

export default App;
