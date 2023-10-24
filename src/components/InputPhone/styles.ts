import styled from 'styled-components';

interface props {
  openSelect: boolean;
}

export const Container = styled.div`
  display: flex;
  gap: 4px;

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

export const InputStyle = styled.input`
  //width: 100%;
  background-color: transparent;
  color: ${props => props.theme["gray400"]};
  border: none;
  border-radius: 0px 16px 16px 0px;
  padding: 16px ;
`;

export const Select = styled.div`
  background-color: ${props => props.theme["gray800"]};
  min-width: 80px;
  border-radius: 12px 0px 0px 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  
  #phone-select {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  #select-number-country {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
    z-index: 999;
  }
`

export const SelectButton = styled.div`
  display: flex;
  gap: 8px;
  font-size: 1rem; 
`

export const Option = styled.ul<props>`
  position: relative;
  display: ${props => props.openSelect ? "inline" : "none"};  

  width: 100%;
  margin-top: 4px;
  border-radius: 4px;
  border: none;
`

export const ContentOption = styled.div`
  position: absolute;

  width: 100%;
  background-color: ${props => props.theme["gray900"]};
  border-radius: 8px;
  border: none;

  #option {
    position: relative;
    display: flex;

    align-items: center;
    gap: 12px;
    background-color: ${props => props.theme["gray900"]};
    margin-top: 8px;
    width: 100%;
    padding: 20px;
    border-radius: 4px;
    border: 1px solid transparent;

    &:hover {
      background-color: ${props => props.theme["gray800"]};
      border: 1px solid ${props => props.theme["yellow500"]}
    }
  }

  #option input[type="radio"]{
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  p {
      margin: 0;
      color: ${props => props.theme["gray400"]};
    }
`