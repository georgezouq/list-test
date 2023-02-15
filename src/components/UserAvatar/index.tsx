import { IUser } from '@/types/Ticket'
import {Avatar} from 'antd'
import { observer } from 'mobx-react-lite'
import styles from './style.module.less'
import { useStore } from '@/store'

interface IProps {
  user: IUser
  status: any
  archived: boolean
  starred: string
}

const UserAvatar = observer(({user, archived, starred}: IProps) => {
  const {curStar} = useStore()
  return (
    <div className={styles.userAvatarWrapper}>
      <Avatar src={user?.avatar} />
      <div className={styles.userNameArea}>
        <span className="activeText">{user?.name}</span>
        <span><i className={styles.activeStatus}></i> {!archived && 'Inbox'}{archived && 'Archive'}{starred === curStar}</span>
      </div>
    </div>
  )
})

export default UserAvatar