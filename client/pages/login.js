import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Layout } from "antd";
import { SyncOutlined } from "@ant-design/icons";

const { Content, Footer, Header, Sider } = Layout;

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);


    //state
    const {
        state:{ user },
        dispatch
    } = useContext(Context);
    // router
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            toast("Logging in");
            const { data } = await axios.post(`/api/login`, {
            email,
            password,
            });
            // console.log("LOGIN RESPONSE", data);
            dispatch({
            type: "LOGIN",
            payload: data,
            });
            // save in local storage
            window.localStorage.setItem("user", JSON.stringify(data));
            // redirect
            router.push("/home");
            //setLoading(false);
        } catch (err) {
            toast(err.response.data);
            console.log(err.response.data);
            setLoading(false);
        }
    };
    return (
        <main className="loginf">
            <div className="login-form">
                <h1> Login </h1>
                <hr />
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                            type="email"
                            id="email"
                            required className="input"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            />
                            <label htmlFor="email" className="input-label">Email address</label>
                        </div>

                        <div className="input-group">
                            <input
                            type="password"
                            id="password"
                            required className="input"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            />
                            <label htmlFor="password" className="input-label">Password</label>
                        </div>
                        <div className="forgot-password loginfrm">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" 
                            className="btn btn-block btn-primary"
                            disabled={!email || !password || loading}>
                            {loading ? <SyncOutlined spin /> : "Submit"}
                        </button>
                    </form>
                </div>
            </div>
        </main>
    )
};
export default Login;