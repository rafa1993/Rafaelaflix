import styled from 'styled-components';

export const ContentAreaContainer = styled.section`
  margin-left: 5%;
  margin-right: 5%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  z-index: 10;
  @media (max-width: 800px) {
    padding-top: 100px;
    flex-direction: column;
  }
`;

ContentAreaContainer.Item = styled.div`
  width: 50%;
  display: inline-block;
  margin-bottom: 50px;
  @media (max-width: 800px) {
    width: 100%;
  }
`;

ContentAreaContainer.Category = styled.h1`
  font-family: Roboto;
  font-style: normal;
  font-weight: normal;
  font-size: 60px;
  line-height: 70px;
  display: flex;
  align-items: center;
  text-align: center;
  display: inline-block; 
  padding: 25px;
  line-height: 1;
  border-radius: 4px;

  @media (max-width: 800px) {
    display: none;
    font-size: 18px;
    padding: 10px;
  }
`;

ContentAreaContainer.Description = styled.p`
  @media (max-width: 800px) {
    display: none;
  }
`;

ContentAreaContainer.Title = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 40px;
  line-height: 1;
  margin-top: 0;
  margin-bottom: 32px;

  @media (max-width: 800px) {
    font-size: 32px;
    text-align: center;
  }
`;

export const BannerMainContainer = styled.section`
  height: 90vh;
  position: relative;
  letter-spacing: 0.8px;
  color: #fff;
  background-image: ${({ backgroundImage }) => `url(${backgroundImage})`}; 
  background-size: cover;
  background-position: center;
  @media (max-width: 800px) {
    height: auto;
    min-height: 50vh;
  }

  &:after,
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    right: 0;
    margin: auto;
    height: 20%;
  }

  &:before {
    top: 0;
    height: 100%;
    background: rgb(242,154,34);
  }

  &:after {
    bottom: 0;
    background: linear-gradient(0deg, #f29a54 0%, transparent 80%);
  }
`;

export const WatchButton = styled.button`
  font-family: 'Roboto', sans-serif;
  color: #fff;
  border: 3px solid #fff;
  box-sizing: border-box;
  cursor: pointer;
  padding: 15px 40px 15px 40px;
  text-transform: uppercase;
  font-style: normal;
  background-color: #f29a07;
  font-weight: 600;
  font-size: 15px;
  letter-spacing: 0.5px;
  outline: none;
  border-radius: 8px;
  text-decoration: none;
  display: none;
  transition: opacity .3s;
  margin: 0 auto;
  @media (max-width: 800px) {
    display: block;
  }
`;