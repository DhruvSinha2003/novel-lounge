import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
export const Sidebar = ({ book, currentLocation, onNavigate }) => {
  const { theme } = useTheme();
  const [toc, setToc] = useState([]);

  useEffect(() => {
    if (book) {
      book.loaded.navigation.then((nav) => {
        setToc(nav.toc);
      });
    }
  }, [book]);

  return (
    <div
      className={`w-64 h-full fixed left-0 top-0 ${theme.sidebar.background} pt-16`}
    >
      <div className="p-4">
        <h2 className={`${theme.sidebar.text} text-lg font-semibold mb-4`}>
          Contents
        </h2>
        <nav>
          {toc.map((item, index) => (
            <button
              key={index}
              onClick={() => onNavigate(item.href)}
              className={`w-full text-left py-2 px-3 rounded-md mb-1
                ${theme.sidebar.text} ${theme.sidebar.hover}
                ${
                  currentLocation === item.href ? "bg-opacity-30 bg-white" : ""
                }`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
