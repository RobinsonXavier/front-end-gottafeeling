import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CheckBox from '../../components/Checkbox';

function Signup() {
  const [data, setData] = React.useState({});
  const navigate = useNavigate();

  function formsHandler(ev) {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    });
  }
  console.log(data);

  return (
    <SignupPage>
      <form>
        <input placeholder="Nome" type="text" name="name" onChange={formsHandler} />
        <input placeholder="Email" type="text" name="email" onChange={formsHandler} />
        <fieldset>
          <legend>Qual o seu gênero ?</legend>
          <CheckBox data={data} setData={setData} label="Masculino" />
          <CheckBox data={data} setData={setData} label="Feminino" />
          <CheckBox data={data} setData={setData} label="Sem Gênero" />
          <CheckBox data={data} setData={setData} label="Prefiro não dizer" />
        </fieldset>
        <input placeholder="Senha" type="text" name="password" onChange={formsHandler} />
        <input placeholder="Confirme a senha" type="text" name="confirmPassword" onChange={formsHandler} />
        <button type="submit">Registrar</button>
        <AuthOptButton onClick={() => navigate('/sigin')}>Já sou cadastrado</AuthOptButton>
      </form>
    </SignupPage>
  );
}

const SignupPage = styled.div`
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

  fieldset {
    display: flex;
    margin: 10px;
    flex-direction: column;
    align-items: flex-end;
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

export default Signup;
