import { useState } from "react";
import { Route, Routes, Link } from "react-router-dom";
import "./App.css";
import Footer from "./Components/Footer";
import Homepage from "./Components/Homepage";

import Navbar from "./Components/Navbar";
import NftList from "./Components/NftList";

function App() {
  const [light, SetLight] = useState(false);
  console.log(light);
  return (
    <div className="App">
      <Navbar SetLight={SetLight} light={light} />
      {/* <Homepage light={light} /> */}
      <Routes>
        <Route path="/" element={<Homepage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
