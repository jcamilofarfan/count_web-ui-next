import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  color: ${(props) => props.theme.colors.PrimaryTextColor};
`;

export const Content = styled.div`
  display: flex;
  flex: 1;
`;

export const PageContainer = styled.div`
  padding: 20px;
  width: 100%;
`;

export const ContainerLoader = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
`;
export const Loading = styled.div`
  display: inline-block;
  position: relative;
  width: 80px;
  height: 80px;
  div {
    display: inline-block;
    position: absolute;
    left: 8px;
    width: 16px;
    background: ${(props) => props.theme.colors.PrimaryColor};
    animation: lds-facebook 1.2s cubic-bezier(0, 0.5, 0.5, 1) infinite;
  }
  div:nth-child(1) {
    left: 8px;
    animation-delay: -0.24s;
  }
  div:nth-child(2) {
    left: 32px;
    animation-delay: -0.12s;
  }
  div:nth-child(3) {
    left: 56px;
    animation-delay: 0;
  }
  @keyframes  lds-facebook {
    0% {
      top: 8px;
      height: 64px;
    }
    50%, 100% {
      top: 24px;
      height: 32px;
    }
  }
`;