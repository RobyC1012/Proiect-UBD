import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const { Content } = Layout



const index = () => {

    const [specializations, setSpecializations] = useState([])
    const [loading, setLoading] = useState(false)

    const router = useRouter();

    useEffect(() => {
        loadSpecializations()
    }, [])



    const loadSpecializations = async () => {
        try {
            const { data } = await axios.get('/api/getspecializations')
            setSpecializations(data.specialization)
        } catch (err) {
            console.log(err)
            toast('Error loading specializations. Try again.')
        }
    }

    const manage = (id) => {
        router.push(`/specializations/edit-specialization?id=${id}`)
    }

    const remove = async (id) => {
        if (window.confirm('Are you sure you want to delete this specialization?')) {
            setLoading(true)
            try {
                const { data } = await axios.delete(`/api/deletespecialization/${id}`)
                toast(data.message)
                loadSpecializations()
            } catch (err) {
                console.log(err)
                toast('Error deleting specialization. Try again.')
            }
            setLoading(false)
        }
    }

    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Specializations</h1>
                    </div>
                    <div style={{ display: 'flex', gap: 10, float: 'right', marginBottom: 10 }}>
                        <button className="btn btn-primary" onClick={() => {
                            router.push('/specializations/add-specialization')
                        }}>Add Specialization</button>
                        <button className="btn btn-primary" onClick={() => {
                            router.push('/specializations/add-faculty')
                        }}>Add Faculty</button>
                        <button className="btn btn-primary" onClick={() => {
                            router.push('/specializations/edit-faculty')
                        }}>Edit Faculty</button>

                    </div>
                    <Table dataSource={specializations} bordered pagination={{ pageSize: 10 }}scroll={{x:100}}>
                        <Table.Column title="Name" dataIndex="name" key="name" />
                        <Table.Column title="Years" dataIndex="years" key="years" />
                        <Table.Column title="Description" dataIndex="description" key="description" />
                        <Table.Column title="Faculty" dataIndex="faculty" key="faculty" />
                        <Table.Column title="Action" key="action" render={(text, record) => (
                            <span style={{ color: '#0057D9', fontWeight: '500' }}>
                                <a style={{ marginLeft: 10 }} onClick={() => manage(record._id)}>Edit</a>
                                <a style={{ marginLeft: 10 }} onClick={() => remove(record._id)}>Delete</a>
                            </span>
                        )} />
                    </Table>
                </Content>
            </UserRoute>
        </Layout>
    )

}

export default index