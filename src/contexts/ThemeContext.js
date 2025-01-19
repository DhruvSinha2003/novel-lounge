import { createContext, useContext, useState } from "react";

export const themes = {
  cool: {
    primary: {
      background: "bg-slate-50",
      text: "text-slate-900",
      border: "border-slate-200",
      hover: "hover:bg-slate-100",
      accent: "bg-blue-600",
    },
    reader: {
      background: "bg-white",
      text: "text-slate-900",
    },
    sidebar: {
      background: "bg-slate-800",
      text: "text-slate-100",
      hover: "hover:bg-slate-700",
    },
  },
  warm: {
    primary: {
      background: "bg-amber-50",
      text: "text-amber-900",
      border: "border-amber-200",
      hover: "hover:bg-amber-100",
      accent: "bg-amber-600",
    },
    reader: {
      background: "bg-[#fff9f0]",
      text: "text-amber-900",
    },
    sidebar: {
      background: "bg-amber-800",
      text: "text-amber-100",
      hover: "hover:bg-amber-700",
    },
  },
  dark: {
    primary: {
      background: "bg-gray-900",
      text: "text-gray-100",
      border: "border-gray-800",
      hover: "hover:bg-gray-800",
      accent: "bg-purple-600",
    },
    reader: {
      background: "bg-gray-800",
      text: "text-gray-100",
    },
    sidebar: {
      background: "bg-gray-950",
      text: "text-gray-100",
      hover: "hover:bg-gray-900",
    },
  },
};

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const [currentTheme, setCurrentTheme] = useState("cool");
  return (
    <ThemeContext.Provider
      value={{ theme: themes[currentTheme], currentTheme, setCurrentTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) throw new Error("useTheme must be used within ThemeProvider");
  return context;
};
