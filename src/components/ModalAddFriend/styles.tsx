import styled from 'styled-components';

interface props {
  closeModal?: boolean;
}

export const Opacity = styled.div<props>`
  position: fixed;
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
  background-color: ${props => props.theme["gray800"]};
  padding: 32px;
  border-radius: 8px;
  width: 900px;
  margin: 12px;
  cursor: auto;

  z-index: 10;

  #title-buttonclose {
    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 32px;

    & > button {
      background-color: transparent;
      border: none;
      font-size: 32px;
      color: white;

      transition: color 0.3s;

      &:hover {
        color: ${props => props.theme["yellow500"]}
      } 
    }

    & > h2 {
      font-size: 18px;
    }
  }

  form {
      display: flex;
      flex-direction: column;
      gap: 16px
    } 

  #name-email, #image-phone, #country-city, #buttons {
    display: flex;
    grid-template-columns: 1fr 1fr;
    gap: 16px
  }

  #buttons {
    margin-top: 18px;
  }
  
`;