import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { showAll } from "./redux/action/actionlist";
const App = () => {
  const dispatch=useDispatch();
  useEffect(() => {
    dispatch(showAll());
  }, [])
  const data=useSelector(state=>state.DataAll);
  console.log(data);
  function handle() {
    console.log(data);
  }
  return <div>Hello World
    {/* <button onClick={()=>{dispatch(showAll())}}>+</button> */}
    <button onClick={handle}>data</button>
  </div>;
};

export default App;
