import { createBrowserRouter } from "react-router-dom";
import App from "./App";

export const Mainrouter = createBrowserRouter([
    {
        path: '/',
        element: <App/>
    }
])