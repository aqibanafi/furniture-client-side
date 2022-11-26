import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import AllReports from "../../Pages/AllReports/AllReports";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryCourses from "../../Pages/CategoryCourses/CategoryCourses";
import AddProduct from "../../Pages/Dashbaord/AddProduct";
import EditProduct from "../../Pages/EditProduct/EditProduct";
import Advertise from "../../Pages/Home/Advertise";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import MyWishList from "../../Pages/MyWishList/MyWishList";
import PaymentForm from "../../Pages/PaymentForm/PaymentForm";
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
                path: '/advertise',
                element: <Advertise></Advertise>
            },
            {
                path: '/categories/:id',
                element: <CategoryCourses></CategoryCourses>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            }
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
            },
            {
                path: '/dashbaord/myproducts',
                element: <MyProducts></MyProducts>
            },
            {
                path: '/dashbaord/allbuyers',
                element: <AllBuyers></AllBuyers>
            },
            {
                path: '/dashbaord/allsellers',
                element: <AllSellers></AllSellers>
            },
            {
                path: '/dashbaord/mywishlist/',
                element: <MyWishList></MyWishList>
            },
            {
                path: '/dashbaord/reports/',
                element: <AllReports></AllReports>
            },
            {
                path: '/dashbaord/editproduct/',
                element: <EditProduct></EditProduct>
            },
            {
                path: '/dashbaord/allproducts',
                element: <AllProducts></AllProducts>
            },
            {
                path: '/dashbaord/payment/:id',
                element: <PaymentForm></PaymentForm>,
                loader: ({params}) => fetch(`http://localhost:5000/bookings/${params.id}`)
            }
        ]
    }
])