import { useState } from "react";

type Props = {
  onSearch: (city: string) => void;
  onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
};

const Header = ({ onSearch, onKeyPress }: Props) => {
  const [city, setCity] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setCity(value);
  };

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      e.preventDefault();
      if (city.trim() === "") {
        setError("Please enter a city name.");
      } else {
        setError(null);
        onSearch(city);
        onKeyPress?.(e);
      }
    }
  };

  return (
    <header className="pt-8">
      <input
        type="text"
        placeholder="Search..."
        className="bg-background-components container rounded-full p-3 pl-8 outline-none"
        value={city}
        onChange={handleInputChange}
        onKeyDown={handleKeyPress}
        autoFocus
      />
      {error && <p className="text-red-500 mt-10 text-center">{error}</p>}
    </header>
  );
};

export default Header;
