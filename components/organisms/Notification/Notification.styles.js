import styled from "styled-components";

export const NotificationContainer = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  height: 5rem;
  width: 100%;
  font-size: 1.3rem;
  background-color: ${ ({ theme }) => theme.colors.secondaryColor };
  display: flex;
  justify-content: space-between;
  align-items: center;
  color: white;
  padding: 0.5rem 10%;
  box-shadow: 0 -3px 6px rgba(0, 0, 0, 0.2);

  h2 {
    color: black;
  }

  &.pending {
    background-color: ${ ({ theme }) => theme.colors.accentColor };
  }

  &.success {
    background-color: ${ ({ theme }) => theme.colors.primaryColor };
  }

  &.error {
    background-color: #fb3939;
  }
`;