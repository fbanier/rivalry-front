export type UserRegister = {
  username : string
  email: string
  password: string
  active : boolean
}
export type UserPublic = {
  id: bigint
  username : string
  avatar : string
  points: bigint
  matchsList: [][]
  tournaments:[]
}
