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
     
    <Layout>
      <Sider collapsible collapsed={collapsed} onCollapse={onCollapse}>
        <Menu theme="dark" defaultSelectedKeys={["1"]} mode="inline">
          <Menu.Item key="1" icon={<LineChartOutlined />}>
            <Link href="/user">
              <a>Dashboard</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="2" icon={<PieChartOutlined />}>
            <Link href="/user/cashflow">
              <a>Cashflow</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="3" icon={<HistoryOutlined />}>
            <Link href="/user/history">
              <a>History</a>
            </Link>
          </Menu.Item>
          <Menu.Item key="4" icon={<SettingOutlined />}>
            <Link href="/user/settings">
              <a>Settings</a>
            </Link>
          </Menu.Item>
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Content style={{ margin: '0 16px' }}>
          <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
            {children}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>Created by <a href="">Robert</a></Footer>
    </Layout>
    </Layout>
    </Layout>
  );
};

export default UserRoute;
