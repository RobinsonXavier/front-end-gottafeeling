import axiosApi from './api';

export async function getGenderData() {
  const response = await axiosApi.get('genders')
    .catch((error) => ({
      message: error.response.data,
      status: error.response.status
    }));
  return response.data;
}

export async function createAccount(params) {
  const response = await axiosApi.post('signup', params)
    .catch((error) => ({
      message: error.response.data,
      status: error.response.status
    }));
  return response;
}
