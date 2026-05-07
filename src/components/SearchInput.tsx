import { Search } from "lucide-react";

interface SearchInputProps {
  value: string;
  onChange: (value: string) => void;
}

export const SearchInput = ({ value, onChange }: SearchInputProps) => {
  return (
    <div className="relative group w-full md:w-64">
      <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-indigo-900 group-focus-within:text-pink-500 transition-colors" />
      <input
        type="text"
        id="search-input"
        placeholder="Buscar aluno..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className="w-full pl-12 pr-4 py-3 bg-white border-4 border-indigo-900 rounded-3xl focus:outline-none focus:ring-0 focus:border-pink-500 transition-all shadow-[4px_4px_0px_0px_rgba(49,46,129,1)] font-bold text-indigo-900"
      />
    </div>
  );
};