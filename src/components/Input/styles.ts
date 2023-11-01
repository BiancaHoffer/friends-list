import styled from 'styled-components';

interface props {
  icon: React.ReactNode;
}

export const Container = styled.div`
  display: flex;
  gap: 4px;
 
  width: 100%;
  border: 1px solid transparent;
  background-color: ${props => props.theme["gray900"]};
  color: ${props => props.theme["gray500"]};
  border-radius: 12px;

  transition: all 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme["yellow500"]};
    color: ${props => props.theme["yellow500"]};
  }

  &:focus-within {
    border: 1px solid ${props => props.theme["yellow500"]};
    color: ${props => props.theme["yellow500"]};
  }
`;

export const InputStyle = styled.input<props>`
  width: 100%;
  background-color: transparent;
  color: ${props => props.theme["gray400"]};
  border: none;
  border-radius: 0px 16px;
  padding: ${props => props.icon ? "20px 16px 20px 0px" : "16px 20px"} ;
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 26px;
  width: 5%;
  margin: 0px 8px;
`