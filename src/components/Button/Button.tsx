import { ButtonContainer } from './Button.styles';

type ButtonProps = {
  color?: string | any;
  children?: React.ReactNode,
}

export const Button = ({ children, color = "blue" }: ButtonProps) => {
  return (
    <ButtonContainer color={color}>{children}</ButtonContainer>
  )
}
