import { getTickets } from '@/lib/controllers/Ticket'
import nextConnect from 'next-connect'

const handler = nextConnect()
handler.get(getTickets)

export default handler