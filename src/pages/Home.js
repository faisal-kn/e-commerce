import {getProduct} from "../apicall/RainforestApi/Apicalls";

const Home = () => {
  const clickHandler = () => {
    getProduct();
  };
  return (
    <div>
      <button onClick={clickHandler}>hello there</button>
    </div>
  );
};

export default Home;
