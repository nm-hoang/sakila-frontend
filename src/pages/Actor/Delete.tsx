import { Space, Form, Input, Button } from 'antd'
import { actor_delete } from '../../stores/actions';
import { useDispatch } from 'react-redux';
export function DeleteActor() {
    const dispatch = useDispatch()
    const onFinish = (e: any) => {
        dispatch(actor_delete(e.actor_id))
    }
    return (
        <div className="mt-2">
            <Space className="mt-2">
                <Button href="/actor-getlist">Get list</Button>
                <Button href="/actor-details">Get by ID</Button>
                <Button href="/actor-update">Update</Button>
                <Button href="/actor-insert">Insert</Button>
                <Button href="/actor-delete">Delete</Button>
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
                        label="Actor ID"
                        name="actor_id"
                        rules={[{ required: true, message: 'Please input your actor ID!' }]}
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
