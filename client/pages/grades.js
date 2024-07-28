import axios from "axios"
import { useContext, useEffect, useState } from "react"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import { useRouter } from "next/router"
import { Layout, Table } from "antd"
import UserRoute from "../components/routes/UserRoute"


const { Content } = Layout

const grades = () => {
    const [courses, setCourses] = useState([])
    const [user, setUser] = useState([])
    const [grades, setGrades] = useState([])
    const router = useRouter()

    useEffect(() => {
        fetchCourses()
    }, [])

    const fetchCourses = async () => {
        const { data } = await axios.get("/api/current-user")
        setUser(data.user)
        const { data: grade } = await axios.get("/api/getgrades")
        setGrades(grade.gradeslist)
    }

    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Grades</h1>
                    </div>
                    <div style={{ padding: 24, background: "#fff", minHeight: 360 }}>
                        <Table dataSource={grades}>
                            <Table.Column title="Student" dataIndex="studentname" key="studentname" />
                            <Table.Column title="Course" dataIndex="coursename" key="coursename" />
                            <Table.Column title="Year" dataIndex="courseyear" key="courseyear" />
                            <Table.Column title="Semester" dataIndex="coursesemester" key="semester" />
                            <Table.Column title="Grade" dataIndex="grade" key="grade" />
                            <Table.Column title="Teacher" dataIndex="teachername" key="teachername" />
                            <Table.Column title="Action" key="action" render={(text, record) => (
                                <span style={{ color: '#0057D9', fontWeight: '500' }}>
                                    <a style={{ marginLeft: 10 }} onClick={() => manage(record._id)}>Edit</a>
                                    <a style={{ marginLeft: 10 }} onClick={() => remove(record._id)}>Remove</a>
                                </span>
                            )} />
                        </Table>
                    </div>
                </Content>
            </UserRoute>
        </Layout>

    )
}

export default grades

