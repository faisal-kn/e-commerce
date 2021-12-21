import { Routes, Route, Navigate } from "react-router-dom";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { showAll } from "./redux/action/actionlist";
import Home from "./pages/Home";
import axios from "axios";

const App = () => {
  const dispatch = useDispatch();
  const handle = () => {
    axios
      .get(
        "https://api.rainforestapi.com/request?api_key=9FC93C86FC414B858615F615A7007E1F&type=product&asin=B000YDDF6O&amazon_domain=amazon.com"
      )
      .then((response) => {
        console.log(response.data);
        dispatch(showAll(response.data));
      });
  };
  useEffect(() => {
    handle();
  }, []);

  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default App;
