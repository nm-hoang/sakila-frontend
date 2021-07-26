import { Tag, Table, Skeleton, Space, Button } from 'antd'
import FormatDate from '../../helpers/formatDate';
import { actor_getlist } from '../../stores/actions';
import { useDispatch, useSelector } from 'react-redux';
import { AppState } from "../../stores";
const { Column } = Table;
export function Actor() {
    const dispatch = useDispatch()
    const actor_list = useSelector((state: AppState) => state.actor.list_data)
    const handleClick = () => {
        dispatch(actor_getlist())
    }
    return (
        <div className="mt-2">
            <div style={{marginBottom:"5%"}}>
            <Space className="mt-2" >
                <Button href="/actor-getlist">Get list</Button>
                <Button href="/actor-details">Get by ID</Button>
                <Button href="/actor-update">Update</Button>
                <Button href="/actor-insert">Insert</Button>
                <Button href="/actor-delete">Delete</Button>
            </Space>
            </div>
            <Button onClick={handleClick} > Show list actors</Button><br/>
            <Space className="align-items-center">
                {/* //table data */}
                <div className="container mt-4 mb-5 border border-2 rounded p-4 bg-white shadow-sm" >
                    <Table dataSource={actor_list}
                        scroll={{ x: 1000 }}
                        locale={{
                            emptyText: actor_list ? <Skeleton /> : ""
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
