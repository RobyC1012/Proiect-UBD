import { useRouter } from "next/router"
import { useEffect, useState } from "react"
import axios from "axios"
import {
    Layout,
    From,
    Input,
    Select,
    Button,
    InputNumber,
    Form
} from "antd"
import { toast } from "react-toastify"
import UserRoute from "../../components/routes/UserRoute"


const { Content } = Layout

const editspecialization = () => {
    const [spec, setSpec] = useState([])
    const [faculties, setFaculties] = useState([])

    const [specFaculty, setSpecFaculty] = useState("")
    const [specName, setSpecName] = useState("")
    const [specDesc, setSpecDesc] = useState("")
    const [specYears, setSpecYears] = useState("")


    const router = useRouter()

    useEffect(() => {
        loadSpecialization()
        loadFaculties()
    }, [])

    const loadSpecialization = async () => {
        const urlParams = new URLSearchParams(window.location.search);
        const id = urlParams.get('id');
        const { data } = await axios.get(`/api/getspecialization/${id}`)
        setSpec(data.specialization)
        setSpecName(data.specialization.name)
        setSpecDesc(data.specialization.description)
        setSpecYears(data.specialization.years)
        if (spec.faculty) {
            setSpecFaculty(spec.faculty.name)
        }
        else
        {
            setSpecFaculty("No faculty")
        }

    }

    const loadFaculties = async () => {
        try {
            const { data } = await axios.get(`/api/getfaculties`)
            setFaculties(data.faculty)
        } catch (err) {
            console.log(err)
            toast('Error loading faculties. Try again.')
        }
    }

    const handleSubmit = async () => {
        try {
            const urlParams = new URLSearchParams(window.location.search);
            const id = urlParams.get('id');
            const { data } = await axios.put(`/api/editspecialization/${id}`, {
                name: specName,
                description: specDesc,
                years: specYears,
                faculty: specFaculty
            })
            if (data.ok) {
                toast("Specialization edited")
                router.back()
            }
        } catch (err) {
            console.log(err)
            toast("Error editing specialization. Try again.")
        }
    }
    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Edit Specialization {specName}</h1>
                    </div>
                    <div style={{ borderRadius: "5px", padding: 24, minHeight: 360, backgroundColor: "#FFFFFF" }}>
                        <Form
                            name="basic"
                            labelCol={{ span: 15 }}
                            wrapperCol={{ span: 10 }}
                            //initialValues={{ remember: true }}
                            autoComplete="off"
                            layout="Horizontal"
                            labelAlign="left"
                        >
                            <Form.Item
                                label="Specialization Name"
                                name="spec name"
                                onChange={(e) => setSpecName(e.target.value)}

                            >
                                <Input placeholder={specName}/>
                            </Form.Item>

                            <Form.Item
                                label="Years"
                                name="years"
                                onChange={(e) => setSpecYears(e.target.value)}
                            >
                                <InputNumber placeholder={specYears} />
                            </Form.Item>

                            <Form.Item
                                label="Specialization Description"
                                name="spec description"
                                value={specDesc}
                                onChange={(e) => setSpecDesc(e.target.value)}
                            >
                                <Input placeholder={specDesc} />
                            </Form.Item>

                            <Form.Item
                                label="Faculty"
                                name="faculty"
                            >
                                <Select
                                    showSearch
                                    style={{ width: 200 }}
                                    placeholder={specFaculty}
                                    optionFilterProp="children"
                                    filterOption={(input, option) =>
                                        option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                                    }
                                    onChange={(e) => setSpecFaculty(e)}
                                    value={specFaculty}
                                >
                                    {faculties.map((f) => (
                                        <Select.Option value={f.name}>
                                            {f.name}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                            <Form.Item>
                                <Button type="primary" htmlType="submit"
                                    disabled={!specName || !specDesc || !specYears}
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

export default editspecialization