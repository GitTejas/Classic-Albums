import App from "../components/App"
import AlbumForm from "../components/AlbumForm"
import ErrorPage from "./ErrorPage"


const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
             {
                path: "/albumform",
                element: <AlbumForm />
            }
        ]
    }
];

export default routes;