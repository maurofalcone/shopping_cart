import React from 'react';
import css from './login.module.css';

const LoginLayout = ({children}) => {
  return (
    <div className={css.container}>
      <div className={css.childrenContainer}>
        {children}
      </div>
      <div className={css.footerContainer}>
        Footer
      </div>
    </div>
  );
};

export default LoginLayout;