import React from "react";
import { useNavigate } from 'react-router-dom';

export const Navbar = () => {
  const navigate = useNavigate();
  return (
    <nav style={navStyle}>
      <div className="title" style={titleStyle}>
        RetinaMed Prognosis
      </div>
      <button onClick={() => navigate('/')} style={logoutButtonStyle}>
        Logout
      </button>
    </nav>
  );
};

const navStyle = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  backgroundColor: "#0f172a",
  color: "white",
  position: "sticky",
  top: 0,
  padding: "1rem",
};

const titleStyle = {
  fontSize: "1.5rem",
  fontWeight: "bold",
};

const logoutButtonStyle = {
  backgroundColor: "#007bff",
  color: "#fff",
  border: "none",
  padding: "0.5rem 1rem",
  borderRadius: "0.5rem",
  cursor: "pointer",
};
