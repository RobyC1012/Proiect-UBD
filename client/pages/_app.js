import '../public/css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";
import { ToastContainer } from "react-toastify";

function MyApp({ Component, pageProps })
{
    return(
        <Provider>
            <ToastContainer position='top-center' />
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;