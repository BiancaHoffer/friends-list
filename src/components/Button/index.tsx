import { ComponentProps, ReactNode } from "react";

import { Container, ButtonStyle, Icon } from "./styles";

interface ButtonProps extends ComponentProps<'button'> {
  icon?: ReactNode;
  title: string;
  variant?: "yellow" | "red" | "gray";
}

export function Button({ icon, title, variant = "yellow", ...props }: ButtonProps) {
  return (
    <Container>
      <ButtonStyle variant={variant} {...props}>
        {icon &&
          <Icon>
            {icon}
          </Icon>
        }

        {title}
      </ButtonStyle>
    </Container>
  )
}