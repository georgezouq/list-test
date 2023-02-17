import { getTicket, getTickets } from "@/apis/tickets";
import { SearchCondition, TicketMessage, TicketMessageType, TicketsItem } from "@/types/Ticket";
import { makeAutoObservable } from "mobx";
import { FC, createContext, useContext } from "react";
import { customAlphabet } from 'nanoid'
import isEmpty from 'lodash/isEmpty'
import some from 'lodash/some'
import includes from 'lodash/includes'
 
const nanoid = customAlphabet('1234567890', 8)

class Store {
  constructor() {
    makeAutoObservable(this);
  }

  folder: string = 'inbox'

  // FE cache
  allTickets: TicketsItem[] = []
  tickets: TicketsItem[] = []
  curTicket: TicketsItem | null = null
  curTicketMessages: TicketMessage[] | null = null
  curStar = null
  loading = false
  user = {
    name: 'Delbert Quiambao'
  }

  statistics = {
    all: 0,
    private: 0,
    public: 0
  }

  onSearchList = (condition: SearchCondition) => {
    const tickets = this.allTickets.filter(cur => {
      let res = true
      if (!isEmpty(condition.propertyTag) && !some(cur.house_tags, (e) => includes(condition.propertyTag, e))) res = false
      // TODO check if house_name is propertyName
      if (!isEmpty(condition.propertyName) && cur.house_name !== condition.propertyName) res = false
      
      const txt = `"confirm_number":"${condition.confirmNumber}"`
      if (!isEmpty(condition.confirmNumber) && JSON.stringify(cur.user.bookings).indexOf(txt) === -1)  res = false
      return res
    })

    this.tickets = tickets
  }

  // messages change listener
  onMessageChange = () => {
    const statistics = {
      all: (this.curTicketMessages || []).length,
      private: 0,
      public: 0
    }

    this.curTicketMessages?.map(cur => {
      if (cur.comment_type === 'external') statistics.public++
      if (cur.comment_type === 'internal') statistics.private++
    })

    this.statistics = statistics
  }

  addMessage = (content: string, type: TicketMessageType) => {
    const messages = this.curTicketMessages || []

    this.curTicketMessages = [...messages, {
      comment: content,
      comment_type: type,
      created_at: (new Date()).toUTCString(),
      id: parseInt(nanoid()),
      user: {
        avatar: '',
        id: parseInt(nanoid()),
        name: 'Delbert Quiambao',
        url: ''
      }
    }]

    this.onMessageChange()
  }

  setFolder = async (folder: string, useCache = false) => {
    this.folder = folder
    this.loading = true

    const list = useCache ? this.allTickets : (await getTickets()).data.data

    this.tickets = list.filter((cur: TicketsItem) => {
      if (this.folder === 'inbox' && !cur.archived) {
        return true
      }

      if (this.folder === 'archive' && cur.archived) {
        return true
      }

      if (this.folder === 'starredTickets' && !!cur.starred) {
        return true
      }

      return false
    })

    if (!useCache) this.allTickets = list

    this.loading = false
  }

  getTickets = async () => {
    await this.setFolder(this.folder)
  }

  getTicket = async (id: number) => {
    const {data} = await getTicket(id)
    this.curTicket = data.ticket
    this.curTicketMessages = data.messages
    this.onMessageChange()
  }

  archiveSelected = (keys: number[]) => {
    const newTickets = [...this.allTickets]
    newTickets.map((cur: TicketsItem) => {
      if (keys.indexOf(cur.id) !== -1) {
        cur.archived = true
      }
    })

    this.allTickets = newTickets

    // refresh data
    this.setFolder(this.folder, true)
  }

  changeStarColor = (selectedKeys: number[], key: string) => {
    let newAllTicket = [...this.allTickets]
    newAllTicket = newAllTicket.map(cur => {
      if (selectedKeys.indexOf(cur.id) !== -1) {
        cur.starred = key
      }
      return cur
    })

    this.allTickets = newAllTicket
    const ticketIds = this.tickets.map(cur => cur.id)
    this.tickets = newAllTicket.filter(cur => ticketIds.indexOf(cur.id) !== -1)
  }
}

const StoreContext = createContext<Store>(new Store)

const StoreProvider: FC<{ store: Store, children: any }> = ({store, children}: any) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStore = () => {
  return useContext(StoreContext)
}

export {Store, StoreProvider, useStore}