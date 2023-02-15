import { NextApiRequest, NextApiResponse } from "next";
import tickets from '@/mocks/tickets.json'
import ticket from '@/mocks/ticket.json'
import { getFromQuery } from "./utils"
import toNumber from 'lodash/toNumber'

export const getTickets = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).send(tickets)
};

export const getTicket = async (req: NextApiRequest, res: NextApiResponse) => {
  let id = getFromQuery(req, 'id')
  if (!id) return res.status(400).send("id is required!")

  id = toNumber(id)

  return res.status(200).send({
    ticket: tickets.data.find(cur => cur.id === id),
    messages: ticket,
  })
};