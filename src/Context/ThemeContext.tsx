import { createContext, useContext, useState, useEffect, ReactNode } from "react";

// Define the shape of the context value
interface ThemeContextType {
  currentTheme: string;
  changeCurrentTheme: (newTheme: string) => void;
}

// Default values for the context
const ThemeContext = createContext<ThemeContextType>({
  currentTheme: "light",
  changeCurrentTheme: () => {},
});

interface ThemeProviderProps {
  children: ReactNode;  // Proper typing for children
}

export default function ThemeProvider({ children }: ThemeProviderProps) {
  const persistedTheme = localStorage.getItem("theme");
  const [theme, setTheme] = useState<string>(persistedTheme || "light");

  const changeCurrentTheme = (newTheme: string): void => {
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  useEffect(() => {
    document.documentElement.classList.add("[&_*]:!transition-none");
    if (theme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.style.colorScheme = "light";
    } else {
      document.documentElement.classList.add("dark");
      document.documentElement.style.colorScheme = "dark";
    }

    const transitionTimeout = setTimeout(() => {
      document.documentElement.classList.remove("[&_*]:!transition-none");
    }, 1);

    return () => clearTimeout(transitionTimeout);
  }, [theme]);

  return (
    <ThemeContext.Provider value={{ currentTheme: theme, changeCurrentTheme }}>
      {children}
    </ThemeContext.Provider>
  );
}

export const useThemeProvider = () => useContext(ThemeContext);
