import { useState, useContext, useEffect } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { Context } from "../context";
import { useRouter } from "next/router";
import { Layout } from "antd";
import { SyncOutlined } from "@ant-design/icons";


const { Content, Footer, Header, Sider } = Layout;


const Index = () => {
    const [email, setEmail] = useState("");
    const [name, setName] = useState("");
    const [lastName, setlastName] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    //state
    const {
        state: { user },
        dispatch
    } = useContext(Context);
    // router
    const router = useRouter();


    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            const { data } = await axios.post(`/api/register`, {
                name,
                lastName,
                email,
                password,
            });
            toast("Registration success. Please login.");
            setEmail("");
            setName("");
            setlastName("");
            setPassword("");
            setLoading(false);
            router.push("/");
        } catch (err) {
            toast(err.response.data);
            setLoading(false);
        }
    };

    return (
        <main className="loginf">
            <div className="login-form2">
                <h1> Register </h1>
                <hr></hr>
                <div>
                    <form onSubmit={handleSubmit}>
                        <div className="input-group">
                            <input
                                type="text"
                                id="name"
                                required className="input"
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                            />
                            <label htmlFor="name" className="input-label">First Name</label>
                        </div>
                        <div className="input-group">
                            <input
                                type="text"
                                id="lastName"
                                required className="input"
                                value={lastName}
                                onChange={(e) => setlastName(e.target.value)}
                            />
                            <label htmlFor="lastName" className="input-label">Last Name</label>
                        </div>
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
    );
};

export default Index;