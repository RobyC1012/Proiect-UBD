import { useState, useEffect, useContext } from 'react';
import Link from 'next/link';
import { Menu } from "antd";
import { AppstoreOutlined } from "@ant-design/icons";
import { Context } from "../context";
import { useRouter } from "next/router"
import axios from "axios";
import { toast } from "react-toastify";

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
        <Menu mode="horizontal" theme="dark" selectedKeys={[current]}>
            <Item 
                key="/"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}
            >
                <Link href="/">
                    <a>Home</a>
                </Link>
            </Item>
            <Item
                key="/home"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}
            >
                <Link href="/home">
                    <a>Home</a>
                </Link>
            </Item>
            { user === null && (
                <>
            <Item
                key="/login"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}
            >
                <Link href="/login">
                    <a>Login</a>
                </Link>
            </Item>
            <Item
                key="/register" 
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}
            >
                <Link href="/register">
                    <a>Register</a>
                </Link>
            </Item>
            </>
            )}
            { user !== null && (
                <>
            <Item
                key="/user"
                onClick={(e) => setCurrent(e.key)}
                icon={<AppstoreOutlined/>}
            >
                <Link href="/user">
                    <a>Dashboard</a>
                </Link>
            </Item>
            <Item
                key="/logout"
                onClick={(e) => {
                    setCurrent(e.key);
                    logout();
                }}
                icon={<AppstoreOutlined/>}
            >
                <a>Logout</a>
            </Item>
            </>
            )}

        </Menu>
    );
};

export default TopNav;