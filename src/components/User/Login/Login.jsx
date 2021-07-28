import React, { useState, useContext } from 'react';
import { useHistory } from 'react-router-dom';
import StoreContext from 'components/Store/Context';
import UIButton from 'components/UI/Button/Button';

import cloudImage from '../Login/svgexport-17.svg';

import './Login.css';

function initialState() {
  return { user: '', password: '' };
}

function login({ user, password }) {
  if (user === 'jader123' && password === 'jader123') {
    return { token: '1234' };
  }
  return { error: 'Usuário ou senha inválido' };
}

const UserLogin = () => {
  const [values, setValues] = useState(initialState);
  const [error, setError] = useState(null);
  const { setToken } = useContext(StoreContext);
  const history = useHistory();

  function onChange(event) {
    const { value, name } = event.target;

    setValues({
      ...values,
      [name]: value
    });
  }

  function onSubmit(event) {
    event.preventDefault();

    const { token, error } = login(values);

    if (token) {
      setToken(token);
      return history.push('/');
    }

    setError(error);
    setValues(initialState);
  }

  return (
    <div className="user-login">
      <aside>
        <img src= {cloudImage} alt="Escola" />
        <strong>Gerenciador de notas</strong>
        <p>Vizualize suas notas e veja como está no final do semestre</p>
      </aside>
      <main>
        <div className="main-content">
          <h1>Login</h1>
          <form onSubmit={onSubmit}>

              <label htmlFor="user">Usuário</label>
              <input
                id="user"
                type="text"
                name="user"
                onChange={onChange}
                value={values.user}
              />

          
              <label htmlFor="password">Senha</label>
              <input
                id="password"
                type="password"
                name="password"
                onChange={onChange}
                value={values.password}
              />

            {error && (
              <div className="user-login__error">{error}</div>
            )}
            <UIButton
              type="submit"
              theme="contained-green"
              className="user-login__submit-button"
              rounded
            >
              Entrar
            </UIButton>
          </form>
        </div>
      </main>
    </div>
  );
};

export default UserLogin;