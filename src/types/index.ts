export interface Student {
  name: string;
  grades: number[];
  class: string;
}

export interface ClassData {
  name: string;
  students: Student[];
}

export interface StudentWithAverage extends Student {
  average: number;
  isPassing: boolean;
}