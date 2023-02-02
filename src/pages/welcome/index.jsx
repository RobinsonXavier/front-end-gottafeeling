import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import getWelcomeData from '../../services/welcomeApi';

function Welcome() {
  const navigate = useNavigate();
  const [welcome, setWelcome] = useState({});

  useEffect(() => {
    async function getWelcome() {
      const welcomeData = await getWelcomeData();
      setWelcome(welcomeData);
    }
    getWelcome();
  }, []);

  return (
    <WelcomePage>
      <div>
        <h1>{welcome.title}</h1>
        <p>{welcome.message}</p>
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
