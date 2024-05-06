import './Tokenomics.css';
import graphic from '../assets/tokenomics.png';

const Tokenomics = () => {
  return (
    <section className="tokenomicsSection">
      <div className="tokenomicsContainer">
        <div className="tokenomicsTitleContainer">
          <span className="tokenomicsTitle">Tokenomics</span>
        </div>
        <div className="tokenInfo">
          <div className="cardsContainer">
            <div className="infoCard">
              <span className="tokenCardTitle">Token Name</span>
              <span className="tokenCardSubTitle">SPEEDY</span>
            </div>
            <div className="infoCard">
              <span className="tokenCardTitle">Token Symbol</span>
              <span className="tokenCardSubTitle">SPDY</span>
            </div>
            <div className="infoCard">
              <span className="tokenCardTitle">Total Supply</span>
              <span className="tokenCardSubTitle">1 Trillion</span>
            </div>
          </div>
          <div className="cardsContainer">
            <div className="infoCard">
              <span className="tokenCardTitle">Token Name</span>
              <span className="tokenCardSubTitle">SPEEDY</span>
            </div>
            <div className="infoCard">
              <span className="tokenCardTitle">Token Symbol</span>
              <span className="tokenCardSubTitle">SPDY</span>
            </div>
            <div className="infoCard">
              <span className="tokenCardTitle">Total Supply</span>
              <span className="tokenCardSubTitle">1 Trillion</span>
            </div>
          </div>
        </div>
        <div className="grapichContainer">
          <img src={graphic} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Tokenomics;
