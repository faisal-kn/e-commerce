import { getProduct } from "../apicall/RainforestApi/Apicalls";
import { useSelector } from "react-redux";
import NavBar from '../components/NavBar';

const Home = () => {
  const data = useSelector((state) => {
    console.log(state);
    return state.DataAll;
  });

  const clickHandler = () => {
    console.log(data);
  };

  return (
    <div>
      <NavBar />
    </div>
  );
};

export default Home;
