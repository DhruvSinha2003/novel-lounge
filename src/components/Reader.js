import ePub from "epubjs";
import { useEffect, useRef } from "react";
import { useTheme } from "../contexts/ThemeContext";

export const Reader = ({ file }) => {
  const { theme } = useTheme();
  const viewerRef = useRef(null);
  const bookRef = useRef(null);

  useEffect(() => {
    if (file && viewerRef.current) {
      const book = ePub(file);
      bookRef.current = book;

      const rendition = book.renderTo(viewerRef.current, {
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
        book.destroy();
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
