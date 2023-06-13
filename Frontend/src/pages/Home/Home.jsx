import React from "react";
import Header from "../../components/Header/Header";
import { NavLink } from "react-router-dom";
import "./Home.css";

const Home = () => {
  return (
    <div>
      <Header />
      <div className="select_user">
        <h2>Selectionner un utilisateur</h2>
      </div>

      <div className="user">
        <NavLink to="user/12">
          <div className="user_12">User 12 - Karl</div>
        </NavLink>
        <NavLink to="user/18">
          <div className="user_18">User 18 - Cecilia</div>
        </NavLink>
      </div>
    </div>
  );
};

export default Home;
