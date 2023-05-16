export interface TodoDto {
  id: string;
  title: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface TodoSearchDto {
  q: string;
  result: TodoDto[];
  qty: number;
  total: number;
  page: number;
  limit: number;
}
