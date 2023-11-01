import styled from 'styled-components';

interface props {
  isSelected: boolean;
}

export const Container = styled.div`
  width: 100%;
`

export const Select = styled.div<props>`
  position: relative;
  
  display: flex;
  justify-content: space-between;

  background-color: ${props => props.theme["gray900"]};
  width: 100%;
  padding: 16px 20px;
  border-radius: 16px;
  border: 1px solid transparent;

  transition: all 0.3s;

  &:hover {
    border: 1px solid ${props => props.theme["yellow500"]};
  }

  &:focus-within {
    border: 1px solid ${props => props.isSelected ? props.theme["yellow500"] : "transparent"};
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
  z-index: 999;

  display: ${props => props.isSelected ? "flex" : "none"};

  width: 100%;
  
  #options-content {
    position: absolute;

    width: 100%;
    max-height: 200px;
    border-radius: 16px;
    border: 1px solid ${props => props.theme["gray500"]};
    margin-top: 8px;
    background-color: ${props => props.theme["gray900"]};

    transition: all 0.3s;

    &:hover {
      border: 1px solid ${props => props.theme["yellow500"]};
    }
  
    & > div {
      position: relative;

      display: flex;
      justify-content: space-between;

      padding: 12px 16px;
      border-bottom: 1px solid ${props => props.theme["gray800"]};
      border-radius: 0px;

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

      & > div {
        color: ${props => props.theme["yellow500"]};
        font-size: 16px;
      }
    }
  }
`
