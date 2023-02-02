import axiosApi from './api';

async function getWelcomeData() {
  const response = await axiosApi.get('welcome');
  const dataWelcome = response.data;

  const randomResponse = Math.floor(Math.random() * dataWelcome.length);
  if (randomResponse === 3) {
    return dataWelcome[0];
  }

  return dataWelcome[randomResponse];
}

export default getWelcomeData;
