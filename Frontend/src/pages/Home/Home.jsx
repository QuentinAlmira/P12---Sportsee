import React from "react";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";


const Home = () => {


  return (
    <div>
      <Header />
      <h2>Selectionner un utilisateur</h2>
    <NavLink to="user/12">User 12 - Karl  </NavLink>
    <NavLink to="user/18">User 18 - Cecilia </NavLink>
    </div>
  );
};

export default Home;