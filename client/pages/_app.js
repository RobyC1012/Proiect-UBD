import '../public/css/style.css';
import "bootstrap/dist/css/bootstrap.min.css";
import "antd/dist/antd.css";
import "../public/css/style.css";
import "react-toastify/dist/ReactToastify.css";
import { Provider } from "../context";

function MyApp({ Component, pageProps })
{
    return(
        <Provider>
            <Component {...pageProps} />
        </Provider>
    );
}

export default MyApp;