import { RouteObject } from "react-router-dom"
import Main from "../layout/main"
import Index from '../pages/index';
import Login from "../pages/login";
import About from "../pages/about";
import Admin from "../pages/admin";
import Cart from "../pages/cart";
import Category from "../pages/category";
import Search from "../pages/search";

const route: RouteObject[] = [
    {
        path: "/",
        element: <Main />,
        children: [
            {
                index: true,
                element: <Index />,
            },
            {
                path: 'login',
                element: <Login />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'admin',
                element: <Admin />
            },
            {
                path: 'cart',
                element: <Cart />
            },
            {
                path: 'category/:category',
                element: <Category />
            },
            {
                path: 'search/:search',
                element: <Search />
            }
        ]
    },
]

export default route