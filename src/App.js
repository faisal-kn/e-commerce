import { Routes, Route, Navigate } from "react-router-dom";
import React,{useEffect} from "react";
import {useDispatch} from "react-redux";
import { showAll} from "./redux/action/actionlist";
import Home from "./pages/Home";
import axios from "axios";


const App = () => {
  const dispatch=useDispatch();
  // const handle=()=>{
  //   axios.get("https://api.fakeshop-api.com/products/getAllProducts").then((response) => {
  //     console.log(response.data);
  //     dispatch(showAll(response.data));
  //   });
  // }
  // useEffect(() => {
    
  //   handle();
  // }, [])
 
  
  
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}

export default App;
