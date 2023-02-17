import MessageListView from "@/components/MessageListView"
import MessageSender from "@/components/MessageSender"
import Panel from "@/components/Panel"
import { useStore } from "@/store"
import { TabsProps, Spin, Tabs } from "antd"
import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import { Tag } from 'antd'
import { useEffect, useState } from "react"
import toNumber from "lodash/toNumber"
import styles from "./style.module.less"

const MessageDetails = observer(() => {
  const {curTicket, getTicket, loading, statistics} = useStore()
  const [mailStatus, setMailStatus] = useState('all')
  const router = useRouter()
  const {id} = router.query

  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: <span>All <Tag>{statistics.all}</Tag></span>,
    },
    {
      key: 'public',
      label: <span>Public <Tag>{statistics.public}</Tag></span>,
    },
    {
      key: 'private',
      label: <span>Private <Tag>{statistics.private}</Tag></span>,
    },
  ];

  const handleChange = (e: string) => {
    setMailStatus(e)
  }

  useEffect(() => {
    if (!id) return
    getTicket(toNumber(id))
  }, [id])

  if (!curTicket || loading) {
   return <Spin /> 
  }

  return (
    <Panel style={{height: '100%'}} title={curTicket.user?.email}>
      <MessageSender />
      <Tabs activeKey={mailStatus} items={items} onChange={handleChange} />
      <div className={styles.messageListScroll}>
        <MessageListView mailStatus={mailStatus} />
      </div>
    </Panel>
  )
})

export default MessageDetails