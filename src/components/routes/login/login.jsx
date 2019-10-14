import React, { useState } from 'react';
import css from './login.module.css';
import { FormGroup, TextField, InputAdornment, IconButton, Icon } from '@material-ui/core';
import { Person, Visibility, VisibilityOff } from '@material-ui/icons';
import Button from 'components/shared/button';

const Login = (props) => {

  const [visibility, setVisibility] = useState(false);

  return (
    <div className={css.container}>
      <FormGroup classes={{ root: css.formContainer }}>
        <div className={css.inputsContainer}>
          <TextField
            classes={{ root: css.textField }}
            variant='outlined'
            label='Usuario'
            InputProps={{
              classes: {
                notchedOutline: css.textFieldNotched,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <Icon>
                    <Person />
                  </Icon>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{ classes: { focused: css.inputLabelFocused } }}
          />
          <TextField
            classes={{
              root: css.textField,
            }}
            id="outlined-adornment-password"
            variant="outlined"
            type={visibility ? 'text' : 'password'}
            label="Contraseña"
            InputProps={{
              classes: {
                notchedOutline: css.textFieldNotched,
              },
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    edge="end"
                    aria-label="toggle password visibility"
                    onClick={() => setVisibility(!visibility)}
                    classes={{
                      root: css.blackIcon
                    }}
                  >
                    {visibility ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
            InputLabelProps={{
              classes: {
                focused: css.inputLabelFocused,
              }
            }}
          />
        </div>
        <Button variant='buttonPrimary_large'>Iniciar Sesión</Button>
      </FormGroup>
    </div>
  );
};

export default Login;