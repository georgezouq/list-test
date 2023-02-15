import MessageListView from "@/components/MessageListView"
import MessageSender from "@/components/MessageSender"
import Panel from "@/components/Panel"
import { useStore } from "@/store"
import { TabsProps, Spin, Tabs } from "antd"
import { observer } from "mobx-react-lite"
import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import toNumber from "lodash/toNumber"
import styles from "./style.module.less"

const MessageDetails = observer(() => {
  const {curTicket, getTicket, loading} = useStore()
  const [mailStatus, setMailStatus] = useState('all')
  const router = useRouter()
  const {id} = router.query

  const items: TabsProps['items'] = [
    {
      key: 'all',
      label: `All`,
    },
    {
      key: 'public',
      label: `Public`,
    },
    {
      key: 'private',
      label: `Private`,
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
        <MessageListView />
      </div>
    </Panel>
  )
})

export default MessageDetails