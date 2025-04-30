import { Github } from '@/icons/SocialIcons/Github';
import { Instagram } from '@/icons/SocialIcons/Intagram';
import { Linkedin } from '@/icons/SocialIcons/LinkedIn';
import { Whatsapp } from '@/icons/SocialIcons/Whatsapp';
import React from 'react';
import styled from 'styled-components';

const SocialFooter = () => {
    return (
        <StyledWrapper>
            <div className="card">
                
                <a href="https://www.instagram.com/nuvance_tech/" target='_blank' className="socialContainer containerOne">
                  <Instagram/>
                </a>

                <a href="https://github.com/Nuvance-Technologies" target='_blank' className="socialContainer containerTwo">
                  <Github/>
                </a>

                <a href="https://www.linkedin.com/company/nuvance-technologies/" target='_blank' className="socialContainer containerThree">
                  <Linkedin/>
                </a>

                <a href="#" target='_blank' className="socialContainer containerFour">
                  <Whatsapp/>
                </a>

            </div>
        </StyledWrapper>
    );
}

const StyledWrapper = styled.div`
  .card {
    width: fit-content;
    height: fit-content;
    background-color: #0e0e0e;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 25px 25px;
    gap: 20px;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.055);
  }

  /* for all social containers*/
  .socialContainer {
    width: 52px;
    height: 52px;
    background-color: rgb(44, 44, 44);
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    transition-duration: .3s;
  }
  /* instagram*/
  .containerOne:hover {
    background-color: #d62976;
    transition-duration: .3s;
  }
  /* Github */
  .containerTwo:hover {
    background-color: black;
    transition-duration: .3s;
  }
  /* linkedin*/
  .containerThree:hover {
    background-color: #0072b1;
    transition-duration: .3s;
  }
  /* Whatsapp*/
  .containerFour:hover {
    background-color: #128C7E;
    transition-duration: .3s;
  }

  .socialContainer:active {
    transform: scale(0.9);
    transition-duration: .3s;
  }

  .socialSvg {
    width: 17px;
  }

  .socialSvg path {
    fill: rgb(255, 255, 255);
  }

  .socialContainer:hover .socialSvg {
    animation: slide-in-top 0.3s both;
  }

  @keyframes slide-in-top {
    0% {
      transform: translateY(-50px);
      opacity: 0;
    }

    100% {
      transform: translateY(0);
      opacity: 1;
    }
  }`;

export default SocialFooter;
