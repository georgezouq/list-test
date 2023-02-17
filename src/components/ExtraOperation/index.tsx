import {Button, Dropdown, Menu} from 'antd'
import {UnorderedListOutlined, DatabaseOutlined, StarOutlined, SyncOutlined, DownOutlined} from '@ant-design/icons'
import styles from './style.module.less'
import { useStore } from '@/store'
import { observer } from 'mobx-react-lite'

const colors = [
  'red',
  'orange',
  'blue',
  'green',
  'gray',
  'yellow'
]

interface IProps {
  onRefresh: () => void
  selectedKeys: number[]
  clearSelected: () => void
}

const ExtraOperation = observer(({ selectedKeys, onRefresh, clearSelected }: IProps) => {
  const {archiveSelected, changeStarColor} = useStore()
  const menuItems = colors.map(cur => ({
    label: cur,
    key: cur,
    icon: <span style={{color: cur}}>★</span>
  }))

  const handleArchive = () => {
    archiveSelected(selectedKeys)
    clearSelected()
  }

  const handleColorClick = (e: any) => {
    changeStarColor(selectedKeys, e.key)
  }

  const menuProps = {
    items: menuItems,
    onClick: handleColorClick,
  };

  return (
    <div className={styles.extraOperation}>
      <Button className={styles.button} size="small" icon={<SyncOutlined />} type="primary" onClick={onRefresh}>REFRESH</Button>
      <Button className={styles.button} size="small" icon={<DatabaseOutlined />} onClick={handleArchive} type="default">Archive</Button>
      <Dropdown menu={menuProps}>
        <Button className={styles.button} size="small" icon={<StarOutlined />} danger>Star <DownOutlined /></Button>
      </Dropdown>
      <Button className={styles.button} size="small" icon={<UnorderedListOutlined />} type="default"></Button>
    </div>
  )
})

export default ExtraOperation