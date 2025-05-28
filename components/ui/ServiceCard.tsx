import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

interface ServiceHeroCardProps {
  iconImage: string;
  titleMain: string;
  title1?: string;
  title2?: string;
  desc1?: string;
  desc2?: string;
}

const ServiceHeroCard = ({ iconImage, titleMain, title1, title2, desc1, desc2 }: ServiceHeroCardProps) => {
  return (
    <StyledWrapper>
      <div className="card">
        <div className="bg" />
        <div className="blob" />

        <div className="content">
          <div className="icon-container">
            <Image
              src={iconImage}
              alt={titleMain}
              width={80}
              height={80}
              className="icon"
              priority
            />
          </div>

          <h2 className="title-main hover:underline">{titleMain}</h2>

          <div className="section">
            {title1 && <h3 className="section-title font-extrabold">{title1}</h3>}
            {desc1 && <p className="section-desc font-bold">{desc1}</p>}
          </div>

          <div className="section">
            {title2 && <h3 className="section-title">{title2}</h3>}
            {desc2 && <p className="section-desc font-bold">{desc2}</p>}
          </div>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  position: relative;
  z-index: 10; /* Changed from 1111 to a more reasonable value */

  .card {
    position: relative;
    width: 320px;
    height: 450px;
    border-radius: 14px;
    z-index: 10; /* Reduced from 1111 */
    overflow: hidden;
    display: flex;
    cursor: pointer;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    box-shadow: 20px 20px 60px rgba(0, 0, 0, 0.1), -20px -20px 60px rgba(255, 255, 255, 0.8);
    transition: transform 0.3s ease;
    
    &:hover {
      transform: translateY(-10px);
    }
  }

  .bg {
    position: absolute;
    top: 5px;
    left: 5px;
    width: 310px;
    height: 440px;
    z-index: 2;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(24px);
    border-radius: 10px;
    overflow: hidden;
    outline: 2px solid white;
  }

  .blob {
    position: absolute;
    z-index: 1; /* Kept low as background element */
    top: 50%;
    left: 50%;
    width: 350px;
    height: 220px;
    border-radius: 50%;
    background: red;
    opacity: 0.7;
    filter: blur(12px);
    animation: blob-bounce 5s infinite ease;
  }

  .content {
    position: relative;
    z-index: 3; /* Content above bg but below modal */
    width: 100%;
    height: 100%;
    padding: 30px;
    display: flex;
    flex-direction: column;
  }

  .icon-container {
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .icon {
    object-fit: contain;
  }

  .title-main {
    font-size: 22px;
    font-weight: 700;
    color: #2d3748;
    margin-bottom: 20px;
    text-align: center;
  }

  .section {
    margin-bottom: 20px;
    
    &:last-child {
      margin-bottom: 0;
    }
  }

  .section-title {
    font-size: 16px;
    font-weight: 600;
    color: darkblue;
    margin-bottom: 8px;
    text-align: center;
  }

  .section-desc {
    font-size: 14px;
    color: black;
    line-height: 1.5;
    text-align: center;
  }

  @keyframes blob-bounce {
    0% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }

    25% {
      transform: translate(-100%, -100%) translate3d(100%, 0, 0);
    }

    50% {
      transform: translate(-100%, -100%) translate3d(100%, 100%, 0);
    }

    75% {
      transform: translate(-100%, -100%) translate3d(0, 100%, 0);
    }

    100% {
      transform: translate(-100%, -100%) translate3d(0, 0, 0);
    }
  }
`;

export default ServiceHeroCard;