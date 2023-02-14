import Panel from "../Panel"
import {Menu} from 'antd'
import {MailOutlined, DatabaseOutlined, StarOutlined, CalendarOutlined, BuildOutlined} from '@ant-design/icons'

const MessageListPanel = () => {
  const current = ''

  const handleClick = () => {

  }

  return (
    <Panel title="Message List">
      <Menu
        onClick={handleClick}
        defaultOpenKeys={['sub1']}
        selectedKeys={[current]}
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
}

export default MessageListPanel