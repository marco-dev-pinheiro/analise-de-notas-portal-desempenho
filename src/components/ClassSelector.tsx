interface ClassSelectorProps {
  selectedClass: string;
  onClassChange: (className: string) => void;
  classes: string[];
}

export const ClassSelector = ({ selectedClass, onClassChange, classes }: ClassSelectorProps) => {
  return (
    <details className="relative group w-full md:w-64">
      <summary className="px-6 py-3 bg-white border-4 border-indigo-900 rounded-full font-black text-indigo-900 shadow-[4px_4px_0px_0px_rgba(49,46,129,1)] flex items-center gap-2 cursor-pointer hover:bg-indigo-50 transition-colors list-none">
        <div className="w-3 h-3 bg-teal-400 rounded-full animate-pulse" />
        Turma: {selectedClass}
      </summary>
      <div className="mt-2 bg-white border-4 border-indigo-900 rounded-3xl p-3 flex flex-col gap-3 shadow-[4px_4px_0px_0px_rgba(49,46,129,1)]">
        {classes.map((className) => (
          <button
            key={className}
            type="button"
            onClick={() => onClassChange(className)}
            className={`text-left px-4 py-3 rounded-3xl font-black text-indigo-900 transition-colors ${
              selectedClass === className
                ? 'bg-indigo-900 text-white'
                : 'bg-indigo-50 hover:bg-indigo-100'
            }`}
          >
            {className}
          </button>
        ))}
      </div>
    </details>
  );
};