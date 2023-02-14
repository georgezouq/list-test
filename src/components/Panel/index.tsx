import { Layout, Card } from 'antd'
import { CSSProperties } from 'react'
import styles from './style.module.less'

const { Content } = Layout

interface IProps {
  title: string
  children: JSX.Element
  style: CSSProperties
}

const Panel = ({title, children, style}: IProps) => {
  return (
    <Content
      className={styles.panel}
      style={style}
    >
      <Card className={styles.card} title={title} extra={<a href="#">More</a>}>
        {children}
      </Card>
    </Content>
  )
}

export default Panel