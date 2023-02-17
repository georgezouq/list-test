import Panel from "../Panel"
import {Form, Input, Select, Button} from 'antd'
import {MailOutlined, DatabaseOutlined, StarOutlined, CalendarOutlined, BuildOutlined} from '@ant-design/icons'
import { useState } from "react"
import { useStore } from "@/store"

const {Option} = Select

const FilterPanel = () => {
  const [form] = Form.useForm()
  const {onSearchList} = useStore()
  const current = ''

  const handleSearch = () => {
    onSearchList(form.getFieldsValue())
  }

  const handleChange = () => {

  }

  return (
    <Panel title="Filter">
      <Form
        form={form}
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="propertyName">
          <Select
            placeholder="Property Name"
            onChange={handleChange}
            allowClear
          >
            <Option value="GR1">GR1</Option>
            <Option value="2M11">2M11</Option>
            <Option value="RCx">RCx</Option>
            <Option value="OIx">OIx</Option>
            <Option value="OD1">OD1</Option>
            <Option value="HW1">HW1</Option>
          </Select>
        </Form.Item>
        <Form.Item name="propertyTag">
          <Select
            placeholder="Property Tag"
            onChange={handleChange}
            allowClear
            mode="multiple"
          >
            <Option value="tag1">tag1</Option>
            <Option value="tag2">tag2</Option>
            <Option value="tag3">tag3</Option>
          </Select>
        </Form.Item>
        <Form.Item
          name="confirmNumber"
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          <Input placeholder="Confirm number" />
        </Form.Item>
        <Form.Item>
          <Button style={{marginTop: '20px'}} type="primary" htmlType="submit" block onClick={handleSearch}>
            Search
          </Button>
        </Form.Item>
      </Form>
    </Panel>
  )
}

export default FilterPanel