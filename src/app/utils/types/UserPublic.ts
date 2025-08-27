export type UserRegister = {
  username : string
  email: string
  password: string
  active : boolean
}
export type UserPublic = {
  id: number
  username : string
  avatar : string
  points: bigint
  matchsList: [][]
  tournaments:[]
}
