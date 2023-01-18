import { useEffect, useState } from "react"
import { toast } from "react-toastify"
import UserRoute from "../../components/routes/UserRoute"
import { useRouter } from "next/router"
import axios from "axios"
import {
    Layout,
    Form,
    Input,
    Button,
    Select,
    InputNumber
} from "antd"

const { Content } = Layout

const addcourse = () => {
    const [spec, setSpec] = useState([])
    const [teacher, setTeacher] = useState([])
    const [courseName, setCourseName] = useState("")
    const [courseYear, setCourseYear] = useState("")
    const [courseSemester, setCourseSemester] = useState("")
    const [courseSpec, setCourseSpec] = useState("")
    const [courseTeacher, setCourseTeacher] = useState("")

    const router = useRouter()

    useEffect(() => {
        loadSpecializations()
        loadTeachers()
    }, [])

    const loadSpecializations = async () => {
        try {
            const { data } = await axios.get(`/api/getspecializations`)

            setSpec(data.specialization)
        } catch (err) {
            console.log(err)
            toast('Error loading specializations. Try again.')
        }
    }

    const loadTeachers = async () => {
        try {
            const { data } = await axios.get(`/api/getteachers`)
            setTeacher(data.teachers)
        } catch (err) {
            console.log(err)
            toast('Error loading teachers. Try again.')
        }
    }

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post(`/api/addcourse`, {
                name: courseName,
                year: courseYear,
                semester: courseSemester,
                specializationID: courseSpec,
                teacherID: courseTeacher
            })
            if (data.ok) {
                toast("Course added")
                router.back()
            }
        } catch (err) {
            console.log(err)
            toast("Error adding course. Try again.")
        }
    }

    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Add Course</h1>
                    </div>
                    <div style={{ borderRadius: "5px", padding: 24, minHeight: 360, backgroundColor: "#FFFFFF" }}>
                        <Form
                            name="basic"
                            labelCol={{ span: 15 }}
                            wrapperCol={{ span: 10 }}
                            initialValues={{ remember: true }}
                            autoComplete="off"
                            layout="Horizontal"
                            labelAlign="left"
                        >
                            <Form.Item
                                label="Course Name"
                                name="name"
                                onChange={(e) => setCourseName(e.target.value)}
                                rules={[{ required: true, message: "Please input course name!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Year"
                                name="year"
                                onChange={(e) => setCourseYear(e.target.value)}
                                rules={[{ required: true, message: "Please input year!" }]}
                            >
                                <InputNumber min='1' max='4' />
                            </Form.Item>
                            <Form.Item
                                label="Semester"
                                name="semester"
                                onChange={(e) => setCourseSemester(e.target.value)}
                                rules={[{required: true, message: "Please input semester!" }]}
                            >
                                <InputNumber min='1' max='2' />
                            </Form.Item>
                            <Form.Item
                                label="Specialization"
                                name="specialization"
                                rules={[{ required: true, message: "Please input specialization!" }]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select a specialization"
                                    optionFilterProp="children"
                                    onChange={(e) => setCourseSpec(e)}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {
                                        spec.map((s) => (
                                            <Select.Option value={s._id}>{s.name}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item
                                label="Teacher"
                                name="teacher"
                                rules={[{ required: true, message: "Please input teacher!" }]}
                            >
                                <Select
                                    showSearch
                                    placeholder="Select a teacher"
                                    optionFilterProp="children"
                                    onChange={(e) => setCourseTeacher(e)}
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                >
                                    {
                                        teacher.map((t) => (
                                            <Select.Option value={t._id}>{t.fullname}</Select.Option>
                                        ))
                                    }
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit"
                                disabled={!courseName || !courseYear || !courseSemester || !courseSpec || !courseTeacher}
                                onClick={handleSubmit}
                                >
                                    Submit
                                </Button>
                            </Form.Item>
                        </Form>
                    </div>
                </Content>
            </UserRoute>
        </Layout>
    )
}

export default addcourse