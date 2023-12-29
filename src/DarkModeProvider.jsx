import React, { createContext, useState, useContext } from 'react';

// Crear el contexto
export const DarkModeContext = createContext();

// Proveedor del contexto
export function DarkModeProvider({ children }) {
  const [darkMode, setDarkMode] = useState(false);

  // Función para alternar el modo oscuro
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
}
