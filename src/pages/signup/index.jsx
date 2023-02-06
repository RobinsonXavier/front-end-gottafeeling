import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import CheckBox from '../../components/Checkbox';
import {
  getGenderData,
  createAccount
} from '../../services/signupApi';

function Signup() {
  const [data, setData] = React.useState({});
  const [gender, setGender] = useState([]);
  const navigate = useNavigate();

  function formsHandler(ev) {
    setData({
      ...data,
      [ev.target.name]: ev.target.value
    });
  }

  // eslint-disable-next-line consistent-return
  async function submitHandler(event) {
    event.preventDefault();

    if (data.confirmPassword !== data.password) {
      return alert('As senhas não estão iguais. Tente novamente');
    }

    const result = await createAccount(data);

    if (result.message) {
      return alert(`${result.message}`);
    }
    navigate('/welcome');
  }

  useEffect(() => {
    async function getGender() {
      const genderData = await getGenderData();
      setGender(genderData);
    }
    getGender();
  }, []);

  return (
    <SignupPage>
      <form onSubmit={submitHandler}>
        <input placeholder="Nome" type="text" name="username" onChange={formsHandler} required />
        <input placeholder="Email" type="text" name="email" onChange={formsHandler} required />
        <fieldset>
          <legend>Qual o seu gênero ?</legend>
          {gender.length === 0
            ? <p>Carregando...</p>
            : gender.map((element) => <CheckBox key={element.name} data={data} genderId={element.id} setData={setData} label={`${element.name}`} />)}
        </fieldset>
        <input placeholder="Senha" type="text" name="password" onChange={formsHandler} required />
        <input placeholder="Confirme a senha" type="text" name="confirmPassword" onChange={formsHandler} required />
        <button type="submit">Registrar</button>
        <AuthOptButton onClick={() => navigate('/signin')}>Já sou cadastrado</AuthOptButton>
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
    align-items: flex-start;
  }

  button {
    width: 250px;
    height: 30px;
    border-radius: var(--border-radius-pattern);
    border: none;
    margin-top: 10px;
  }
  
  p {
    margin: 5px 0;
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
