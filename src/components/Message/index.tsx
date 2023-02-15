import { Avatar } from 'antd'
import styles from './style.module.less'
import { TicketMessage } from '@/types/Ticket'
import UserAvatarVert from '@/components/UserAvatarVert'
import MessageStatusBar from '../MessageStatusBar';
import { useState } from 'react';
import MessageTemplateModal from '../../components/MessageTemplateModal'

interface IProps {
  message: TicketMessage;
}

const Message = ({ message }: IProps) => {
  const [modalOpen, setModalOpen] = useState(false)
  const isMe = message.comment_type !== 'external'

  const handleModalOpen = () => {
    setModalOpen(!modalOpen)
  }

  return (
    <div className={styles.message}>
      <div id={`m${message.id}`} className={styles.messageWrapper + ' ' + styles[isMe ? 'me' : '']}>
        <UserAvatarVert className={styles.messageAvatar} user={message.user as any} />
        <div className={styles.messageRight}>
          <div className={styles.messageContentWrapper}>
            <div className={styles.messageContent}>
              <span>{message.comment}</span>
            </div>
          </div>
        </div>
      </div>
      <MessageTemplateModal isOpen={modalOpen} onClose={handleModalOpen} />
      <MessageStatusBar message={message} isMe={isMe} onModalOpen={handleModalOpen} />
    </div>
  )
}

export default Message