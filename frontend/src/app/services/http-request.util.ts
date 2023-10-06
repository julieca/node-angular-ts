export type List<T> = {
  total: number
  limit: number
  offset: number
  records: T[]
}

export enum OrderDir {
  ASC = 'asc',
  DESC = 'desc'
}
