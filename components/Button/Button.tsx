import { ButtonProps } from "./Button.props";
import styles from './Button.module.css';
import cn from 'classnames';
import ArrowIcon from './arrow.svg';

export const Button = ({ variant, arrow = 'none', children, className, ...props }: ButtonProps): JSX.Element => {
  return (
    <button
      className={cn(styles.button, className, {
        [styles.primary]: variant === 'primary',
        [styles.ghost]: variant === 'ghost'
      })}
      {...props}
    >
      {children}
      {arrow !== 'none' &&
        <span
          className={cn(styles.arrow, {[styles.down]: arrow === 'down'})}
        >
          <ArrowIcon />
        </span>
      }
    </button>
  );
};