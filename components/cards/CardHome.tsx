import React from 'react';
import styled from 'styled-components';

interface CardHomeProps {
    title: string;
    description: string;
}

const CardHome = ({ title, description }: CardHomeProps) => {
    return (
        <StyledWrapper>
            <div className="outer">
                <div className="dot" />
                <div className="card">
                    <div className="ray" />
                    <div className="text-container">
                        <div className="text">{title}</div>
                    </div>
                    <div className="description">{description}</div>
                    <div className="line topl" />
                    <div className="line leftl" />
                    <div className="line bottoml" />
                    <div className="line rightl" />
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .outer {
    width: 380px;
    height: 320px;
    border-radius: 10px;
    padding: 1px;
    background: radial-gradient(circle 230px at 0% 0%, #ffffff, #0c0d0d);
    position: relative;
    cursor: pointer;
    transition: all 0.5s ease
  }
  
  .outer:hover {
    transform: scale(1.1);
  }
  
  .dot {
    width: 5px;
    aspect-ratio: 1;
    position: absolute;
    background-color: #fff;
    box-shadow: 0 0 10px #ffffff;
    border-radius: 100px;
    z-index: 2;
    right: 10%;
    top: 10%;
    animation: moveDot 6s linear infinite;
  }

  @keyframes moveDot {
    0%,
    100% {
      top: 10%;
      right: 10%;
    }
    25% {
      top: 10%;
      right: calc(100% - 35px);
    }
    50% {
      top: calc(100% - 30px);
      right: calc(100% - 35px);
    }
    75% {
      top: calc(100% - 30px);
      right: 10%;
    }
  }

  .card {
    z-index: 1;
    width: 100%;
    height: 100%;
    border-radius: 9px;
    border: solid 1px #202222;
    background-size: 20px 20px;
    background: radial-gradient(circle 280px at 0% 0%, #444444, #0c0d0d);
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    flex-direction: column;
    color: #fff;
    padding: 30px;
    box-sizing: border-box;
    overflow: visible; /* Changed to allow text to bulge out */
  }

  

  .ray {
    width: 220px;
    height: 45px;
    border-radius: 100px;
    position: absolute;
    background-color: #c7c7c7;
    opacity: 0.4;
    box-shadow: 0 0 50px #fff;
    filter: blur(10px);
    transform-origin: 10%;
    top: 0%;
    left: 0;
    transform: rotate(40deg);
    z-index: 1; /* Ensure ray stays behind text */
  }

  .text-container {
    position: relative;
    z-index: 3; /* Higher than ray */
    margin-bottom: 20px;
    text-align: center;
  }

  .card .text {
    font-weight: bolder;
    font-size: 2rem;
    background: linear-gradient(45deg, #000000 4%, #fff, #000);
    background-clip: text;
    color: transparent;
    position: relative;
    display: inline-block;
    text-shadow: 0 0 8px rgba(255, 255, 255, 0.3); /* Added glow effect */
    transform: translateY(-10px); /* Bulge effect - lifts text up */
    padding: 0 10px;
  }

  .description {
    font-size: 1rem;
    line-height: 1.5;
    text-align: center;
    padding: 0 15px;
    word-break: break-word;
    position: relative;
    z-index: 2; /* Above ray but below title */
  }

  .line {
    width: 100%;
    height: 1px;
    position: absolute;
    background-color: #2c2c2c;
    z-index: 2;
  }
  .topl {
    top: 15%;
    background: linear-gradient(90deg, #888888 30%, #1d1f1f 70%);
  }
  .bottoml {
    bottom: 15%;
  }
  .leftl {
    left: 15%;
    width: 1px;
    height: 100%;
    background: linear-gradient(180deg, #747474 30%, #222424 70%);
  }
  .rightl {
    right: 15%;
    width: 1px;
    height: 100%;
  }`;

export default CardHome;