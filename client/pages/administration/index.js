import UserRoute from "../../components/routes/UserRoute"
import { Layout , Table} from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"


const { Header, Footer, Content} = Layout



const Dashboard = () => {
    let [users, setUsers] = useState([]);

    //fetch data
    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        const { data } = await axios.get("/api/getusers")
        setUsers(data.users)
    }

    const manage = (id) => {
        window.location.href = `/administration/manage-user?id=${id}`
    }


    return(
        <Layout style={ { minHeight: '100vh'}}>
            <UserRoute>
                <Content style={{ margin: '0px 16px 0', overflow: 'initial'}}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center'}}>   
                        <h1>Admin Dashboard</h1>
                    </div>

                    {/* List of all users */}
                    <Table dataSource={users} bordered pagination={{pageSize: 10}}>
                        <Table.Column title="Name" dataIndex="name" key="name" />
                        <Table.Column title="Email" dataIndex="email" key="email" />
                        <Table.Column title="Role" dataIndex="role" key="role" />
                        <Table.Column title="Joined" dataIndex="createdAt" key="createdAt" />
                        <Table.Column title="Updated" dataIndex="updatedAt" key="updatedAt" />
                        <Table.Column title="Action" key="action" render={(text, record) => (
                            <span style={{ color: '#0057D9', fontWeight: '500'}}>
                                <a style={{ marginLeft: 10 }} onClick={() => manage(record._id)}>Edit</a>
                            </span>
                        )} />
                    </Table>

                </Content>
            </UserRoute>
        </Layout>
    )
}

export default Dashboard