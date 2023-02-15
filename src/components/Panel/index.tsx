import { Layout, Card } from 'antd'
import { CSSProperties } from 'react'
import styles from './style.module.less'

const { Content } = Layout

interface IProps {
  title?: string
  children?: JSX.Element | JSX.Element[]
  style?: CSSProperties
  extra?: JSX.Element
}

const Panel = ({title, children, style, extra}: IProps) => {
  return (
    <Content
      className={styles.panel}
      style={style}
    >
      <Card className={styles.card} title={title} extra={extra}>
        {children}
      </Card>
    </Content>
  )
}

export default Panel