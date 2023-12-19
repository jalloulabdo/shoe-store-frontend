import { API_URL, STRAPI_API_TOKEN } from "./urls"

const fetchDataFromApi = async (endpoint) => {
  var requestOptions = {
    method: "GET",
    headers: {
        Authorization: "Bearer " + STRAPI_API_TOKEN,
    },
  };
  
  const res = await fetch(`${API_URL}${endpoint}`, requestOptions);
  const data = await res.json();

  return data;
}

export default fetchDataFromApi
