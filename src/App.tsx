import React from 'react';
import './App.css';
import { Routes, Route, NavLink } from "react-router-dom";

interface Status {
  isActive: boolean;
}

export const App: React.FC = () => {
  const getLinkStyle = (status: Status): React.CSSProperties => {
    return status.isActive ? { backgroundColor: '#ccc' } : {};
  };

  return (
    <div className="App">
      <h5>React router v6 + ts</h5>

      <nav>
        <NavLink to="/" style={getLinkStyle}>
          home
        </NavLink>

        <NavLink to="/about" style={getLinkStyle}>
          about
        </NavLink>

        <NavLink to="/people" style={getLinkStyle}>
          people
        </NavLink>

        <NavLink to="/contact-us" style={getLinkStyle}>
          contact us
        </NavLink>
      </nav>

      <Routes>
        <Route path="/" element={(
          <p>Home Page</p>
        )} />
        <Route path="about" element={(
          <p>About Page</p>
        )} />
        <Route path="people" element={(
          <p>People Page</p>
        )} />
        <Route path="contact-us" element={(
          <p>Contact Us</p>
        )} />
      </Routes>
    </div>
  );
};
