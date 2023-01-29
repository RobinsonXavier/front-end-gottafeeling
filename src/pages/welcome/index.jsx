import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

function Welcome() {
  const navigate = useNavigate();
  return (
    <WelcomePage>
      <div>
        <h1>Como está se sentindo hoje ?</h1>
        <p>GottaFeeling é um site onde as pessoas podem se expressar e falar o que estão...</p>
      </div>
      <button type="button" onClick={() => navigate('/signup')}>Cadastre-se</button>
      <OptButton onClick={() => navigate('/signin')}>Já sou cadastrado</OptButton>
    </WelcomePage>
  );
}

const WelcomePage = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: var(--main-color);
  width: var(--navpage-div-width);
  height: var(--navpage-div-height);
  border-radius: var(--border-radius-pattern);

  div {
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    height: 70%;
    width: 80%;
    text-align: center;
  }

  h1 {
    margin: 15px;
    color: var(--font-color);
  }

  p {
    margin: 5px;
    color: var(--font-color);
  }

  button {
    width: 30%;
    height: 48px;
    border: none;
    border-radius: var(--border-radius-pattern);
    color: var(--font-color);
    :hover {
      background-color: var(--hover-color);
    }
  }
`;
const OptButton = styled.button`
  background-color: var(--main-color);
  text-decoration: underline;
  :hover {
    background-color: var(--main-color) !important;
    color: var(--hover-color);
  }
`;

export default Welcome;
