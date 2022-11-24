import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import CategoryCourses from "../../Pages/CategoryCourses/CategoryCourses";
import AddProduct from "../../Pages/Dashbaord/AddProduct";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import Registration from "../../Pages/Registration/Registration";

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/registration',
                element: <Registration></Registration>
            },
            {
                path: '/categories/:id',
                element: <CategoryCourses></CategoryCourses>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }, 
        ]
    },
    {
        path: '/dashbaord',
        element: <DashboardLayout></DashboardLayout>,
        children: [
            {
                path: '/dashbaord/addproduct',
                element: <AddProduct></AddProduct>
            },
            {
                path: '/dashbaord/myorders',
                element: <MyOrders></MyOrders>
            }
        ]
    }
])