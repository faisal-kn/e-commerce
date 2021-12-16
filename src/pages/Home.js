import {getProduct} from "../apicall/RainforestApi/Apicalls";
import {useSelector} from "react-redux";

const Home = () => {
  const data=useSelector(state=>{
    console.log(state);
    return state.DataAll});
  
  const clickHandler = () => {
    // getProduct()
    console.log(data);

  };
  return (
    <div>
      <button onClick={clickHandler}>hello there</button>
    </div>
  );
};

export default Home;
