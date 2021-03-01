import usersjson from '../../../storage/users.json'

export interface IUsers {
    id: string
    name: string
}
const users = usersjson

export default function handler(req, res) {
  res.status(200).json(users)
}