import { Layout } from "antd";
import Password from "antd/lib/input/Password";
const { Content } = Layout;

const Index = () => {
    return (
        <Content style={{ padding: '0 50px' }}>
            <div className="container col-md-4 offset-md-4 pb-5">
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
                </form>
            </div>
        </Content>
    )
};
export default Index;