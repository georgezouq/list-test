import MessageListView from "@/components/MessageListView";
import MessageSender from "@/components/MessageSender"
import Panel from "@/components/Panel"
import { useStore } from "@/store";
import { TabsProps, Spin, Tabs } from "antd";
import { observer } from "mobx-react-lite";
import { useState } from "react";

const MessageDetails = observer(() => {
  const {curTicket} = useStore()
  const [mailStatus, setMailStatus] = useState('all')

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

  if (!curTicket) {
   return <Spin /> 
  }

  return (
    <Panel title={curTicket.user?.email}>
      <MessageSender />
      <Tabs activeKey={mailStatus} items={items} onChange={handleChange} />
      <MessageListView />
    </Panel>
  )
})

export default MessageDetails