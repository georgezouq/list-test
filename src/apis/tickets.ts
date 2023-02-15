import axios from 'axios'

export const getTickets = () => {
  return axios.get('/api/tickets')
}

export const getTicket = (id: number) => {
  return axios.get(`/api/tickets/${id}`)
}