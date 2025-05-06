import React, { createContext, useState, useEffect } from 'react';

/*Explicacion UserContext:
  1. Se importa React y los hooks necesarios (createContext, useState, useEffect).
  2. Se crea un contexto llamado UserContext utilizando createContext().
  3. Se define un componente UserProvider que utiliza el hook useState para manejar el estado del usuario.
  4. Al cargar la aplicación, se intenta recuperar el usuario desde localStorage. 
  Si no hay usuario guardado, se inicializa como null.
  5. Se utiliza useEffect para guardar el usuario en localStorage cada vez que cambia el estado del usuario.
 */

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    // Recuperar el usuario desde localStorage al cargar la aplicación
    const storedUser = localStorage.getItem('user');
    return storedUser ? JSON.parse(storedUser) : null;
  });

  useEffect(() => {
    // Guardar el usuario en localStorage cada vez que cambie
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    } else {
      localStorage.removeItem('user'); // Eliminar del localStorage si no hay usuario
    }
  }, [user]);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};