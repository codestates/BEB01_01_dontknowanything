import "./App.css";
import Footer from "./Components/Footer";

function App() {
  return (
    <div className="hero">
      {/* navbar */}
      <div className="lamp_container">
        <img className="lamp" src="/img/lamp.png" />
        <img className="light" src="/img/light.png" />
      </div>

      <div className="text_box">
        <h2>Super Duper NFT Market</h2>
        <span>
          We give you an incredible experience through NFT transactions.
        </span>
        <p>
          Your assets will increase by purchasing NFT.
          <p>Much more than before!</p>
        </p>
        <p>Experience the power of new technologies just by purchasing!</p>
      </div>

      <Footer />
    </div>
  );
}

export default App;
