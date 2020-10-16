import React from 'react';
import styles from './buttonStyles.module.scss';

export interface Props {
  label: string;
  className?: string;
  onClick?: () => void;
}

export const Button: React.FunctionComponent<Props> = ({
  label,
  onClick,
  className,
}) => {
  return (
    <div className={`${styles.button} ${className || ''}`} onClick={onClick}>
      {label}
    </div>
  );
};
