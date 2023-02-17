import { useStore } from '@/store'
import { DEFAULT_GUEST_NAME } from '@/types/constants'
import { TicketMessageType } from '@/types/Ticket'
import {UserOutlined} from '@ant-design/icons'
import {Input, Button, message, Spin} from 'antd'
import { TextAreaRef } from 'antd/es/input/TextArea'
import { ChangeEvent, ChangeEventHandler, Ref, useRef, useState } from 'react'
import styles from './style.module.less'

const MessageSender = () => {
  const [content, setContent] = useState<string>('')
  const [loading, setLoading] = useState(false)
  const inputRef = useRef<any>()
  const {addMessage} = useStore()

  const handleReply = async (type: TicketMessageType) => {
    if (loading) return

    try {
      setLoading(true)
      await addMessage(content, type)
      setContent('')
      setLoading(false)
      message.success("Message send success!")
    } catch(e) {
      message.error("Message send failed!")
    }
  }

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value)
  }

  const onUserNameInsert = () => {
    const {selectionStart, selectionEnd} = inputRef.current?.resizableTextArea?.textArea
    const start = content.substring(0, selectionStart)
    const end = content.substring(selectionEnd, content.length)

    setContent(start + DEFAULT_GUEST_NAME + end)
  }

  return (
    <Spin spinning={loading}>
      <div className={styles.messageSender}>
        <div>
          <Button size="small" onClick={onUserNameInsert}>
            <UserOutlined />
          </Button>
        </div>
        <Input.TextArea ref={inputRef} value={content} className={styles.messager} onChange={handleContentChange} />
        <div>
          <Button className={styles.dangerBtn} onClick={() => handleReply('external')} danger>REPLY PUBLIC</Button>
          <Button type="primary" onClick={() => handleReply('internal')}>REPLY PRIVATE</Button>
        </div>
      </div>
    </Spin>
  )
}

export default MessageSender