import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home/Home";
import SearchList from "../Pages/SearchList/SearchList";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {path: "", element: <Home />},
            {path: "search", element: <SearchList />}
        ]
    }
])