import { createBrowserRouter, RouterProvider } from "react-router-dom";
import AppLayout from "./components/AppLayout";
import Home from "./pages/Home";
import OurPolicies from "./pages/OurPolicies";







// An array of Route objects with nested routes on the children property.
const router = createBrowserRouter([{
    element: <AppLayout/>,
    children: [
        { path: "/", element:<Home/>},
        {path: "/our-policies", element:<OurPolicies/>}
    ]
}]);
export default function App() {
    return (
        <div>
            <RouterProvider router={router}/>
        </div>
    )
}

