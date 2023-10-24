import styled from 'styled-components';

interface props {
  closeModal?: boolean;
}

export const Container = styled.button<props>`
  position: fixed;
  //z-index: 10;
  top:0;

  border: none;
  width: 100%;
  min-height: 100%;
  background-color: #0b0b0bb6;

  display: ${props => props.closeModal === true ? "flex" : "none"};
  justify-content: center;
  align-items: center;
`;

export const ContainerModal = styled.div`
 // position: absolute;
  background-color: ${props => props.theme["gray800"]};
  padding: 40px;
  border-radius: 16px;
  width: 900px;
  margin: 12px;
  cursor: auto;

  z-index: 999;

  & > div:nth-child(1) {
    display: flex;
    justify-content: space-between;
    align-items: center;

    color: ${props => props.theme["white"]};
    font-weight: 600;
    font-size: 1.2rem;

    > button {
      background-color: transparent;
      border: none;
      padding: 20px;
      font-size: 28px;
      color: ${props => props.theme["white"]};

      transition: all 0.3s ease-out;

      &:hover {
        color: ${props => props.theme["yellow500"]};
      }
    }
  }

    form {
      display: flex;
      flex-direction: column;

      p {
        text-align: start;
        color: ${props => props.theme["gray500"]};
        font-size: 1.1rem;
        margin-bottom: 8px;
      }

      p:nth-child(2) {
        margin-top: 20px;
      }

      & > div {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
      }

      & > span {
        margin-top: 40px;
        display: flex;
        gap: 16px;
      }
  }
`;