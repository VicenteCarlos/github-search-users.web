import { useState, useContext, createContext, ReactNode } from "react";

interface IDarkModeProviderProps {
  children: ReactNode;
}

interface DarkModeContextProps {
  isDarkMode: boolean;
  handleDarkMode: () => void;
}

const DarkModeContext = createContext({} as DarkModeContextProps);

const DarkModeProvider = ({ children }: IDarkModeProviderProps) => {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  const handleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <DarkModeContext.Provider value={{ isDarkMode, handleDarkMode }}>
      {children}
    </DarkModeContext.Provider>
  );
};

const useDarkMode = () => useContext(DarkModeContext);

export { DarkModeProvider, useDarkMode };
