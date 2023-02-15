import { Modal, Form, Input } from 'antd'

interface IProps {
  isOpen: boolean;
  onClose: () => void;
}

const MessageTemplate = ({isOpen, onClose}: IProps) => {
  
  const handleFinish = () => {

  }

  return (
    <Modal title="Basic Modal" open={isOpen} onOk={onClose} onCancel={onClose}>
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{ remember: true }}
        onFinish={handleFinish}
      >
        <Form.Item
          name="title"
          rules={[{ required: true, message: 'Please input title!' }]}
        >
          <Input placeholder="Title" />
        </Form.Item>
        <Form.Item
          name="message"
          rules={[{ required: true, message: 'Please input message!' }]}
        >
          <Input.TextArea placeholder="Message" />
        </Form.Item>
      </Form>
    </Modal>
  )
}

export default MessageTemplate