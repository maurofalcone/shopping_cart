import React, { useCallback } from 'react';
import css from './header.module.css';

const Header = (props) => {

  const redirectTo = useCallback((path) => {
    props.history.push(`/${path}`);
  }, [props.history]);

  return (
    <div className={css.container}>
      <div className={css.buttonContainer}>
        <span className={css.button} onClick={() => redirectTo('/')}>
          Logo
        </span>
      </div>
      <div className={css.buttonContainer}>
        {
          props.buttons.map(button => {
            return (
              <span key={button.name} className={css.button} onClick={() => redirectTo(button.redirectTo)}>
                {button.name}
              </span>
            );
          })
        }
      </div>
    </div>
  );
};

export default Header;