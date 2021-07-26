import { Card, Skeleton, Space, Form, Input, Button } from 'antd'
import { customer_getbyid } from '../../stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../stores";
export function DetailCustomer() {
    const dispatch = useDispatch()
    const customer = useSelector((state: AppState) => state.customer.obj_data)
    const onFinish = (e: any) => {
        dispatch(customer_getbyid(e.customer_id))
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
                            Submit
                        </Button>
                    </div>
                    {
                        customer ?
                            <Card className="mt-3 border shadow-sm rounded" title="Customer" style={{ width: 400 }}>
                                <span className="fw-bold">Customer ID: </span>
                                {customer.customer_id ? <>{customer.customer_id}</> : ""}
                                <br />
                                <span className="fw-bold">Store ID: </span>
                                {customer.store_id ? <>{customer.store_id}</> : ""}
                                <br />
                                <span className="fw-bold">First name: </span>
                                {customer.first_name ? <>{customer.first_name}</> : ""}
                                <br />
                                <span className="fw-bold">Last name: </span>
                                {customer.last_name ? <>{customer.last_name}</> : ""}
                                <br />
                                <span className="fw-bold">Email: </span>
                                {customer.email ? <>{customer.email}</> : ""}
                                <br />
                                <span className="fw-bold">Address ID: </span>
                                {customer.address_id ? <>{customer.address_id}</> : ""}
                                <br />
                                <span className="fw-bold">Active: </span>
                                {customer.active ? <>{customer.active}</> : ""}
                                <br />
                            </Card>
                            : <Skeleton />}
                </Form>
            </div>


        </div>
    );
}
