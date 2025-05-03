import React from 'react';
import styled from 'styled-components';

interface FlipCardProps {
    title: string;
    description: string;
}

const FlipCard = ({ title , description }: FlipCardProps) => {
    return (
        <StyledWrapper>
            <div className="card">
                <div className="card-inner">
                    <div className="card-front">
                        <p>{ title }</p>
                    </div>
                    <div className="card-back">
                        <p>{ description }</p>
                    </div>
                </div>
            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: 400px;
    height: 300px;
    perspective: 1000px;
    text-align: center;
  }

  .card-inner {
    width: 100%;
    height: 100%;
    position: relative;
    transform-style: preserve-3d;
    transition: transform 0.999s;
  }

  .card:hover .card-inner {
    transform: rotateY(180deg);
  }

  .card-front,
  .card-back {
    position: absolute;
    width: 100%;
    height: 100%;
    backface-visibility: hidden;
  }

  .card-front {
    background-color: #6A2C70;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #6A2C70;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(0deg);
  }

  .card-back {
    background-color: #F08A5D;
    color: #fff;
    display: flex;
    align-items: center;
    border: 10px solid #F08A5D;
    border-radius: 10px;
    justify-content: center;
    font-size: 24px;
    transform: rotateY(180deg);
  }`;

export default FlipCard;
