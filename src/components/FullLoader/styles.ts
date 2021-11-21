import styled from 'styled-components';

export const LoadingContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  bottom: 0;
  z-index: 10;
  background: gray;
  opacity: 0.3;

  .loader {
    position: fixed;
  }
`;
