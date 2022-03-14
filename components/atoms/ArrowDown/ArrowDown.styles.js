import styled from "styled-components";

export const ArrowSize = styled.div`
  width: 2em;

  &.bounce2 {
    animation: bounce2 2s ease infinite;
  }

  @keyframes bounce2 {
    0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
    }
    40% {
      transform: translateY(-4px);
    }
    60% {
      transform: translateY(-2px);
    }
  }
`;