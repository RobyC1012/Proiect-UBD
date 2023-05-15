import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import axios from "axios"
import { useRouter } from "next/router"
import Link from "next/link"
import TopNav from "../TopNav"
import { Layout, Menu, DropDown } from "antd"
import { SyncOutlined, LineChartOutlined, PieChartOutlined, SettingOutlined, AppstoreOutlined, HistoryOutlined, UserOutlined } from "@ant-design/icons";
import { Context } from "../../context"
import { useContext } from "react"
import { LoginOutlined, CoffeeOutlined } from "@ant-design/icons"
import { toast } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import router from "next/router"
import SubMenu from "antd/lib/menu/SubMenu"

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
    if (!collapsed) {
      setCollapsed(true);
    } else {
      setCollapsed(false);
    }
  };


  useEffect(() => {
    fetchUser();
    const { pathname } = window.location;
    const menu = pathname.split("/")[1];
    setCurrent(menu);
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
      <TopNav />
      <Layout>
        <Sider collapsible collapsed={!collapsed} onCollapse={onCollapse}>
          <Menu theme="dark" selectedKeys={[current]} mode="inline" style={{ margin: '-4px 0px' }}>
            <Menu.Item key="dashboard" icon={<LineChartOutlined />}>
              <Link href="/dashboard">
                <a>Dashboard</a>
              </Link>
            </Menu.Item>
            {/* <Menu.Item key="cashflow" icon={<PieChartOutlined />}>
              <Link href="/user/cashflow">
                <a>Cashflow</a>
              </Link>
            </Menu.Item>
            <Menu.Item key="history" icon={<HistoryOutlined />}>
              <Link href="/user/history">
                <a>History</a>
              </Link>
            </Menu.Item> */}
            <SubMenu key="submenu" icon={<SettingOutlined />} title={
              <span>
                <span>Administration</span>
              </span>
            }>
              <Menu.Item key="administration" icon={<SettingOutlined />}>
                <Link href="/administration">
                  <a>Admin Panel</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="specializations" icon={<LoginOutlined />}>
                <Link href="/specializations">
                  <a>Specializations</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="courses" icon={<LoginOutlined />}>
                <Link href="/courses">
                  <a>Courses</a>
                </Link>
              </Menu.Item>
              <Menu.Item key="teacher" icon={<LoginOutlined />}>
                <Link href="/teacher">
                  <a>Teachers</a>
                </Link>
              </Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Created by <a href="https://github.com/RobyC1012">Robert</a></Footer>
        </Layout>
      </Layout>
    </Layout>
  );
};

export default UserRoute;
