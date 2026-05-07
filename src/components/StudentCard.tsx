import { motion } from "motion/react";
import { StudentWithAverage } from "../types";

interface StudentCardProps {
  student: StudentWithAverage;
  index: number;
}

export const StudentCard = ({ student, index }: StudentCardProps) => {
  const initials = student.name.split(' ').map(n => n[0]).join('').slice(0, 2);
  const avatarColors = ["bg-teal-400", "bg-pink-400", "bg-yellow-400", "bg-orange-400", "bg-indigo-400"];
  const avatarColor = avatarColors[index % avatarColors.length];

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white border-4 border-indigo-900 rounded-3xl p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-6 shadow-[6px_6px_0px_0px_rgba(49,46,129,1)] hover:shadow-none hover:translate-x-1 hover:translate-y-1 transition-all"
    >
      <div className="flex items-center gap-4">
        <div className={`w-14 h-14 ${avatarColor} rounded-2xl border-2 border-indigo-900 flex items-center justify-center font-black text-indigo-900 text-xl shadow-sm rotate-2`}>
          {initials}
        </div>
        <div>
          <div className="font-black text-xl text-indigo-900 leading-tight">{student.name}</div>
          <div className="text-[10px] font-black uppercase text-slate-400 tracking-widest mt-1">ID: MATH-{(index + 1000)}</div>
        </div>
      </div>

      <div className="flex flex-wrap gap-4 items-end justify-center">
        <div className="flex gap-2">
          {student.grades.map((grade, idx) => (
            <div key={idx} className="flex flex-col items-center gap-1">
              <span className="text-[9px] font-black uppercase text-slate-400">P{idx + 1}</span>
              <span className="bg-indigo-50 border-2 border-indigo-900 w-12 h-10 flex items-center justify-center rounded-xl font-black text-indigo-900 text-sm">
                {grade.toFixed(1).replace('.', ',')}
              </span>
            </div>
          ))}
        </div>

        <div className={`ml-4 ${student.isPassing ? 'bg-teal-400' : 'bg-pink-400'} border-4 border-indigo-900 rounded-3xl px-8 py-3 flex flex-col items-center justify-center shadow-sm -rotate-1`}>
          <span className="text-[10px] font-black uppercase text-indigo-900">Média</span>
          <span className="text-3xl font-black text-indigo-900">
            {student.average.toFixed(1).replace('.', ',')}
          </span>
        </div>
      </div>
    </motion.div>
  );
};