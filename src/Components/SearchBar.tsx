import { useTheme } from "../context/theme/useThemeContext";

interface SearchProps {
  value: string;
  onChange: (value: string) => void;
  placeholder: string;
}
function SearchBar(Props: SearchProps) {
  const { value, onChange, placeholder = "Search by name..." } = Props
  const { theme } = useTheme();
  const isDark = theme === "dark";

  return (
    <>
      <input type="text"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder={placeholder}
        className={`px-4 rounded-lg border-b border-b-teal-300 outline-none ${isDark ? "text-gray-100 placeholder:text-gray-400" : "text-gray-900 placeholder:text-gray-500"
          }`}
      />
    </>
  )
}

export default SearchBar