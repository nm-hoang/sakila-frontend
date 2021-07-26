import { Tag, Table, Skeleton, Space, Button } from 'antd'
import { useState } from 'react';
import FormatDate from '../../helpers/formatDate';
import './index.css'
import { actor_getlist } from '../../stores/actions';
import { useDispatch, useSelector } from 'react-redux';

const { Column } = Table;
export function Actor() {
    const dispatch = useDispatch()
    const [data, setData] = useState<Array<any>>([])
    const handleClick = () => {
        
    }
    return (
        <div className="mt-2">
                <Tag color="green">
                    <h5 style={{ color: "#389e0d" }}>Actor</h5>
                </Tag><br/>
                <Space className="mt-2">
                <Button className="btn-selected" onClick={handleClick}>Get list</Button>
                <Button href="/actor/detail">Get by ID</Button>
                <Button href="/actor/update">Update</Button>
                <Button href="/actor/insert">Insert</Button>
                <Button href="/actor/delete">Delete</Button>
                </Space>
            <Space className="align-items-center">

                {/* //table data */}
                <div className="container mt-4 border border-2 rounded p-4 bg-white shadow-sm" >
                    <Table dataSource={data}
                        scroll={{ x: 1000 }}
                        locale={{
                            emptyText: data ? <Skeleton /> : ""
                        }}
                    >
                        <Column title="ID" dataIndex="actor_id" key="actor_id"
                            render={(text, record: any) => (
                                <>{record.actor_id}</>
                            )} />
                        <Column title="First name" dataIndex="first_name" key="first_name" render={(text, record: any) => (
                            <> {record.first_name}</>
                        )} />
                        <Column title="Last name" dataIndex="last_name" key="last_name" render={(text, record: any) => (
                            <>{record.last_name}</>
                        )}
                        />
                        <Column title="Last update" dataIndex="assign" key="assign"
                            render={(text, record: any) => (
                                <>
                                    {record.AssignDate ? <FormatDate date={record.AssignDate} /> : ""}
                                </>
                            )}
                        />
                    </Table>
                </div>
            </Space>
        </div>
    );
}
