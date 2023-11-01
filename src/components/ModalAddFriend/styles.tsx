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
    
  }
`;