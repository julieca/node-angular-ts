export type List<T> = {
  total: number
  limit: number
  offset: number
  records: T[]
}
