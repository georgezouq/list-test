import Panel from "../Panel"
import { Table, Spin, Button } from 'antd'
import { useEffect, useMemo, useState } from "react"
import { FormOutlined } from '@ant-design/icons'
import { TicketsItem } from "@/types/Ticket"

import useClient from "@/hooks/useClient"
import UserAvatar from "../UserAvatar"
import { diffTime } from "@/utils/date"
import ExtraOperation from "../ExtraOperation"

import styles from './style.module.less'
import { useRouter } from "next/router"
import { useStore } from "@/store"
import { observer } from "mobx-react-lite"

const MessageListPanel = observer(() => {
  const {getTickets, tickets, loading} = useStore()
  const isClient = useClient()
  const router = useRouter()
  const [selectedRowKeys, setSelectedRowKeys] = useState<number[]>([]);

  const init = async () => {
    await getTickets()
  }

  useEffect(() => {
    init()
  }, [])

  const handleClick = () => {

  }

  const handleSummaryClick = (id: string) => {
    router.push(`/messages/${id}`)
  }

  const columns = [
    {
      title: '☆',
      dataIndex: 'star',
      key: 'star',
      render: (_: any, row: any) => {
        return (
          <span style={{color: row.starred}}>★</span>
        )
      }
    },
    {
      title: 'User',
      dataIndex: 'user',
      key: 'user',
      render: (_: any, row: any) => {
        return (
          <UserAvatar user={row.user} status={row.status} archived={row.archived} starred={row.starred} />
        )
      }
    },
    {
      title: 'Property Name',
      dataIndex: 'house_name',
      key: 'house_name',
      render: (_: any, row: any) => {
        return (
          <div>
            <div className="activeText">{row.house_name}</div>
            <div>{row.room_name}</div>
          </div>
        )
      }
    },
    {
      title: 'Checkin',
      dataIndex: 'dtstart',
      key: 'dtstart',
    },
    {
      title: 'Checkout',
      dataIndex: 'dtend',
      key: 'dtend'
    },
    {
      title: 'Description',
      dataIndex: 'id',
      key: 'id',
      render: (id: string, row: any) => {
        return (
          <div>
            <div className="activeText" onClick={() => handleSummaryClick(id)}>{row.summary}</div>
            <div>{row.description}</div>
          </div>
        )
      }
    },
    {
      title: 'Update',
      dataIndex: 'id',
      key: 'id',
      render: (id: string, row: TicketsItem) => {
        return <div style={{textAlign: 'center'}}>
          <Button size="small" type="primary" className={styles.editButton}><FormOutlined /></Button>
          <p>{diffTime(row.updated_at)}</p>
        </div>
      }
    }
  ];

  const onSelectChange = (newSelectedRowKeys: React.Key[]) => {
    console.log('selectedRowKeys changed: ', newSelectedRowKeys);
    setSelectedRowKeys(newSelectedRowKeys as number[]);
  };

  const dataSource = useMemo(() => {
    return tickets.map(cur => {
      cur.key = cur.id
      return cur
    })
  }, [tickets])

  const clearSelected = () => {
    setSelectedRowKeys([])
  }

  if (!isClient || loading) {
    return <Spin />
  }
  
  return (
    <Panel title="Message List" extra={<ExtraOperation clearSelected={clearSelected} selectedKeys={selectedRowKeys} onRefresh={() => init()} />}>
      <Table 
        className={styles.table}
        rowSelection={{
          type: 'checkbox',
          // getCheckboxProps: (record: TicketsItem) => {
          //   console.log("record:", record)
          //   return {
          //     name: record.id as any,
          //   }
          // },
          onChange: onSelectChange
        }}
        dataSource={dataSource}
        columns={columns}
      />
    </Panel>
  )
})

export default MessageListPanel