import UserRoute from "../components/routes/UserRoute";
import { useContext, useEffect} from "react";
import { Context } from "../context";
import { toast } from "react-toastify";
import axios from "axios";
import { useRouter } from "next/router";
import { Layout } from "antd";
import TopNav from "../components/TopNav";

const { Header, Footer, Content} = Layout;

const Home = () => {

    const router = useRouter();

    const {
        state: { user },
    } = useContext(Context);

    async function test(){
        toast(user.name);
    }

  
    return (
        <Layout style={ { minHeight: '100vh'}}>
            <Header style={{ padding: '0px'}}>
                <TopNav />
            </Header>
            <UserRoute>
                <Content style={{ margin: '24px 16px 0', overflow: 'initial'}}>
                    <div className="site-layout-background" style={{ padding: 24, textAlign: 'center' }}>
                        <h1>Home Page</h1>
                        <button onClick={test}>Test</button>
                    </div>
                </Content>
            </UserRoute>
        </Layout>
    );
}

export default Home;