import Panel from "../Panel"
import {Menu} from 'antd'
import {MailOutlined, DatabaseOutlined, StarOutlined, CalendarOutlined, BuildOutlined} from '@ant-design/icons'
import { useStore } from "@/store"
import { observer } from "mobx-react-lite"

const FolderPanel = observer(() => {
  const {setFolder, folder} = useStore()

  const handleClick = (e: any) => {
    setFolder(e.key, true)
  }

  return (
    <Panel title="Folder" style={{marginBottom: '10px'}}>
      <Menu
        onClick={handleClick}
        selectedKeys={[folder]}
        mode="inline"
        items={[{
          label: 'Inbox',
          key: 'inbox',
          icon: <MailOutlined />
        }, {
          label: 'Archive',
          key: 'archive',
          icon: <DatabaseOutlined />
        }, {
          label: 'Starred Tickets',
          key: 'starredTickets',
          icon: <StarOutlined />
        }, {
          label: 'Booking Confirmed',
          key: 'bookingConfirmed',
          icon: <CalendarOutlined />
        }, {
          label: 'All Messages',
          key: 'allMessages',
          icon: <BuildOutlined />
        }, ]}
      />
    </Panel>
  )
})

export default FolderPanel