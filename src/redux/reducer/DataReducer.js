import axios from "axios";
export default async function DataReducer(state=null,action) {

    switch(action.type)
    {
        case "ALL":
            await axios.get("https://api.rainforestapi.com/request?api_key=9FC93C86FC414B858615F615A7007E1F&type=product&asin=B000YDDF6O&amazon_domain=amazon.com").then((response) => {
                console.log(response.data);
                state=response.data;
              });
            return state;
        
        default :
            return state;
    }
}