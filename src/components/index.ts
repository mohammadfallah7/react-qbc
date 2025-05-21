// Generics

interface ApiModel<T> {
  count: number;
  next: string;
  previous: string;
  results: T[];
}

interface Movie {
  id: number;
  name: string;
  video: string;
}

interface Task {
  id: number;
  title: string;
  description: string;
}

function greet<K>(name: K) {
  return name;
}

greet<number>(2);

greet<string>("Mohammad");

greet<boolean>(true);
