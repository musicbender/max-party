import { FC } from 'react';

type Props = {
  text?: string;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'big';
  href?: string;
  className?: string;
  children?: React.ReactNode;
  handleClick?: () => void;
};

export const Button: FC<Props> = ({
  variant = 'secondary',
  size = 'medium',
  href,
  className = '',
  children,
  handleClick = () => null,
}) => {
  return (
    <a href={href} className={`button ${variant} ${size} ${className}`}>
      <span>{children}</span>
    </a>
  );
};

export default Button;
