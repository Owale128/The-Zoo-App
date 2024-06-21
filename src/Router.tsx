import { createBrowserRouter } from "react-router-dom";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { AnimalsApp } from "./pages/AnimalsApp";
import { AnimalDetail } from "./pages/AnimalDetail";
import { NotFound } from "./pages/NotFound";



export const router = createBrowserRouter([
{

    path: '/',
    element: <Layout />,
    children: [
        {
            path: '/',
            element: <Home />
        },
        {
            path: '/animals',
            element: <AnimalsApp />
        },
        {
            path: '/animal/:id',
            element: <AnimalDetail />
        }
    ],
    errorElement: <NotFound />
    }


])