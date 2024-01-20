import { API_URL, STRAPI_API_TOKEN } from "./urls";

const fetchDataFromApi = async (endpoint) => {
  var requestOptions = {
    method: "GET",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };

  const data = await fetch(`${API_URL}${endpoint}`, requestOptions);
  return data;
};

export default fetchDataFromApi;

export const makePaymentRequest = async (endpoint, payload) => {
  const res = await fetch(`${API_URL}${endpoint}`, {
    method: "POST",
    headers: {
      Authorization: "Bearer " + STRAPI_API_TOKEN,
      "Content-Type": "application/json",
    },
    body: JSON.stringify(payload),
  });
  const data = await res.json();
  return data;
};
