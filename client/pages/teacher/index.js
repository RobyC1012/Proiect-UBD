import { useEffect, useState, useMemo, useRef } from 'react'
import { useRouter } from 'next/router'
import UserRoute from "../../components/routes/UserRoute"
import {
    Layout,
    Form,
    Table,
    Input,
    Button,
    Select,
    InputNumber,
    Checkbox,
    Spin

} from 'antd'
import axios from 'axios'
import { toast } from 'react-toastify'

const { Content } = Layout



const TeacherIndex = () => {
    const [students, setStudents] = useState([])
    const [options, setOptions] = useState([])
    const [coptions, setCOptions] = useState([])
    const [courses, setCourses] = useState([])

    const [gstud, setGStud] = useState([])
    const [gcourse, setGCourse] = useState([])
    const [ggrade, setGGrade] = useState([])

    const router = useRouter()

    useEffect(() => {
        fetcStudents()
    }, [])

    const fetcStudents = async () => {
        await axios.all([
            axios.get("/api/getstudents"),
            axios.get("/api/getcourses"),
        ])
            .then(axios.spread((students, courses) => {
                setStudents(students.data.students)
                setCourses(courses.data.courses)
            }))
            .catch(err => {
                console.log(err)
            })
    }

    const handleSubmit = async (values) => {
        console.log(values)
        try {
            const { data } = await axios.post("/api/enrollstudents",{
                studID: options,
                courseID: coptions,
            })
            console.log(data)
            toast("Students assigned to course succesfuly")
            router.back()
        } catch (err) {
            console.log(err)
            toast("Error enrolling students. Try again.")
        }
    }

    const handleGrade = async (values) => {
        console.log(values)
        try {
            const { data } = await axios.post("/api/addgrade",{
                studID: gstud,
                courseID: gcourse,
                grade: ggrade,
            })
            console.log(data)
            toast("Students graded succesfuly")
            router.back()
        } catch (err) {
            console.log(err)
            toast("Error enrolling students. Try again.")
        }
    }

return (
    <Layout>
        <UserRoute>
            <Content style={{ margin: "0 16px" }}>
                <div className="site-layout-background" style={{ padding: 10 }}>
                    <h1>Teachers Panel</h1>
                </div>
                {/* Enroll students to courses panel */}
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
                            label="Students Email"
                            name="studentsEmail"
                            rules={[{ required: true, message: 'Please input students email!' }]}
                        >
                            <Select
                                mode="multiple"

                                style={{ width: '80%' }}
                                placeholder="Please select students"
                                optionFilterProp="children"
                                allowClear
                                maxTagPlaceholder={1}
                                onChange={(e) => setOptions(e)}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    students.map((student) => (
                                        <Select.Option key={student._id} value={student._id}>
                                            {student.email}
                                        </Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Course"
                            name="course"
                            rules={[{ required: true, message: 'Please input course!' }]}
                        >
                            <Select
                                style={{ width: '80%' }}
                                placeholder="Please select course"
                                optionFilterProp="children"
                                allowClear
                                onChange={(e) => setCOptions(e)}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    courses.map((course) => (
                                        <Select.Option key={course._id} value={course._id}>
                                            {course.name}
                                        </Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="submit" 
                            onClick={handleSubmit}
                            >
                                Enroll
                            </Button>
                        </Form.Item>
                    </Form>

                    <div>
                        <h1>Give Grade</h1>
                    </div>
                    <Form>
                        <Form.Item
                            label="Student Email"
                            name="studentEmail"
                            rules={[{ required: true, message: 'Please input student email!' }]}
                        >
                            <Select
                                style={{ width: '80%' }}
                                placeholder="Please select student"
                                optionFilterProp="children"
                                allowClear
                                onChange={(e) => setGStud(e)}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    students.map((student) => (
                                        <Select.Option key={student._id} value={student._id}>
                                            {student.email}
                                        </Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Course"
                            name="course"
                            rules={[{ required: true, message: 'Please input course!' }]}
                        >
                            <Select
                                style={{ width: '80%' }}
                                placeholder="Please select course"
                                optionFilterProp="children"
                                allowClear
                                onChange={(e) => setGCourse(e)}
                                filterOption={(input, option) =>
                                    option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                }
                            >
                                {
                                    courses.map((course) => (
                                        <Select.Option key={course._id} value={course._id}>
                                            {course.name}
                                        </Select.Option>
                                    ))
                                }
                            </Select>
                        </Form.Item>
                        <Form.Item
                            label="Grade"
                            name="grade"
                            onChange={(e) => setGGrade(e.target.value)}
                            rules={[{ required: true, message: 'Please input grade!' }]}
                        >
                            <InputNumber />
                        </Form.Item>
                        <Form.Item
                        >
                            <Button type="primary" htmlType="grade"
                                onClick={handleGrade}
                            >
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </Content>
        </UserRoute>
    </Layout >
)
}

export default TeacherIndex