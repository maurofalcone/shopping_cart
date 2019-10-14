import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import css from './header.module.css';

const Header = (props) => {
  
  let history = useHistory();

  const redirectTo = useCallback((path) => {
    if (history) {
      history.push(`./${path}`);
    }
  }, [history]);

  return (
    <div className={css.container}>
      <div className={css.buttonContainer}>
        <span className={css.button} onClick={() => redirectTo('home')}>
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