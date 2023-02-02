import axios from 'axios';

async function getWelcomeData() {
  const response = await axios.get('http://localhost:4000/welcome');
  const dataWelcome = response.data;
  const randomResponse = Math.floor(Math.random() * dataWelcome.length);
  if (randomResponse === 3) {
    return dataWelcome[0];
  }

  return dataWelcome[randomResponse];
}

export default getWelcomeData;
