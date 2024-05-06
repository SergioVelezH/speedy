import './Footer.css';
import footerImage from '../assets/pp,550x550.u1.jpg';
import twitterLogo from '../assets/twitter.png';
import instagramLogo from '../assets/insta.png';
import telegramLogo from '../assets/telegram.png';
const Footer = () => {
  return (
    <div className="footerContainer">
      <img src={footerImage} alt="footer logo" />
      <div>
        <h3>Join Speedy</h3>
        <p className="speedyPresale">Speedy token presale</p>
        <p className="speedyInfo">
          Lorem ipsum dolor sit amet tionem culpa velit <br />
          qu non libe
        </p>
        <button>Presale</button>
        <ul>
          <li>
            <img src={twitterLogo} alt="twitter" />
          </li>
          <li>
            <img src={instagramLogo} alt="instagram" />
          </li>
          <li>
            <img src={telegramLogo} alt="telegram" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Footer;
