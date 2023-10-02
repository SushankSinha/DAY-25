import React from "react";
import {Routes, Route } from "react-router-dom";
import Login from "./Component/Login";
import Dashboard from "./Component/Dashboard";
import Chart from "./Component/Chart";
import Table from "./Component/Table";

const App = () => {
  return (
    <>
        <Routes>
          <Route path="/" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path="/chart" element={<Chart />}></Route>
          <Route path="/table" element={<Table />}></Route>
        </Routes>
    </>
  );
};

export default App;
