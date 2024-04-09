import App from "../components/App"
import ErrorPage from "./ErrorPage"
import FormDisplay from "../components/FormDisplay";
import About from "./About";

const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
             {
                path: "/form",
                element: <FormDisplay />
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
];

export default routes;