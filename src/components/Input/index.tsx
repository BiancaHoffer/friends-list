import { ComponentProps, ReactNode } from "react";

import { Container, InputStyle, Icon } from "./styles";

interface ButtonProps extends ComponentProps<'input'> {
  icon?: ReactNode;
}

export function Input({ icon, ...props }: ButtonProps) {
  return (
    <Container>
      {icon &&
        <Icon>
          {icon}
        </Icon>
      }

      <InputStyle {...props} />
    </Container>
  )
}