/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { motion, AnimatePresence } from "motion/react";
import { GraduationCap, Search } from "lucide-react";
import { useState, useMemo } from "react";
import { useStudents } from "./hooks/useStudents";
import { ClassSelector } from "./components/ClassSelector";
import { SearchInput } from "./components/SearchInput";
import { StatsCard } from "./components/StatsCard";
import { StudentCard } from "./components/StudentCard";
import { ClassData } from "./types";

export default function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedClass, setSelectedClass] = useState("3º Ano B");
  const PASS_GRADE = 7.0;

  const { data, loading, error } = useStudents();

  const currentClassData = data.find(cls => cls.name === selectedClass) || data[1];

  const studentsWithAverages = useMemo(() => {
    if (!currentClassData) return [];
    return currentClassData.students.map(student => {
      const average = student.grades.reduce((a, b) => a + b, 0) / student.grades.length;
      return {
        ...student,
        average: parseFloat(average.toFixed(2)),
        isPassing: average >= PASS_GRADE
      };
    }).filter(s => s.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }, [searchTerm, selectedClass, currentClassData]);

  const stats = useMemo(() => {
    if (!currentClassData) return { passing: 0, total: 0, avgScore: "0.00" };
    const total = currentClassData.students.length;
    const passing = currentClassData.students.filter(s => (s.grades.reduce((a, b) => a + b, 0) / 4) >= PASS_GRADE).length;
    const avgScore = (currentClassData.students.reduce((acc, curr) => acc + (curr.grades.reduce((a, b) => a + b, 0) / 4), 0) / total).toFixed(2);

    return { passing, total, avgScore };
  }, [selectedClass, currentClassData]);

  if (loading) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-indigo-900 font-black text-xl">Carregando dados...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-amber-50 flex items-center justify-center">
        <div className="text-red-600 font-black text-xl">{error}</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-amber-50 text-slate-800 font-sans p-4 md:p-8">
      <div className="max-w-6xl mx-auto space-y-12">

        {/* Header section */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="flex items-center gap-5">
            <div className="w-16 h-16 bg-pink-500 rounded-2xl flex items-center justify-center shadow-lg transform -rotate-3 border-4 border-indigo-900">
              <GraduationCap className="w-8 h-8 text-white" id="header-icon" />
            </div>
            <div>
              <h1 className="text-4xl font-black tracking-tight text-indigo-900" id="app-title">Análise de Notas</h1>
              <p className="text-indigo-600 font-bold uppercase tracking-widest text-xs" id="app-subtitle">Portal de Desempenho v2.0</p>
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-4">
            <ClassSelector
              selectedClass={selectedClass}
              onClassChange={setSelectedClass}
              classes={data.map(cls => cls.name)}
            />
            <SearchInput value={searchTerm} onChange={setSearchTerm} />
          </div>
        </header>

        {/* Dashboard stats in summary mode */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <StatsCard total={stats.total} passing={stats.passing} avgScore={stats.avgScore} />

          <div className="md:col-span-2 flex flex-col gap-6">
            <div className="flex items-center justify-between px-2">
              <h2 className="text-2xl font-black text-indigo-900">Quadro de Notas - {selectedClass}</h2>
              <span className="bg-indigo-900 text-white px-4 py-1 rounded-full text-xs font-black uppercase tracking-widest">
                {studentsWithAverages.length} Alunos Filtrados
              </span>
            </div>

            <div className="space-y-4 max-h-[600px] overflow-y-auto pr-2 custom-scrollbar">
              <AnimatePresence mode="popLayout">
                {studentsWithAverages.map((student, index) => (
                  <StudentCard key={student.name} student={student} index={index} />
                ))}
              </AnimatePresence>

              {studentsWithAverages.length === 0 && (
                <div className="py-20 text-center space-y-6 bg-white/50 border-4 border-dashed border-indigo-200 rounded-[3rem]">
                  <Search className="w-16 h-16 text-indigo-200 mx-auto" />
                  <p className="text-indigo-400 font-black text-xl uppercase tracking-tight">Fim de curso! Nenhum resultado.</p>
                  <button
                    onClick={() => setSearchTerm("")}
                    className="px-8 py-3 bg-indigo-900 text-white rounded-full font-black uppercase text-xs tracking-widest hover:bg-pink-500 transition-colors"
                  >
                    Limpar Filtros
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Footer */}
        <footer className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6 text-indigo-900 opacity-60 border-t-4 border-indigo-900/10">
          <div className="font-black text-xs uppercase tracking-widest flex items-center gap-2">
            <span className="w-2 h-2 bg-pink-500 rounded-full" />
            © 2026 Desenvolvido por Marco Pinheiro.
          </div>
          <div className="flex gap-8 font-black uppercase text-[10px] tracking-widest">
            <a href="#" className="hover:text-pink-500 underline underline-offset-4 decoration-2">Configurações</a>
            <a href="#" className="hover:text-pink-500 underline underline-offset-4 decoration-2">Exportar Dados</a>
            <a href="#" className="hover:text-pink-500 underline underline-offset-4 decoration-2">Suporte Técnico</a>
          </div>
        </footer>
      </div>
    </div>
  );
}
