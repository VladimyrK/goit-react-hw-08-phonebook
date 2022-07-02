import React from 'react';
import { NavLink } from 'react-router-dom';
import s from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      to="/"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Главная
    </NavLink>

    <NavLink
      to="contacts"
      className={({ isActive }) => (isActive ? s.activeLink : s.link)}
    >
      Контакты
    </NavLink>
  </nav>
);

export default Navigation;
