import { useTheme } from "../contexts/ThemeContext";
import { FileUpload } from "./FileUpload";
export const Home = ({ onFileSelect }) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen ${theme.primary.background} pt-16`}>
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className={`text-5xl font-bold mb-8 ${theme.primary.text}`}>
          Novel Lounge
        </h1>
        <p className={`text-xl mb-12 ${theme.primary.text} opacity-80`}>
          Your personal space for reading digital books
        </p>
        <FileUpload onFileSelect={onFileSelect} />
      </div>
    </div>
  );
};
