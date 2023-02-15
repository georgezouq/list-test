import { IUser } from '@/types/Ticket'
import {Avatar} from 'antd'
import { observer } from 'mobx-react-lite'
import styles from './style.module.less'

interface IProps {
  user: IUser
  className?: string
}

const UserAvatarVert = ({user, className}: IProps) => {
  return (
    <div className={styles.userAvatarWrapper + ' ' + className}>
      <Avatar className={styles.userAvatar} src={user?.avatar} size="large" />
      <div className={styles.userNameArea}>
        <span className="activeText">{user?.name}</span>
      </div>
    </div>
  )
}

export default UserAvatarVert