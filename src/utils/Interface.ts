interface Iform1 {
  name: string
  gender: string
  region: string
}
interface Iform2 {
  status: string
  school: string
}
interface Iform3 {
  hobby: unknown[]
}
interface Iform4 {
  love: string
  poetry: unknown[]
}
export type { Iform1, Iform2, Iform3, Iform4 }
