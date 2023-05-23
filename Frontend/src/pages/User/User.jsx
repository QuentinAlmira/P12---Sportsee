import React from "react";
import Header from "../../components/Header/Header";
import { useParams } from "react-router-dom";
import Main from "../../components/Main/Main";

export default function Home (){
  const { id } = useParams(); 

  return (
 <div>
    <Header/>
    <Main id={id}/>
 </div>
  );
};
