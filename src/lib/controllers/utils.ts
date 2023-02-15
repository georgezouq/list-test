import { NextApiRequest } from "next"
import isArray from "lodash/isArray"

export const getFromQuery = (req: NextApiRequest, key: string) => {
  const value = req.query[key]
  return isArray(value) ? (value as Array<any>)[0] : value
}