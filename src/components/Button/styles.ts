import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;

  max-width: fit-content;
  padding: 12px 20px;
  border-radius: 12px;
  background: ${props => props.theme["yellow500"]};
  cursor: pointer;

  transition: all 0.4s ;

  &:hover {
    background: ${props => props.theme["yellow600"]};
  }
`;

export const ButtonStyle = styled.button`
  background-color: transparent;
  border: none;
  color: ${props => props.theme["white"]};
  font-size: 1.1rem;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
`