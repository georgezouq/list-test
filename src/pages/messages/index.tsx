import FilterPanel from "@/components/FilterPanel"
import FolderPanel from "@/components/FolderPanel"
import MessageListPanel from "@/components/MessageListPanel"

import styles from './style.module.less'

const TicketsPage = () => {
  return (
    <div className={styles.ticketsPageContainer}>
      <div className={styles.ticketsPageToolbar}>
        <FolderPanel />
        <FilterPanel />
      </div>
      <div className={styles.ticketsPageContent}>
        <MessageListPanel />
      </div>
    </div>
  )
}

export default TicketsPage