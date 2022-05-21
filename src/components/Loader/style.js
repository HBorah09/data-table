import styled, { keyframes } from "styled-components";

const spin = keyframes`
  0% { transform: rotate(0deg) }
  25% { transform: rotate(360deg) }
  50% { transform: rotate(720deg) }
  75% { transform: rotate(1080deg) }
  100% { transform: rotate(1440deg) }
`;

export const Container = styled.div`
    display: flex;
    height: 100vh;
    justify-content: center;
    margin: auto;
    position: fixed;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    z-index: 1051;
`;

export const Spinner = styled.div`
    align-self: center;
    animation-name: ${spin};
    animation-duration: 1s;
    animation-iteration-count: infinite;
    border: 8px solid #007cba;
    border-left-color: #ededed;
    border-radius: 50%;
    display: flex;
    height: 72px;
    width: 72px;
`;