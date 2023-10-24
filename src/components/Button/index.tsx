import { ComponentProps, ReactNode } from "react";

import { Container, ButtonStyle, Icon } from "./styles";

interface ButtonProps extends ComponentProps<'button'> {
  icon?: ReactNode;
  title: string;
}

export function Button({ icon, title, ...props }: ButtonProps) {
  return (
    <Container>


      <ButtonStyle {...props}>
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