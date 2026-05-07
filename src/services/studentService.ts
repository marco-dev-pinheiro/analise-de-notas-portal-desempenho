import { ClassData } from '../types';

const STORAGE_KEY = 'studentData';

const INITIAL_DATA: ClassData[] = [
  {
    name: "3º Ano A",
    students: [
      { name: "Marcelo Barbosa", grades: [6.5, 8.3, 9.2, 7.2], class: "3º Ano A" },
      { name: "Rafaela Santos", grades: [8.3, 4.5, 7.5, 4.5], class: "3º Ano A" },
      { name: "Ronaldo Santos", grades: [7, 2.1, 8.9, 8.9], class: "3º Ano A" },
      { name: "Lucas Gabriel Ribeiro", grades: [5.9, 9.8, 6.4, 6.1], class: "3º Ano A" },
      { name: "Luana da Silva", grades: [9.2, 5.6, 3.1, 9.8], class: "3º Ano A" },
      { name: "Mariana Pereira", grades: [4.7, 1.2, 5.8, 5.4], class: "3º Ano A" },
      { name: "Maria Eduarda Farias", grades: [8.8, 7.7, 4.2, 10], class: "3º Ano A" }
    ]
  },
  {
    name: "3º Ano B",
    students: [
      { name: "Fernando Henrique Silva", grades: [6.1, 6.9, 9.7, 2.3], class: "3º Ano B" },
      { name: "Pedro Henrique Souza", grades: [7.2, 3.4, 8, 6.7], class: "3º Ano B" },
      { name: "Ana Paula Oliveira", grades: [0, 0.5, 7.2, 8], class: "3º Ano B" },
      { name: "Natália Guimarães", grades: [5.5, 4.8, 5.1, 3.6], class: "3º Ano B" },
      { name: "João Vitor Ferreira", grades: [8, 8.9, 2.8, 0], class: "3º Ano B" },
      { name: "Rodrigo Almeida", grades: [7.9, 2.2, 6.9, 6.9], class: "3º Ano B" },
      { name: "Gustavo Carvalho", grades: [6.4, 9.1, 7.6, 4.3], class: "3º Ano B" }
    ]
  },
  {
    name: "3º Ano C",
    students: [
      { name: "Leticia Costa", grades: [9.9, 1, 9.4, 7.8], class: "3º Ano C" },
      { name: "Aline da Rocha", grades: [8.5, 7.2, 5.7, 5], class: "3º Ano C" },
      { name: "Marcos Vinicius Lima", grades: [6.8, 3.3, 4.5, 8.3], class: "3º Ano C" },
      { name: "Carla Cristina Castro", grades: [0, 6, 5.1, 1.1], class: "3º Ano C" },
      { name: "Isabela da Costa", grades: [5.2, 5.1, 6.3, 9.1], class: "3º Ano C" },
      { name: "Bruna Oliveira", grades: [9, 2.5, 9.9, 7.6], class: "3º Ano C" }
    ]
  }
];

export const getStudentData = async (): Promise<ClassData[]> => {
  // Simula carregamento de banco de dados (localStorage)
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    return JSON.parse(stored);
  } else {
    // Inicializa com dados iniciais se não houver no "DB"
    localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_DATA));
    return INITIAL_DATA;
  }
};

export const saveStudentData = async (data: ClassData[]): Promise<void> => {
  // Simula salvamento no banco de dados
  localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
};