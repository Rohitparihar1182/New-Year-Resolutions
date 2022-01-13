import "./App.css";
import Com from "./Components/component.js";
import FuncComponent from "./Components/funcComponent";
import MainCom from "./Components/mainComp";
// import { useState } from "react";

function App() {
  const year=new Date().getFullYear();
  return (
    <>
      <Com msg="Hey, Happy new year 2022"/>
      <FuncComponent year={year}/>
      <MainCom msg1="Enter your new year Resolution" msg2="Enter the reason of your Resolution" msg3="Your achievments of 2021"/>
    </>
  );
}

export default App;
