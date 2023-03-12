import { FC, MouseEvent } from 'react';
import Button from '../button';

type Props = {
  value: number;
  className?: string;
  handleChange: (newValue: number) => void;
};

enum ChangeType {
  INCREMENT = 'increment',
  DECREMENT = 'decrement',
}

export const IncrementButtons: FC<Props> = ({ value, className, handleChange }) => {
  const handleClick = (changeType: ChangeType) => (e: MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    let newValue: number = changeType === ChangeType.INCREMENT ? value + 1 : value - 1;
    if (newValue < 0) newValue = 0;
    handleChange(newValue);
  };

  return (
    <div className={className}>
      <Button handleClick={handleClick(ChangeType.DECREMENT)}>-</Button>
      <Button handleClick={handleClick(ChangeType.INCREMENT)}>+</Button>
    </div>
  );
};

export default IncrementButtons;
