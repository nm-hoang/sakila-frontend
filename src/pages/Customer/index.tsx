import { Tag, Table, Skeleton, Space, Button } from 'antd'
import FormatDate from '../../helpers/formatDate';
import { customer_getlist } from '../../stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../stores";
const { Column } = Table;
export function Customer() {
    const dispatch = useDispatch()
    const customer_list = useSelector((state: AppState) => state.customer.list_data)
    const handleClick = () => {
        dispatch(customer_getlist())
    }
    return (
        <div className="mt-2">
            <div style={{ marginBottom: "5%" }}>
                <Space className="mt-2" >
                    <Button href="/customer-getlist">Get list</Button>
                    <Button href="/customer-details">Get by ID</Button>
                    <Button href="/customer-update">Update</Button>
                    <Button href="/customer-insert">Insert</Button>
                    <Button href="/customer-delete">Delete</Button>
                </Space>
            </div>
            <Button onClick={handleClick} > Show list customers</Button><br />
            <Space className="align-items-center">
                {/* //table data */}
                <div className="container mt-4 mb-5 border border-2 rounded p-4 bg-white shadow-sm" >
                    <Table dataSource={customer_list}
                        scroll={{ x: 1000 }}
                        locale={{
                            emptyText: customer_list ? <Skeleton /> : ""
                        }}
                    >
                        <Column title="Customer ID" dataIndex="customer_id" key="customer_id"
                            render={(text, record: any) => (
                                <>{record.customer_id}</>
                            )} />
                        <Column title="Store ID" dataIndex="store_id" key="store_id"
                            render={(text, record: any) => (
                                <>{record.store_id}</>
                            )} />
                        <Column title="First name" dataIndex="first_name" key="first_name" render={(text, record: any) => (
                            <> {record.first_name}</>
                        )} />
                        <Column title="Last name" dataIndex="last_name" key="last_name" render={(text, record: any) => (
                            <>{record.last_name}</>
                        )}

                        />
                        <Column title="Email" dataIndex="email" key="email" render={(text, record: any) => (
                            <>{record.email}</>
                        )}
                        />
                        <Column title="Address ID" dataIndex="address_id" key="address_id" render={(text, record: any) => (
                            <>{record.address_id}</>
                        )}
                        />
                        <Column title="Active" dataIndex="active" key="active" render={(text, record: any) => (
                            <>{record.active}</>
                        )}
                        />
                        <Column title="Last update" dataIndex="last_update" key="last_update"
                            render={(text, record: any) => (
                                <>
                                    {record.last_update ? <FormatDate date={record.last_update} /> : ""}
                                </>
                            )}
                        />
                    </Table>
                </div>
            </Space>
        </div>
    );
}
