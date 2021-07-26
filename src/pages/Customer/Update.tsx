import { Space, Form, Input, Button } from 'antd'
import { customer_update } from '../../stores/actions';
import { useDispatch } from 'react-redux';
export function UpdateCustomer() {
    const dispatch = useDispatch()
    const onFinish = (e: any) => {
        console.log(e)

        dispatch(customer_update(e.customer_id,
            {
                "store_id": e.store_id,
                "first_name": e.first_name,
                "last_name": e.last_name,
                "email": e.email,
                "address_id": e.address_id,
                "active": e.active
            }
        ))
    }
    return (
        <div className="mt-2">
            <Space className="mt-2">
                <Button href="/customer-getlist">Get list</Button>
                <Button href="/customer-details">Get by ID</Button>
                <Button href="/customer-update">Update</Button>
                <Button href="/customer-insert">Insert</Button>
                <Button href="/customer-delete">Delete</Button>
            </Space>

            <div
                className="container mt-5 rounded border shadow p-5">

                <Form
                    name="getbyId"
                    labelCol={{ span: 8 }}
                    wrapperCol={{ span: 8 }}
                    onFinish={onFinish}
                >
                    <Form.Item
                        label="Customer ID"
                        name="customer_id"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Store ID"
                        name="store_id"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="First name"
                        name="first_name"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    
                    <Form.Item
                        label="Last name"
                        name="last_name"
                        rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Email"
                        name="email"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Address ID"
                        name="address_id"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <Form.Item
                        label="Active (number)"
                        name="active"
                    rules={[{ required: true, message: 'Please input your first name!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className="text-center">
                        <Button type="primary" htmlType="submit">
                            Update
                        </Button>
                    </div>
                </Form>
            </div>


        </div>
    );
}
