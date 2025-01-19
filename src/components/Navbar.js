// src/components/Navbar.jsx
import { Cloud, Moon, Sun } from "lucide-react";
import { useTheme } from "../contexts/ThemeContext";

export const Navbar = () => {
  const { theme, setCurrentTheme } = useTheme();

  return (
    <nav
      className={`fixed top-0 w-full ${theme.primary.background} border-b ${theme.primary.border} shadow-sm`}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <h1 className={`text-xl font-semibold ${theme.primary.text}`}>
          Novel Lounge
        </h1>
        <div className="flex gap-4">
          <button
            onClick={() => setCurrentTheme("cool")}
            className={`p-2 rounded-full ${theme.primary.hover}`}
          >
            <Cloud className={theme.primary.text} size={20} />
          </button>
          <button
            onClick={() => setCurrentTheme("warm")}
            className={`p-2 rounded-full ${theme.primary.hover}`}
          >
            <Sun className={theme.primary.text} size={20} />
          </button>
          <button
            onClick={() => setCurrentTheme("dark")}
            className={`p-2 rounded-full ${theme.primary.hover}`}
          >
            <Moon className={theme.primary.text} size={20} />
          </button>
        </div>
      </div>
    </nav>
  );
};
