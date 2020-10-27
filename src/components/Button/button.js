import React from 'react';

import { Button } from '../BootstrapWrap'

const ButtonWrap = ({ variant, text, className, onClick,disabled,type }) => {
  return <Button variant={variant} className={className} onClick={onClick} type={type} disabled={disabled}>{text}</Button>
}

export default ButtonWrap;