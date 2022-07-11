import React, { ReactNode } from 'react';
import './Button.css';

export type ButtonProps = {
  onClick(): void;
  children: ReactNode;
  variant?: 'primary' | 'success';
  isDisabled?: boolean;
};

export function Button({
  children,
  onClick,
  isDisabled = false,
  variant = 'primary',
}: ButtonProps) {
  const className = `button button-${variant}`;
  return (
    <button onClick={onClick} disabled={isDisabled} className={className}>
      {children}
    </button>
  );
}
