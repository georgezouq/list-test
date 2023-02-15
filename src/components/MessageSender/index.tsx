import {UserOutlined} from '@ant-design/icons'
import {Input, Button} from 'antd'
import styles from './style.module.less'

const MessageSender = () => {
  return (
    <div className={styles.messageSender}>
      <Button size="small">
        <UserOutlined />
      </Button>
      <Input />
      <div>
        <Button danger>REPLY PUBLIC</Button>
        <Button type="primary">REPLY PUBLIC</Button>
      </div>
    </div>
  )
}

export default MessageSender