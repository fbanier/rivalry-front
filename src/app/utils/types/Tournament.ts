export type Tournament = {
  id : bigint
  name : string
  description :string
  beginDate : string
  endDate : string
  format : string
  numberOfPlayers : number
  game : bigint
  status : string
  isActive :boolean
  playerList : []
}
