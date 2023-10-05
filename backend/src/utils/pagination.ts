export enum OrderDir {
  ASC = 'asc',
  DESC = 'desc'
}
export const getOrderDir = (dir: OrderDir) => dir === OrderDir.ASC ? 1 : -1
