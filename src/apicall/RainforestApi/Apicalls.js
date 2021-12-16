import axios from "axios";
const API_KEY = "9FC93C86FC414B858615F615A7007E1F";

export const getProduct = async (productId) => {
  const options = {
    url: "https://api.rainforestapi.com/request?api_key=9FC93C86FC414B858615F615A7007E1F&type=product&asin=B000YDDF6O&amazon_domain=amazon.com",
    method: "GET",
  };
  const res = await axios(options);
  console.log(res);
};
