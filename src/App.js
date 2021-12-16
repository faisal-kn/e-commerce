import { Routes, Route, Navigate } from "react-router-dom";
import React,{useEffect} from "react";
import {useDispatch,useSelector} from "react-redux";
import { showAll } from "./redux/action/actionlist";
import Home from "./pages/Home";

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
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
}

export default App;
