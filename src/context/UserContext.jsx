import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();


export const UserProvider = ({ children }) => {
  const [userName, setUserName] = useState(() => {
    // Recuperar el nombre del usuario desde localStorage al cargar la aplicación
    return localStorage.getItem('userName') || '';
  });

  useEffect(() => {
    // Guardar el nombre del usuario en localStorage cada vez que cambie
    localStorage.setItem('userName', userName);
  }, [userName]);

  return (
    <UserContext.Provider value={{ userName, setUserName }}>
      {children}
    </UserContext.Provider>
  );
};