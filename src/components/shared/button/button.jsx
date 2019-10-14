import React from 'react';
import './button.css';
import { Button as MUIButton } from '@material-ui/core';

const Button = ({ children, variant }) => {
  return (
    <div>
      <MUIButton 
        classes={{ root: variant}}
        variant='contained'>
        {children}
      </MUIButton>
    </div>
  );
};

export default Button;