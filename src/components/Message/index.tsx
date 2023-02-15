import { Avatar } from 'antd'
import styles from './style.module.less'
import { TicketMessage } from '@/types/Ticket'

interface IProps {
  message: TicketMessage;
}


const Message = ({ message }: IProps) => {
  return (
    <div id={`m${message.id}`} className={styles.messageWrapper + ' ' + styles[message.comment_type === 'external' ? '' : 'me']}>
      <Avatar className={styles.messageAvatar} src={message.user.avatar} size='small' />
      <div className={styles.messageRight}>
        {/* {!isShare && (message.from === 'them' ? <Text className={styles.messageNickname}>ChatGPT</Text> : <OpenData className={styles.messageNickname + ' ' + styles.right} type='userNickName' />)} */}
        <div className={styles.messageContentWrapper}>
          <div className={styles.messageContent}>
            <span>{message.comment}</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Message