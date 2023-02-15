import axios from 'axios'

export const getTickets = () => {
  return axios.get('/api/tickets')
}

export const getTicket = (id: string) => {
  return axios.get(`/api/ticket?id=${id}`)
}