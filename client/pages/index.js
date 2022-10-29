import { Layout } from "antd";
import Password from "antd/lib/input/Password";
const { Content } = Layout;

const Index = () => {
    return (
        <Content style={{ padding: '0 0px' }}>
            <div className="login-form">
                <h1> Login </h1>
                <hr></hr>
                <div>
                    <form>
                        <div className="input-group">
                            <input
                            type="email"
                            id="email"
                            required className="input"
                            

                            />
                            <label htmlFor="email" className="input-label">Email address</label>
                        </div>

                        <div className="input-group">
                            <input
                            type="password"
                            id="password"
                            required className="input"
                            

                            />
                            <label htmlFor="password" className="input-label">Password</label>
                        </div>
                        <div className="forgot-password loginf">
                            <a href="#">Forgot password?</a>
                        </div>
                        <button type="submit" className="btn btn-primary">Submit</button>
                    </form>
                </div>
            </div>
        </Content>
    )
};
export default Index;