import React from 'react';
import css from './app.module.css';

const App = ({children}) => {
  return (
    <div className={css.container}>
      {children}
    </div>
  );
};

export default App;
