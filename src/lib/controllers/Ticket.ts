import { NextApiRequest, NextApiResponse } from "next";
import tickets from '@/mocks/tickets.json'
import ticket from '@/mocks/ticket.json'
import { getFromQuery } from "./utils";

export const getTickets = async (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).send(tickets)
};

export const getTicket = async (req: NextApiRequest, res: NextApiResponse) => {
  const id = getFromQuery(req, 'id')
  return res.status(200).send({
    ticket: tickets.data.find(cur => cur.id === id),
    messages: ticket,
  })
};