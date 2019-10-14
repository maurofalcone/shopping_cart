import React from 'react';
import css from './login.module.css';
import Header from 'components/shared/header';

const buttonsList = [
  {
    name: 'Carrito',
    redirectTo: 'my_chart',
  },
  {
    name: 'Registrarse',
    redirectTo: 'register',
  }
];

const LoginLayout = ({children}) => {

  return (
    <div className={css.container}>
      <div className={css.headerContainer}>
        <Header buttons={buttonsList} />
      </div>
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