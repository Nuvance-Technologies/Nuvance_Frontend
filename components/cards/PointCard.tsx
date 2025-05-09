import React from 'react';
import styled from 'styled-components';

interface PointCardProps {
  text: string;
}

const PointCard = ({ text }: PointCardProps) => {
  return (
    <StyledWrapper>
      <button className="cti">
        <div className="CTI">
          {text}
        </div>
      </button>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .cti {
    background-color: #6019bd;
    padding: 17px 30px;
    border: 3px solid transparent;
    border-radius: 0.6em;
    transition: 0.2s;
    cursor: pointer;
  }

  .cti:hover {
    background-color: #47046e;
    border: 3px solid #6019bd;
    box-shadow: 0px 0px 27px 5px #6019bd;
  }

  .CTI {
    color: #fff;
    font-family: 'Courier New', Courier, monospace;
    font-size: 17px;
    font-weight: bold;
    overflow: hidden;
    border-right: 4px solid transparent;
    white-space: nowrap;
    margin: 0 auto;
  }

  .cti:hover .CTI {
    border-right: 4px solid #6019bd;
    animation: letters 1.75s steps(22, end),
      cursor .4s step-end infinite;
  }

  @keyframes letters {
    from {
      width: 0;
    }

    to {
      width: 100%;
    }
  }

  @keyframes cursor {
    from {
      border-color: transparent
    }

    50% {
      border-color: #6019bd
    }
  }`;

export default PointCard;
