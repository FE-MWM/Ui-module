import React, { createContext, useContext, useEffect, useState } from "react";

const DarkModeContext = createContext({
  darkMode: false,
  toggleDarkMode: () => {}
});

export const useDarkMode = () => {
  return useContext(DarkModeContext);
};

export const DarkModeProvider = ({
  children
}: {
  children: React.ReactNode;
}) => {
  const [darkMode, setDarkMode] = useState(
    localStorage.getItem("darkMode") === "true"
  );

  const toggleDarkMode = () => {
    setDarkMode((prevMode) => !prevMode);
    localStorage.setItem("darkMode", darkMode.toString());
  };

  useEffect(() => {
    localStorage.setItem("darkMode", darkMode.toString());
  }, [darkMode]);

  return (
    <DarkModeContext.Provider value={{ darkMode, toggleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};
