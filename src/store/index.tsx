import { getTicket, getTickets } from "@/apis/tickets";
import { TicketMessage, TicketsItem } from "@/types/Ticket";
import { makeAutoObservable } from "mobx";
import { FC, createContext, useContext } from "react";

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
}

const StoreContext = createContext<Store>(new Store)

const StoreProvider: FC<{ store: Store, children: any }> = ({store, children}: any) => (
  <StoreContext.Provider value={store}>{children}</StoreContext.Provider>
)

const useStore = () => {
  return useContext(StoreContext)
}

export {Store, StoreProvider, useStore}