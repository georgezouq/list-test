import Panel from "../Panel"
import {Form, Input, Select, Button} from 'antd'
import {MailOutlined, DatabaseOutlined, StarOutlined, CalendarOutlined, BuildOutlined} from '@ant-design/icons'

const {Option} = Select

const FilterPanel = () => {
  const current = ''

  const handleClick = () => {

  }

  const handleChange = () => {

  }

  return (
    <Panel title="Filter">
      <Form
        style={{ maxWidth: 600 }}
      >
        <Form.Item name="propertyName">
          <Select
            placeholder="Property Name"
            onChange={handleChange}
            allowClear
          >
            <Option value="male">male</Option>
            <Option value="female">female</Option>
            <Option value="other">other</Option>
          </Select>
        </Form.Item>
        <Form.Item name="gender">
          <Input placeholder="Property Tags" />
        </Form.Item>
        <Form.Item
          noStyle
          shouldUpdate={(prevValues, currentValues) => prevValues.gender !== currentValues.gender}
        >
          <Input placeholder="Confirm number" />
        </Form.Item>
        <Form.Item>
          <Button style={{marginTop: '20px'}} type="primary" htmlType="submit" block>
            Search
          </Button>
        </Form.Item>
      </Form>
    </Panel>
  )
}

export default FilterPanel