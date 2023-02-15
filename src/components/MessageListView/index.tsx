import Message from "../Message"
import styles from './style.module.less'
import {useStore} from '../../store'
import { useEffect, useRef, useState } from "react"
import { TicketMessage } from "@/types/Ticket"

interface IProps {
}

const MessageListView = () => {
  const {curTicketMessages} = useStore()

  return (<div className={styles.messageListContainer}>
    {curTicketMessages?.map?.((cur: TicketMessage, i: number) => {
      return <Message message={cur} key={i} />
    })}
  </div>)
}

export default MessageListView