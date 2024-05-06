import './Ecosystem.css';
import speedy from '../assets/speedy_gonzales.png';
import logoCart from '../assets/logo.png';

const Ecosystem = () => {
  return (
    <section className="ecosystemSection">
      <div className="ecosystemContainer">
        <div className="titleAndImage">
          <div className="titleAndText">
            <h3 className="ecosystemTitle">Ecosystem</h3>
            <p className="subEcosystemTitle">
              Speedy Token <span className="secondSubTitle">Ecosystem</span>
            </p>
            <span>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit, t amet
              conse
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do t
              amet conse eiusmod tempor i
            </span>
            <span>
              Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do
              eiusmod tempor incididunt ut labore et
            </span>
          </div>

          <img src={speedy} alt="" className="imgSpeedy" />
        </div>
        <div className="rewards">
          <div className="rewardsCard">
            <img src={logoCart} alt="" className="logoCard" />
            <span className="rewardTitle">Rewards</span>
            <span className="spanBorder"></span>
            <span className="rewardText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem
              ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
              tempor i
            </span>
          </div>
          <div className="rewardsCard">
            <img src={logoCart} alt="" className="logoCard" />
            <span className="rewardTitle">Rewards</span>
            <span className="spanBorder"></span>
            <span className="rewardText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem
              ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
              tempor i
            </span>
          </div>
          <div className="rewardsCard">
            <img src={logoCart} alt="" className="logoCard" />
            <span className="rewardTitle">Rewards</span>
            <span className="spanBorder"></span>
            <span className="rewardText">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit,Lorem
              ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod
              tempor i
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
