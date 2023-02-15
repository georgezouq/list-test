import {Button} from 'antd'
import {PlusOutlined, CheckCircleOutlined} from '@ant-design/icons'
import { TicketMessage } from '@/types/Ticket'
import moment from 'moment'
import styles from './style.module.less'

interface IProps {
  message: TicketMessage
  isMe: boolean
  onModalOpen?: () => void
}

const MessageStatusBar = ({message, isMe, onModalOpen}: IProps) => {
  return (
    <div className={styles.messageStatusBar + ' ' + (isMe ? styles.me : '')}>
      <span className={styles.date}>{moment(message.created_at).format('yyyy-MM-dd ddd, hh:mm a')}</span>
      <CheckCircleOutlined className={styles.icon} twoToneColor="#52c41a" />
      <Button size="small" icon={<PlusOutlined />} onClick={onModalOpen}></Button>
    </div>
  )
}

export default MessageStatusBar