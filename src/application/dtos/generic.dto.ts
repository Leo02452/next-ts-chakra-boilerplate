export type UpdateEntityDto<T> = {
  id: number;
  data: Partial<T>;
};

export type FindManyEntityDto = {
  page?: number;
  limit?: number;
  sort?: string;
  order?: 'asc' | 'desc';
  search?: string;
};
