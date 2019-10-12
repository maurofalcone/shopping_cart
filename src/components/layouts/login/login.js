import React from 'react';
import css from './login.module.css';

const LoginLayout = (props) => {
  return (
    <div className={css.login}>
      {props.children}
    </div>
  );
}

export default LoginLayout;