import styled from 'styled-components';


export const FooterBase = styled.footer`
  background: var(--white);
  border-top: 2px solid #f29a07;
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--black);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
  }
`;

export const ImageBase = styled.img`
  height: 60px;
`;
