import { Routes, Route, Navigate } from "react-router-dom";

import Home from "./pages/Home";

const App = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />}></Route>
      <Route path="/" element={<Navigate replace to="/home" />} />
    </Routes>
  );
};

export default App;
