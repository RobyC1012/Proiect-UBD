import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import UserRoute from "../../components/routes/UserRoute"
import { Layout } from 'antd'
import axios from 'axios'

const { Content } = Layout

const TeacherIndex = () => {
    const [ok, setOk] = useState(false)
    const router = useRouter()



    return (
        <Layout>
            <UserRoute>
                <Content style={{ margin: "0 16px" }}>
                    <div className="site-layout-background" style={{ padding: 10 }}>
                        <h1>Teachers Panel</h1>
                    </div>
                </Content>
            </UserRoute>
        </Layout>
    )
}

export default TeacherIndex