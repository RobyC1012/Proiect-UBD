import { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/router";
import Link from "next/link";
import TopNav from "../TopNav";
import { Layout, Menu } from "antd";
import { SyncOutlined, LineChartOutlined, PieChartOutlined, SettingOutlined, AppstoreOutlined, HistoryOutlined } from "@ant-design/icons";
import { Context } from "../../context";
import { useContext } from "react";
import { LoginOutlined, CoffeeOutlined } from "@ant-design/icons";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import router from "next/router";

TopNav.logout = async () => {
  const { data } = await axios.get("/api/logout");
  toast(data.message);
  router.push("/login");
}

const { Content, Footer, Header, Sider } = Layout;

const UserRoute = ({ children }) => {
  // state
  const [ok, setOk] = useState(false);
  const [collapsed, setCollapsed] = useState(false);
  const [current, setCurrent] = useState("");
  

  const { state, dispatch } = useContext(Context);
  const { user } = state;

  // router
  const router = useRouter();

  const onCollapse = collapsed => {
    console.log(collapsed);
    if(collapsed){
      setCollapsed(true);
    }else{
      setCollapsed(false);
    }
  };


  useEffect(() => {
    fetchUser();
  }, []);

  

  const fetchUser = async () => {
    try {
      const { data } = await axios.get("/api/current-user");
      console.log(data);
      if (data.ok) setOk(true);
    } catch (err) {
      console.log(err);
      setOk(false);
      router.push("/login");
    }
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>  
    <Layout className="site-layout">
      {!ok ? (
        <SyncOutlined
          spin
          className="d-flex justify-content-center display-1 text-primary p-5"
        />
      ) : (
          <Content style={{ margin: '16px 16px' }}>  
              {children}
          </Content>
        )}     
    </Layout>  
  </Layout>
  );
};

export default UserRoute;
