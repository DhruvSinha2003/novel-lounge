import { useState } from "react";
import { Home } from "./components/Home";
import { Navbar } from "./components/Navbar";
import { Reader } from "./components/Reader";
import { Sidebar } from "./components/Sidebar";
import { ThemeProvider } from "./contexts/ThemeContext";

const App = () => {
  const [currentFile, setCurrentFile] = useState(null);

  return (
    <ThemeProvider>
      <Navbar />
      {currentFile ? (
        <>
          <Sidebar book={currentFile} />
          <Reader file={currentFile} />
        </>
      ) : (
        <Home onFileSelect={setCurrentFile} />
      )}
    </ThemeProvider>
  );
};

export default App;
