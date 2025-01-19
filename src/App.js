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
      <div className="min-h-screen">
        <Navbar />
        {currentFile ? (
          <div className="flex">
            <Sidebar book={currentFile} />
            <Reader file={currentFile} />
          </div>
        ) : (
          <Home onFileSelect={setCurrentFile} />
        )}
      </div>
    </ThemeProvider>
  );
};

export default App;
