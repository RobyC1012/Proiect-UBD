import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Dropdown, Menu} from "antd";
import { UserOutlined } from "@ant-design/icons";
import { Context } from "../context";
import { useRouter } from "next/router"
import axios from "axios";
import { toast } from "react-toastify";
import { Header } from 'antd/lib/layout/layout';
import SizeContext from 'antd/lib/config-provider/SizeContext';

const { Item, Submenu } = Menu;

const TopNav = () => {
    const [current, setCurrent] = useState("");
    
    const { state, dispatch } = useContext(Context);
    const { user } = state;

    const router = useRouter();


    /*useEffect(() => {
        process.browser && setCurrent(window.location.pathname);
    }, [process.browser && window.location.pathname]);*/
  
    const logout = async () => {
        const { data } = await axios.get("/api/logout");
        window.localStorage.removeItem("user");
        dispatch({
            type: "LOGOUT",
            payload: null,
        });
        toast(data.message);
        router.push("/");
    }

    
    return (
        <Header>
            <span className="header-home"> Online Grading System </span>
            {user ? (
            <>
            <Dropdown overlay={ 
                <Menu>
                    <Menu.Item key="0">
                        <a href="/dashboard">Dashboard</a>
                    </Menu.Item>
                    <Menu.Item key="2" onClick={logout}>Logout</Menu.Item>
                </Menu>
            } trigger={['click']}>
                <a className="dropdown" onClick={e => e.preventDefault()}>
                    <UserOutlined style={{fontSize: '20px', color:'#A2ACBD'}} />
                </a>
            </Dropdown>
            </>
            ) : (
                <>
                <Dropdown overlay={ 
                    <Menu>
                        <Menu.Item key="0">
                            <a href="/login">Login</a>
                        </Menu.Item>
                    </Menu>
                } trigger={['click']}>
                    <a className="dropdown" onClick={e => e.preventDefault()}>
                        <UserOutlined style={{fontSize: '20px', color:'#A2ACBD'}} />
                    </a>
                </Dropdown>
                </>
            )}


        </Header>
    );
};

export default TopNav;