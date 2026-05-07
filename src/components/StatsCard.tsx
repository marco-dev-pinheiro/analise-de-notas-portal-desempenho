import { User } from "lucide-react";

interface StatsCardProps {
  total: number;
  passing: number;
  avgScore: string;
}

export const StatsCard = ({ total, passing, avgScore }: StatsCardProps) => {
  return (
    <div className="bg-indigo-900 rounded-[2.5rem] p-8 text-white flex flex-col gap-6 relative overflow-hidden shadow-xl">
      <div className="absolute -right-8 -top-8 w-32 h-32 bg-indigo-800 rounded-full opacity-50"></div>
      <div className="flex items-center gap-3">
        <User className="w-6 h-6 text-teal-400" />
        <h3 className="text-xl font-black uppercase tracking-tight">Estatísticas</h3>
      </div>
      <div className="flex flex-col gap-4">
        <div className="flex justify-between items-end border-b border-indigo-700 pb-3">
          <span className="text-indigo-300 font-bold text-xs uppercase tracking-widest">Total de Alunos</span>
          <span className="text-3xl font-black">{total}</span>
        </div>
        <div className="flex justify-between items-end border-b border-indigo-700 pb-3">
          <span className="text-indigo-300 font-bold text-xs uppercase tracking-widest">Alunos Aprovados</span>
          <span className="text-3xl font-black text-teal-400">{Math.round((passing / total) * 100)}%</span>
        </div>
        <div className="flex justify-between items-end">
          <span className="text-indigo-300 font-bold text-xs uppercase tracking-widest">Média Geral</span>
          <span className="text-3xl font-black text-pink-400">{avgScore.replace('.', ',')}</span>
        </div>
      </div>
    </div>
  );
};