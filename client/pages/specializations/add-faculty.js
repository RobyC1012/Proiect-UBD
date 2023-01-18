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

const addFaculty = () => {
    const [facName, setFacName] = useState("")
    const [facDesc, setFacDesc] = useState("")

    const router = useRouter()

    const handleSubmit = async (e) => {
        try {
            const { data } = await axios.post(`/api/addfaculty`, {
                name: facName,
                description: facDesc
            })
            toast("Faculty added")
            console.log(data)
            router.back()
        } catch (err) {
            console.log(err)
            toast("Error adding faculty. Try again.")
        }
    }

    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Add Faculty</h1>
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
                                label="Faculty Name"
                                name="faculty name"
                                value={facName}
                                onChange={(e) => setFacName(e.target.value)}
                                rules={[{ required: true, message: "Please input Faculty name!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                label="Faculty Description"
                                name="faculty description"
                                value={facDesc}
                                onChange={(e) => setFacDesc(e.target.value)}
                                rules={[{ required: true, message: "Please input Faculty description!" }]}
                            >
                                <Input />
                            </Form.Item>
                            <Button type="primary" htmlType="submit" onClick={() => {
                                handleSubmit()
                            }}
                                disabled={!facName || !facDesc}>
                                Submit
                            </Button>
                        </Form>
                    </div>
                </Content>
            </UserRoute>
        </Layout>
    )

}

export default addFaculty