import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const { Content } = Layout



const editfaculty = () => {

    const [faculties, setFaculties] = useState([])

    const router = useRouter();

    useEffect(() => {
        loadFaculties()
    }, [])



    const loadFaculties = async () => {
        try {
            const { data } = await axios.get('/api/getfaculties')
            setFaculties(data.faculty)
        } catch (err) {
            console.log(err)
            toast('Error loading faculties. Try again.')
        }
    }

    const manage = (id) => {
        router.push(`/specializations/edit-faculty/${id}`)
    }

    const remove = async (id) => {
        if (window.confirm('Are you sure you want to delete this faculty?\nAlso, all the specializations and courses under this faculty will be deleted.')) {
            try {
                await axios.delete(`/api/deletefaculty/${id}`)
                toast("Faculty deleted")
                loadFaculties()
            } catch (err) {
                console.log(err)
                toast('Error deleting faculty. Try again.')
            }
        }

    }

    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Faculties</h1>
                    </div>
                    <Table dataSource={faculties} bordered pagination={{ pageSize: 10 }}>
                        <Table.Column title="Name" dataIndex="name" key="name" />
                        <Table.Column title="Description" dataIndex="description" key="descriptiom" />
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

export default editfaculty