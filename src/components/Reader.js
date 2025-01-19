import ePub from "epubjs";
import { useEffect, useRef, useState } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const Reader = ({ file }) => {
  const { theme } = useTheme();
  const viewerRef = useRef(null);
  const [book, setBook] = useState(null);

  useEffect(() => {
    if (file && viewerRef.current) {
      const newBook = ePub(file);
      setBook(newBook);

      const rendition = newBook.renderTo(viewerRef.current, {
        width: "100%",
        height: "100%",
        spread: "none",
      });

      rendition.themes.default({
        body: {
          background: theme.reader.background,
          color: theme.reader.text,
          "font-family": "system-ui, -apple-system, sans-serif",
          padding: "1em",
        },
      });

      rendition.display();

      return () => {
        if (newBook) {
          newBook.destroy();
        }
      };
    }
  }, [file, theme]);

  return (
    <div
      ref={viewerRef}
      className={`ml-64 h-screen pt-16 ${theme.reader.background}`}
    />
  );
};
