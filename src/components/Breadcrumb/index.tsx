import {Breadcrumb} from 'antd'
import styles from './style.module.less'

const BreadCrumbComponent = () => {
  return (
    <Breadcrumb className={styles.breadcrumb}>
      <Breadcrumb.Item>Home</Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Tickets</a>
      </Breadcrumb.Item>
      <Breadcrumb.Item>
        <a href="">Ticket Details</a>
      </Breadcrumb.Item>
    </Breadcrumb>
  )
}

export default BreadCrumbComponent