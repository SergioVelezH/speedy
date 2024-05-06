import Logo from '../assets/logo.png';
import '../variables.css';
import './Nav.css';

const Nav = () => {
  return (
    <div className="navContainer">
      <div>
        <img src={Logo} alt="Logo Speedy" />
        <p>
          {' '}
          <span>Speedy</span>Coin
        </p>
      </div>
      <ul>
        <li>Home</li>
        <li>Whitepaper</li>
        <li>Roadmap</li>
        <li>Ecosystem</li>
        <li>Community</li>
      </ul>
      <button>connect wallet</button>
    </div>
  );
};

export default Nav;
