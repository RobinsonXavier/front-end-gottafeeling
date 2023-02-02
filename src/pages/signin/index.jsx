import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Signin() {
  const [data, setData] = React.useState({});
  const navigate = useNavigate();

  function formsHandler(ev) {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    });
  }

  return (
    <SigninPage>
      <form>
        <input placeholder="Email" type="text" name="email" onChange={formsHandler} />
        <input placeholder="Senha" type="text" name="password" onChange={formsHandler} />
        <button type="submit">Entrar</button>
        <AuthOptButton onClick={() => navigate('/signup')}>Não tenho uma conta</AuthOptButton>
      </form>
    </SigninPage>
  );
}

const SigninPage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: var(--main-color);
  border-radius: var(--border-radius-pattern);
  width: 370px;

  form {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }

  input {
    width: 250px;
    height: 30px;
    border-radius: var(--border-radius-pattern);
    border: 0.5px solid;
    margin: 10px;
    padding-left: 10px;
    box-sizing: border-box;
  }

  button {
    width: 250px;
    height: 30px;
    border-radius: var(--border-radius-pattern);
    border: none;
    margin-top: 10px;
  }
`;

const AuthOptButton = styled.button`
  background-color: var(--main-color);
  text-decoration: underline;
  :hover {
    background-color: var(--main-color) !important;
    color: var(--hover-color);
  }
`;

export default Signin;
