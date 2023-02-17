export type TicketMessageType = 'external' | 'internal'

export interface TicketMessage {
  comment: string
  comment_type: TicketMessageType
  created_at: string
  id: number
  user: {
    avatar: string
    id: number
    name: string
    url: string
  }
}

export interface TicketsItem {
  key?: number;
  archived: boolean
  assignee: {
    id: string | null
    name: string
  },
  description: string
  dtend: string
  dtstart: string
  house_name: string
  house_path: string
  house_tags: string[]
  id: number
  room_name: string
  starred: string
  status: string | null
  summary: string
  ticket_path: string
  unread: boolean
  updated_at: string
  url: string
  user: IUser
}

export interface IUser {
  avatar: string
  bookings: [
    {
      booking_uid: string
      confirm_number: string
      id: number
    }
  ]
  email: string
  name: string
}

export interface SearchCondition {
  propertyName: string;
  propertyTag: string;
  confirmNumber: number;
}