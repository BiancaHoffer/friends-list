import styled from 'styled-components';

interface props {
  openSelect: boolean;
}

export const Container = styled.div`

`

export const Select = styled.div<props>`
  position: relative;

  background-color: transparent;

  border-radius: 12px;
  border: 1px solid transparent;

  transition: all .3s;

  &:hover {
    border: 1px solid ${props => props.theme["yellow500"]}
  }
  
  #option-view-button {
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer;
  }

  #select-button {
    display: flex;
    justify-content: space-between;
    background-color: ${props => props.theme.gray900};
    border-radius: 12px;
    padding: 16px 20px;
    border: 1px solid ${props => props.openSelect ? props.theme["yellow500"] : "transparent"};
    color: ${props => props.theme["gray400"]};
    transition: all 0.3s;

    &:hover {
    border: 1px solid ${props => props.theme["yellow500"]}
  }
  }
`

export const Options = styled.div<props>`
  position: relative;
  z-index: 20;

  height: 140px;
  display: ${props => props.openSelect ? "inline-block" : "none"};
  width: 100%;

  margin-top: 8px;

  overflow-y: scroll;
  

  &::-webkit-scrollbar {
    width: 4px;
    border-radius: 8px;
  }

  &::-webkit-scrollbar-track {
    background:  ${props => props.theme["gray900"]};  
    height: 140px;  
  }

  &s::-webkit-scrollbar-thumb {
    background-color:  ${props => props.theme["gray500"]};

  }

  #option {
    position: absolute;
    
    //margin-top: -8px;
    width: 100%;
    background-color: ${props => props.theme["gray900"]};
  }
`

export const Item = styled.li`
  position: relative;
  display: flex;
  padding: 12px;
  border-radius: 2px;
  border: 1px solid transparent;

  display: flex;
  gap: 12px;

   input[type="radio"]{
    all: unset;
    position: absolute;
    inset: 0;
    cursor: pointer; 
  }

  label {
    color: ${props => props.theme["gray400"]};
  }

   &:hover {
    background: ${props => props.theme["gray800"]};
    border: 1px solid ${props => props.theme["yellow500"]}
   }
`