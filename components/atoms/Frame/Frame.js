import styled from "styled-components";

export const Frame = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border: 1px solid black;
  background-color: white;
  position: relative;
  width: ${ ({ width = "70%" }) => width };
  margin: ${ ({ margin }) => margin };
  padding: ${ ({ padding }) => padding };

  @media (max-width: 300px) {
    padding: 10px;
    width: 90%;
    margin: 0 auto;
  }

  ::before {
    content: '';
    background-image: url(${ ({ logoSrc }) => "./" + logoSrc });
    background-size: 100px 60px;
    background-repeat: no-repeat;
    background-color: white;
    display: block;
    position: absolute;
    top: -33px;
    left: 10px;
    width: 100px;
    height: 60px;
  }

  @media (max-width: 500px) {
    width: 100%;
  }
`;