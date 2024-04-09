import App from "../components/App"
import ErrorPage from "./ErrorPage"
import FormDisplay from "../components/FormDisplay";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
             {
                path: "/form",
                element: <FormDisplay />
            }
        ]
    }
];

export default routes;