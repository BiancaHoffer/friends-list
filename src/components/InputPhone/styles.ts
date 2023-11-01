import styled from 'styled-components';

interface props {
  isSelected: boolean;
}

export const Container = styled.div<props>`
  display: flex;
  
  width: 100%;
  border: 1px solid transparent;
  border-radius: 16px;

  transition: all 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme["yellow500"]};
  }

  &:focus-within {
    border: 1px solid ${props => props.theme["yellow500"]};
  }
`

export const Select = styled.div<props>`
  position: relative;
  
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme["gray800"]};
  width: 120px;
  padding: 16px 20px;
  border-radius: 16px 0px 0px 16px;
  border: 1px solid transparent;

  transition: all 0.3s;

  &:hover {
    opacity: 0.6;
  }

  #item-selected {
    display: flex;
    gap: 8px;
  }

  input {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }
`

export const Option = styled.div<props>`
  position: relative;

  display: ${props => props.isSelected ? "flex" : "none"};

  width: 100%;
  
  #options-content {
    position: absolute;
    
    width: 200px;
    max-height: 200px;
    border-radius: 16px;
    border: 1px solid ${props => props.theme["gray500"]};
    margin-top: 8px;
    background-color: ${props => props.theme["gray900"]};

    transition: all 0.3s;

    & > div {
      position: relative;

      display: flex;
      justify-content: space-between;

      padding: 12px 16px;
      border-bottom: 1px solid ${props => props.theme["gray800"]};

      transition: all 0.3s;

      &:hover {
        color: ${props => props.theme["yellow500"]};
      }

      & > input {
        all: unset;
        position: absolute;
        inset: 0;
        cursor: pointer;
      }

      & > p {
        color: ${props => props.theme["gray400"]}
      }

      & #item {
        display: flex;
        gap: 18px;
      }
      
      & > #check {
        color: ${props => props.theme["yellow500"]};
        font-size: 16px;
      }
    }
  }
`

export const Input = styled.input`
  width: 100%;
  padding: 0px 16px;
  background-color: transparent;
  color: ${props => props.theme["gray400"]};
  border:none;
`
