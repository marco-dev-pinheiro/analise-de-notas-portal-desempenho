import { useState, useEffect } from 'react';
import { ClassData } from '../types';
import { getStudentData } from '../services/studentService';

// Hook personalizado para gerenciar dados dos alunos
export const useStudents = () => {
  const [data, setData] = useState<ClassData[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Carrega os dados dos alunos ao montar o componente
  useEffect(() => {
    const loadData = async () => {
      try {
        const studentData = await getStudentData();
        setData(studentData);
      } catch (err) {
        setError('Erro ao carregar dados dos alunos');
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  return { data, loading, error, setData };
};