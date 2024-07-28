import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"


const { Header, Footer, Content } = Layout



const Dashboard = () => {
    let [users, setUsers] = useState([]);

    const router = useRouter()

    //fetch data
    useEffect(() => {
        fetchUsers()
    }, []);

    const fetchUsers = async () => {
        const { data } = await axios.get("/api/getusers")
        setUsers(data.users)
    }

    const manage = (id) => {
        router.push(`/administration/manage-user?id=${id}`)
    }

    const remove = async (id) => {
        try {
            if (window.confirm("Are you sure you want to delete this user?")) {
                const { data } = await axios.delete(`/api/remove-user/${id}`)
                toast("User deleted succesfully")
                fetchUsers()
            }
        }
        catch (err) {
            console.log(err)
            toast("Error deleting user. Try again.")
        }
    }


    return (
        <Layout style={{ minHeight: '100vh' }}>
            <UserRoute>
                <Content style={{ margin: '0px 16px 0', overflow: 'initial' }}>
                    <div style={{ padding: 24, background: '#fff', textAlign: 'center' }}>
                        <h1>Admin Dashboard</h1>
                    </div>

                    {/* List of all users */}
                    <Table dataSource={users} bordered pagination={{ pageSize: 10 }} scroll={{ x: 100 }}>
                        <Table.Column title="Fisrt Name" dataIndex="name" key="name" />
                        <Table.Column title="Last Name" dataIndex="lastName" key="lastName" />
                        <Table.Column title="Email" dataIndex="email" key="email" />
                        <Table.Column title="Role" dataIndex="role" key="role" />
                        <Table.Column title="Joined" dataIndex="createdAt" key="createdAt" />
                        <Table.Column title="Updated" dataIndex="updatedAt" key="updatedAt" />
                        <Table.Column title="Action" key="action" render={(text, record) => (
                            <span style={{ color: '#0057D9', fontWeight: '500' }}>
                                <a style={{ marginLeft: 10 }} onClick={() => manage(record._id)}>Edit</a>
                                <a style={{ marginLeft: 10 }} onClick={() => remove(record._id)}>Remove</a>
                            </span>
                        )} />
                    </Table>

                </Content>
            </UserRoute>
        </Layout>
    )
}

export default Dashboard