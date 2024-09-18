import React from 'react';
import styles from './Button.module.css';

// You can sort props in alphabetical order which will make it easier to read.
interface Props {
  children: string;
  // The question mark "?" at the end of a prop name indicates this prop is optional.
  // We can use string literal to limit the value of a prop.
  // We can also use "union operator" to add more options to a prop.
  color?: 'primary' | 'secondary';
  onClick: () => void;
}


// You can assign a default value to a prop.
const Button = ({ children, color='primary', onClick }: Props) => {
  return (
    <button className={ 'btn btn-' + color } onClick={onClick}>{ children }</button>
  )
}

// Styled button with CSS module
const ButtonInStyle = ({ children, color='primary', onClick }: Props) => {
  return (
    <button className={[styles.btn, styles['btn-' + color]].join(' ')} onClick={onClick}>{ children }</button>
  )
}

export default ButtonInStyle