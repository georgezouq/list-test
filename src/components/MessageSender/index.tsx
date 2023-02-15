import {UserOutlined} from '@ant-design/icons'
import {Input, Button} from 'antd'
import styles from './style.module.less'

const MessageSender = () => {
  return (
    <div className={styles.messageSender}>
      <div>
        <Button size="small">
          <UserOutlined />
        </Button>
      </div>
      <Input.TextArea className={styles.messager} />
      <div>
        <Button className={styles.dangerBtn} danger>REPLY PUBLIC</Button>
        <Button type="primary">REPLY PUBLIC</Button>
      </div>
    </div>
  )
}

export default MessageSender