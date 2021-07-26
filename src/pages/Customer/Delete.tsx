import { Space, Form, Input, Button } from 'antd'
import { customer_delete } from '../../stores/actions';
import { useDispatch } from 'react-redux';
export function DeleteCustomer() {
    const dispatch = useDispatch()
    const onFinish = (e: any) => {
        console.log(e)
        dispatch(customer_delete(e.customer_id))
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
                        rules={[{ required: true, message: 'Please input your customer ID!' }]}
                    >
                        <Input />
                    </Form.Item>
                    <div className="text-center">

                        <Button type="primary" htmlType="submit">
                            Delete
                        </Button>
                    </div>
                </Form>
            </div>


        </div>
    );
}
