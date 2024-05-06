import './Hero.css';
import SpeedyGonzales from '../assets/Speedy_Gonzales.webp';
import CertikLogo from '../assets/certikLogo.jpg';
import SpeedyLogo from '../assets/logo.png';

const Hero = () => {
  return (
    <>
      <div className="heroContainer">
        <h1>
          The Happy <span>Speedy Coin</span> With BNB Rewards
        </h1>
        <p>
          Lorem ipsum dolor sit amet consectetillum archi rum,. <br />
          tecto molestias iure sed tenetur voluptate ? Re
        </p>
        <div className="buttonContainer">
          <button>PRESALE</button>
          <button>WHITEPAPER</button>
        </div>
        <div className="imageContainer">
          <img
            className="centralImage"
            src={SpeedyGonzales}
            alt="Speedy grande"
          />
        </div>
        <div className="chainAddressContainer">
          <img src={SpeedyLogo} alt="" />
          <div className="chainAddressInfo">
            <span>BNB Chain Address:</span>
            <span>0x42d2d2A50C56867A4bc17Edf4a49dBa490a38866</span>
          </div>
          <button className="copyButton">Copy to clipboard</button>
        </div>
      </div>
      <div className="sponsorBanner">
        <span>CONTRACT AUDITED BY</span>
        <img src={CertikLogo} alt="" />
      </div>
    </>
  );
};

export default Hero;
