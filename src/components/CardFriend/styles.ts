import styled from 'styled-components';

export const Container = styled.div`
  background-color: ${props => props.theme["gray800"]};
  border-radius: 12px;
  max-width: 900px;
  padding: 40px;
  margin: auto;
  margin-top: 16px;

  border:1px solid transparent;
  cursor: pointer;

  transition: all 0.3s ease;

  display: flex;
  gap: 32px;
  align-items: center;

  &:hover {
    border: 1px solid ${props => props.theme["yellow500"]};
  }

  & > div {
    display: flex;
    
    flex-direction: column;
    gap: 16px;
    color: ${props => props.theme["gray400"]};

    & > p:nth-child(1) {
      color: white;
      font-weight: 600;
      font-size: 1.1rem;
    }

    & > p:nth-child(2) {
      color: ${props => props.theme["gray400"]};
      font-weight: 500;
      font-size: 1rem;
    }
  }
`