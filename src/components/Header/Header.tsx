// Hook imports
import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Header = ({ onSearch, onKeyPress }: Props) => {
  const [city, setCity] = useState<string>("");

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
    onSearch(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      onKeyPress?.(e);
    }
  };

  return (
    <header className="pt-8">
      <input
        type="text"
        placeholder="Search for cities..."
        className="bg-background-components container rounded-full p-3 pl-8 outline-none"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        autoFocus
      />
    </header>
  );
};

export default Header;
