import { createContext, useEffect, useState } from "react";
import instance from "../axios/axios.js";

export const AuthContext = createContext();

export const AuthContexProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(
    JSON.parse(localStorage.getItem("user")) || null
  );

  const login = async (inputs) => {
    const res = await instance.post("/auth/login", inputs);
    console.log(res.data);
    setCurrentUser(res.data);
  };

  const logout = async (inputs) => {
    await instance.post("auth/logout");
    setCurrentUser(null);
  };

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(currentUser));
  }, [currentUser]);

  return (
    <AuthContext.Provider value={{ currentUser, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
