import { Upload } from "lucide-react";
import { useState } from "react";
import { useTheme } from "../contexts/ThemeContext";
export const FileUpload = ({ onFileSelect }) => {
  const { theme } = useTheme();
  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(e.type === "dragenter" || e.type === "dragover");
  };

  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    const file = e.dataTransfer.files[0];
    if (file?.type === "application/epub+zip") {
      onFileSelect(file);
    }
  };

  const handleFileInput = (e) => {
    const file = e.target.files[0];
    if (file?.type === "application/epub+zip") {
      onFileSelect(file);
    }
  };

  return (
    <div
      className={`flex flex-col items-center justify-center w-full max-w-2xl mx-auto h-64
        ${theme.primary.background} ${
        theme.primary.border
      } border-2 border-dashed rounded-lg
        ${
          dragActive ? theme.primary.accent : ""
        } transition-colors duration-200`}
      onDragEnter={handleDrag}
      onDragLeave={handleDrag}
      onDragOver={handleDrag}
      onDrop={handleDrop}
    >
      <input
        type="file"
        accept=".epub"
        onChange={handleFileInput}
        className="hidden"
        id="file-upload"
      />
      <label
        htmlFor="file-upload"
        className="w-full h-full flex flex-col items-center justify-center cursor-pointer"
      >
        <Upload className={`w-12 h-12 mb-4 ${theme.primary.text}`} />
        <p className={`${theme.primary.text} text-lg mb-2`}>
          Drop your epub file here
        </p>
        <p className={`${theme.primary.text} opacity-60 text-sm`}>
          or click to browse files
        </p>
      </label>
    </div>
  );
};
