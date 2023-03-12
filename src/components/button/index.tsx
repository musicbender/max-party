import { FC, MouseEvent } from 'react';

type Props = {
  text?: string;
  variant?: 'primary' | 'secondary';
  size?: 'medium' | 'big';
  href?: string;
  disabled?: boolean;
  className?: string;
  children?: React.ReactNode;
  handleClick?: (e: MouseEvent<HTMLAnchorElement>) => void;
};

export const Button: FC<Props> = ({
  variant = 'secondary',
  size = 'medium',
  href,
  disabled = false,
  className = '',
  children,
  handleClick = (e: MouseEvent<HTMLAnchorElement>) => null,
}) => {
  return (
    <a
      href={href}
      className={`button ${variant} ${size} ${className} ${disabled ? 'disabled' : ''}`}
      onClick={(e: MouseEvent<HTMLAnchorElement>) => handleClick(e)}
    >
      <span>{children}</span>
    </a>
  );
};

export default Button;
