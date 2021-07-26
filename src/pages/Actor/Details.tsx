import { Card, Skeleton, Space, Form, Input, Button } from 'antd'
import { actor_getbyid } from '../../stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../stores";
export function DetailActor() {
    const dispatch = useDispatch()
    const actor = useSelector((state: AppState) => state.actor.obj_data)
    const onFinish = (e: any) => {
        dispatch(actor_getbyid(e.actor_id))
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
                        Submit
                    </Button>
                    </div>
                    {
                        actor ?
                            <Card className="mt-3 border shadow-sm rounded" title="Actor"style={{ width: 400 }}>
                                <span className="fw-bold">Actor ID: </span>
                                {actor.actor_id ? <>{actor.actor_id}</> : ""}
                                <br />
                                <span className="fw-bold">First name: </span>
                                {actor.first_name ? <>{actor.first_name}</> : ""}
                                <br />
                                <span className="fw-bold">Last name: </span>
                                {actor.last_name ? <>{actor.last_name}</> : ""}
                                <br />
                            </Card>
                            : <Skeleton />}
                </Form>
            </div>


        </div>
    );
}
