import UserRoute from "../../components/routes/UserRoute"
import {
    Layout,
    Form,
    Input,
    Button,
    Select,
    InputNumber
} from "antd"
import { useEffect, useState } from "react"
import axios from "axios"
import { toast } from "react-toastify"
import { useRouter } from "next/router" 

const { Content } = Layout

const addSpecialization = () => {
    let [faculty, setFaculty] = useState([])
    const [specName, setSpecName] = useState("")
    const [specDesc, setSpecDesc] = useState("")
    const [specYears, setSpecYears] = useState("")
    const [specFaculty, setSpecFaculty] = useState("")

    const router = useRouter()

    const getfaculties = async () => {
        const { data } = await axios.get(`/api/getfaculties`)
        setFaculty(data.faculty)
    }

    useEffect(() => {
        getfaculties()
    }, [])

    const handleSubmit = async () => {
        try {
            const { data } = await axios.post(`/api/addspecialization`, {
                name: specName,
                description: specDesc,
                years: specYears,
                faculty: specFaculty
            })
            toast(data.ok)
            if (data.ok) {
                toast("Specialization added")
                router.back()
            }
            else
            {
                toast("Error adding specialization. Try again.")
            }
        } catch (err) {
            console.log(err)
            toast("Error adding specialization. Try again.")
        }
    }


    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Add Specialization</h1>
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
                                label="Specialization Name"
                                name="spec name"
                                value={specName}
                                onChange={(e) => setSpecName(e.target.value)}
                                rules={[{ required: true, message: "Please input specialization name!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Years"
                                name="years"
                                value={specYears}
                                onChange={(e) => setSpecYears(e.target.value)}
                                rules={[{ required: true, message: "Please input years!" }]}
                            >
                                <InputNumber />
                            </Form.Item>
                            <Form.Item
                                label="Description"
                                name="description"
                                value={specDesc}
                                onChange={(e) => setSpecDesc(e.target.value)}
                                rules={[{ required: true, message: "Please input description!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Faculty"
                                name="faculty"
                                rules={[{ required: true, message: "Please input faculty!" }]}
                            >
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder="Select a faculty"
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    onChange={(e) => setSpecFaculty(e)}
                                    value={specFaculty}
                                >
                                    {faculty.map((f) => (
                                        <Select.Option value={f.name}>
                                            {f.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item>
                                <Button type="primary" htmlType="submit" disabled={!specName || !specDesc || !specYears || !specFaculty}
                                    onClick={handleSubmit}>
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

export default addSpecialization