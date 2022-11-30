import { useRouter } from "next/router"
import { useContext, useEffect } from "react";
import { Context } from "../context";
import TopNav from "../components/TopNav";
import { Layout } from "antd";

const { Header, Footer, Content} = Layout;

const Index = () => {
    const router = useRouter()

    const {
        state: { user },
    } = useContext(Context);

    return (
        <Layout style={ { minHeight: '100vh'}}>
            <Header style={{ padding: '0px'}}>
                <TopNav />
            </Header>
        </Layout>
    )
}

export default Index;