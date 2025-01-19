import { useEffect, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const Sidebar = ({ book }) => {
  const { theme } = useTheme();
  const [toc, setToc] = useState([]);

  useEffect(() => {
    const loadToc = async () => {
      if (book) {
        try {
          await book.ready;
          const navigation = await book.loaded.navigation;
          if (navigation && navigation.toc) {
            setToc(navigation.toc);
          }
        } catch (error) {
          console.error("Error loading table of contents:", error);
        }
      }
    };

    loadToc();
  }, [book]);

  const handleNavigate = (href) => {
    if (book && book.rendition) {
      book.rendition.display(href);
    }
  };

  return (
    <div
      className={`w-64 h-full fixed left-0 top-0 ${theme.sidebar.background} pt-16 overflow-y-auto`}
    >
      <div className="p-4">
        <h2 className={`${theme.sidebar.text} text-lg font-semibold mb-4`}>
          Contents
        </h2>
        <nav>
          {toc.map((item, index) => (
            <button
              key={index}
              onClick={() => handleNavigate(item.href)}
              className={`w-full text-left py-2 px-3 rounded-md mb-1
                ${theme.sidebar.text} ${theme.sidebar.hover}`}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </div>
    </div>
  );
};
