import UserRoute from "../../components/routes/UserRoute"
import { Layout, Table } from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router"

const { Content } = Layout



const index = () => {
    const [courses, setCourses] = useState([])

    const router = useRouter();

    useEffect(() => {
        loadCourses()
    }, [])



    const loadCourses = async () => {
        try {
            const { data } = await axios.get('/api/getcourses')
            setCourses(data.courses)
        } catch (err) {
            console.log(err)
            toast('Error loading courses. Try again.')
        }
    }

    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Courses</h1>
                    </div>
                    <div style={{ display: 'flex', gap: 10, float: 'right', marginBottom: 10 }}>
                        <button className="btn btn-primary" onClick={() => {
                            router.push('/courses/add-course')
                        }}>Add Course</button>

                    </div>
                    <Table dataSource={courses} bordered pagination={{ pageSize: 10 }} scroll={{x:100}}>
                        <Table.Column title="Name" dataIndex="name" key="name" />
                        <Table.Column title="Teacher" dataIndex="teacher" key="teacher" />
                        <Table.Column title="Semester" dataIndex="semester" key="semester" />
                        <Table.Column title="Year" dataIndex="year" key="year" />
                        <Table.Column title="Specialization" dataIndex="specialization" key="specialization" />
                        <Table.Column title="Faculty" dataIndex="faculty" key="faculty" />
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

export default index