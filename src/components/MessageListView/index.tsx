import Message from "../Message"
import styles from './style.module.less'
import {useStore} from '../../store'
import { useEffect, useMemo, useRef, useState } from "react"
import { TicketMessage } from "@/types/Ticket"
import { observer } from "mobx-react-lite"

interface IProps {
  mailStatus: string
}

const MessageListView = observer(({ mailStatus }: IProps) => {
  const { curTicketMessages } = useStore()

  let messages = useMemo(() => {
    let res = curTicketMessages || []
  
    if (mailStatus !== 'all') {
      res = res.filter(msg => {
        return (mailStatus === 'public' && msg.comment_type === 'external') || (mailStatus === 'private' && msg.comment_type === 'internal')
      })
    }

    return res;
  }, [mailStatus, curTicketMessages])

  return (<div className={styles.messageListContainer}>
    {messages?.map?.((cur: TicketMessage, i: number) => {
      return <Message message={cur} key={i} />
    })}
  </div>)
})

export default MessageListView