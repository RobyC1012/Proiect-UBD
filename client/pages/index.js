import { useRouter } from "next/router"
import { useContext, useEffect } from "react";
import { Context } from "../context";
import TopNav from "../components/TopNav";
import { Layout } from "antd";

const { Header, Footer, Content} = Layout;

const Index = () => {
    const router = useRouter()

    return (
        <Layout style={ { minHeight: '100vh'}}>
            <Header style={{ padding: '0px'}}>
                <TopNav />
                <div className="main-page">
                    <div className = "main-text">
                        <h1> Online Grading System </h1>
                        <p> See your courses and grades online </p> 
                        <button className = "btn btn-block btn-primary" onClick={() => router.push("/login")}> Login Here</button>
                    </div>
                    <div className = "main-div">
                        <img src="/img/main-page-img.svg" className = "main-bg" />
                    </div>
                </div>
            </Header>
        </Layout>
    )
}

export default Index;