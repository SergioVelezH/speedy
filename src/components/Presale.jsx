import { useState, useEffect } from 'react';
import speedy from '../assets/Speedy_Gonzales (1).webp';
import logoSpeddy from '../assets/logo.png';
import './Presale.css';

const Presale = () => {
  const endDate = new Date('March 28, 2024 23:59:59');

  const [userBNB, setUserBNB] = useState(84.5);
  const [totalBNB, setTotalBNB] = useState(150);

  const totalBnbWidth = 100;
  const userBnbWidth = (userBNB * 100) / totalBNB;
  const calculateCountdown = () => {
    const now = new Date();
    const difference = endDate.getTime() - now.getTime();

    const days = Math.floor(difference / (1000 * 60 * 60 * 24));
    const hours = Math.floor(
      (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((difference % (1000 * 60)) / 1000);

    return {
      total: difference,
      days,
      hours,
      minutes,
      seconds,
    };
  };

  const [countdown, setCountdown] = useState(calculateCountdown());

  useEffect(() => {
    const interval = setInterval(() => {
      setCountdown(calculateCountdown());
    }, 1000);

    return () => clearInterval(interval);
  }, [endDate]);

  return (
    <section className="backgroundImageSection">
      <div className="presaleContainer">
        <div className="speedyImagePresale">
          <img src={speedy} alt="" className="speedyImage" />
          <span className="titlePresale">Presale</span>
        </div>
        <div className="payModule">
          <img src={logoSpeddy} alt="" className="logoSpeedy" />
          <div className="counterContainer">
            <span className="time"> {countdown.days} </span>
            <span className="time"> : {countdown.hours} </span>
            <span className="time"> : {countdown.minutes} </span>
            <span className="time"> : {countdown.seconds} </span>
          </div>
          <div className="memoryBar">
            <div
              className="totalMemory"
              style={{
                width: `${totalBnbWidth}%`,
              }}
            >
              <div
                className="userMemory"
                style={{
                  width: `${userBnbWidth}%`,
                }}
              ></div>
            </div>
            <div className="total">
              <p>{userBNB} BNB</p>
              <p>{totalBNB} BNB</p>
            </div>
          </div>
          <div className="youPay">
            <span>You pay:</span>
            <div className="payNumber">
              <span className="dataPay">13.42</span>
              <span className="datapayTwo">BNB</span>
            </div>
          </div>
          <div className="youReceive">
            <span>You receive:</span>
            <div className="receiveNumber">
              <span className="dataReceive">514.82</span>
              <span className="dataReceiveTwo">SPEEDYCOIN</span>
            </div>
          </div>
          <div className="buttonPayContainer">
            <button className="buttonPayModule">
              <span className="buttonSpan">Approve & Buy</span>
            </button>
          </div>
          <div className="transactionContainer">
            <span>
              See Transaction on{' '}
              <span className="blockExplorer">Block Explorer</span>
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Presale;
