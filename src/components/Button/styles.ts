import styled, { css } from 'styled-components';

export type ButtonVariant = "yellow" | "red" | "gray";

interface ButtonContainerProps {
  variant: ButtonVariant;
}

const buttonVariants = {
  yellow: "#E2A500",
  red: "#D21900",
  gray: "#2B2B2B",
}

export const Container = styled.div`
`;

export const ButtonStyle = styled.button<ButtonContainerProps>`
  border: none;
  color: ${props => props.theme["white"]};
  font-size: 1.1rem;

  padding: 12px 20px;
  border-radius: 12px;
    
  ${props => {
    return css`background-color: ${buttonVariants[props.variant]}`
  }};
 

  display: flex;
  justify-content: end;
  align-items: center;
  gap: 8px;

  transition: all 0.4s ;

  &:hover {
    opacity: 0.8;
  }
`;

export const Icon = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  font-size: 26px;
`