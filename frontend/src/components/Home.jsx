import React from 'react';
import s from "./styles.module.css";
import {NavLink} from "react-router-dom";

const Home = () => {
  return (
    <div style={{marginBottom: "3rem"}}>
      <NavLink to={'/all'} className={s.btn_main} style={{marginRight: "2rem"}}>
        All
      </NavLink>
      <NavLink to={'/add'} className={s.btn_main} style={{marginRight: "2rem"}}>
        Add
      </NavLink>
      <NavLink to={'/find'} className={s.btn_main} style={{marginRight: "2rem"}}>
        Find
      </NavLink>
    </div>
  );
};

export default Home;