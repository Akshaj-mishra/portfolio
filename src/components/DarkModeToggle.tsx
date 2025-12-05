import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../App';

const DarkModeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full hover:bg-light-card dark:hover:bg-dark-card transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-light-accent dark:focus:ring-dark-accent"
      aria-label="Toggle dark mode"
    >
      {theme === 'dark' ? (
        <Sun className="h-6 w-6 text-yellow-400" />
      ) : (
        <Moon className="h-6 w-6 text-gray-700" />
      )}
    </button>
  );
};

export default DarkModeToggle;
