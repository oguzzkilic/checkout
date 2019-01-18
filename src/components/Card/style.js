import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 270px;
  height: 170px;
  margin-left: 60px;
  margin-top: 25px;
  box-sizing: border-box;
  perspective: 1000px;
`;

export const Flipper = styled.div`
  transition: 0.6s;
  transform-style: preserve-3d;
  position: relative;
  transform: rotateY(0deg);
  ${props => {
    if (props.flip) {
      return `
        transform: rotateY(180deg);
      `;
    }
  }}
`;

export const Front = styled.div`
  width: 270px;
  height: 170px;
  background-color: ${props => props.theme.cardBackground};
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  transform: rotateY(0deg);
`;

export const Back = styled.div`
  width: 270px;
  height: 170px;
  background-color: ${props => props.theme.cardBackground};
  backface-visibility: hidden;
  position: absolute;
  top: 0;
  left: 0;
  transform: rotateY(180deg);

  &::before {
    content: '';
    width: 100%;
    height: 30px;
    position: absolute;
    z-index: 1;
    top: 15px;
    background-color: ${props => props.theme.tabBorder};
  }
`;

export const Cvc = styled.div`
  width: 50px;
  height: 20px;
  background-color: ${props => props.theme.white};
  border-radius: 2px;
  position: absolute;
  right: 40px;
  bottom: 0;
  margin-bottom: 30px;
  padding: 10px 0;
  text-align: center;
`;

export const Logo = styled.div`
  width: 100%;
  height: 45px;
  background-color: ${props => props.theme.white};
  border: 1px solid ${props => props.theme.inputBorder};
  box-sizing: border-box;
`;

export const Details = styled.div`
  height: 105px;
  margin: 15px;
  box-sizing: border-box;
  position: relative;
`;

export const CardNumber = styled.div`
  width: 100%;
  font-family: Courier, Arial;
  font-weight: normal;
  font-size: 18px;
  color: ${props => props.theme.cardColor};
`;

export const ExpirationDate = styled.div`
  width: 100%;
  font-family: Courier, Arial;
  font-size: 14px;
  font-weight: light;
  margin-top: 20px;
  padding-right: 80px;
  text-align: right;
  box-sizing: border-box;
  color: ${props => props.theme.cardColor};
`;

export const CardHolder = styled.div`
  width: 100%;
  font-family: Courier, Arial;
  font-size: 14px;
  box-sizing: border-box;
  margin-top: 20px;
  color: ${props => props.theme.cardColor};
`;

export const CardType = styled.div`
  width: 50px;
  height: 30px;
  background-color: ${props => props.theme.white};
  border-radius: 2px;
  position: absolute;
  right: 0;
  bottom: 0;
  margin-bottom: 10px;
  text-align: center;
`;

export const Image = styled.img`
  display: block;
  width: 30px;
  height: auto;
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  margin: auto;
  box-sizing: border-box;
`;
