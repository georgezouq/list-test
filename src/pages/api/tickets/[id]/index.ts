import { getTicket } from '@/lib/controllers/Ticket'
import nextConnect from 'next-connect'

const handler = nextConnect()
handler.get(getTicket)

export default handler