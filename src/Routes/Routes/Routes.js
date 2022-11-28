import { createBrowserRouter } from "react-router-dom";
import DashboardLayout from "../../layout/DashboardLayout/DashboardLayout";
import Main from "../../layout/Main";
import AllBuyers from "../../Pages/AllBuyers/AllBuyers";
import AllProducts from "../../Pages/AllProducts/AllProducts";
import AllReports from "../../Pages/AllReports/AllReports";
import AllSellers from "../../Pages/AllSellers/AllSellers";
import Blogs from "../../Pages/Blogs/Blogs";
import CategoryCourses from "../../Pages/CategoryCourses/CategoryCourses";
import Contact from "../../Pages/Contact/Contact";
import AddProduct from "../../Pages/Dashbaord/AddProduct";
import EditProduct from "../../Pages/EditProduct/EditProduct";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Advertise from "../../Pages/Home/Advertise";
import Home from "../../Pages/Home/Home";
import Login from "../../Pages/Login/Login";
import Message from "../../Pages/Message/Message";
import MyOrders from "../../Pages/MyOrders/MyOrders";
import MyProducts from "../../Pages/MyProducts/MyProducts";
import MyWishList from "../../Pages/MyWishList/MyWishList";
import PaymentForm from "../../Pages/PaymentForm/PaymentForm";
import PostReview from "../../Pages/PostReview/PostReview";
import Registration from "../../Pages/Registration/Registration";
import AdminRoute from "../AdminRoute/AdminRoute";
import BuyerRoute from "../BuyerRoute/BuyerRoute";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import SellerRoute from "../SellerRoute/SellerRoute";

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
                element: <PrivateRoutes><CategoryCourses></CategoryCourses></PrivateRoutes>,
                loader: ({ params }) => fetch(`http://localhost:5000/categories/${params.id}`)
            },
            {
                path: '/blogs',
                element: <Blogs></Blogs>
            },
            {
                path: '/postreview',
                element: <PostReview></PostReview>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/*',
                element: <ErrorPage></ErrorPage>
            }
        ]
    },
    {
        path: '/dashbaord',
        element: <PrivateRoutes><DashboardLayout></DashboardLayout></PrivateRoutes>,
        children: [
            {
                path: '/dashbaord/addproduct',
                element: <SellerRoute><AddProduct></AddProduct></SellerRoute>
            },
            {
                path: '/dashbaord/myorders',
                element: <BuyerRoute><MyOrders></MyOrders></BuyerRoute>
            },
            {
                path: '/dashbaord/myproducts',
                element: <SellerRoute><MyProducts></MyProducts></SellerRoute>
            },
            {
                path: '/dashbaord/allbuyers',
                element: <AdminRoute><AllBuyers></AllBuyers></AdminRoute>
            },
            {
                path: '/dashbaord/allsellers',
                element: <AdminRoute><AllSellers></AllSellers></AdminRoute>
            },
            {
                path: '/dashbaord/mywishlist/',
                element: <BuyerRoute><MyWishList></MyWishList></BuyerRoute>
            },
            {
                path: '/dashbaord/reports/',
                element: <AdminRoute><AllReports></AllReports></AdminRoute>
            },
            {
                path: '/dashbaord/editproduct/',
                element: <SellerRoute><EditProduct></EditProduct></SellerRoute>
            },
            {
                path: '/dashbaord/allproducts',
                element: <AdminRoute><AllProducts></AllProducts></AdminRoute>
            },
            {
                path: '/dashbaord/payment/:id',
                element: <BuyerRoute><PaymentForm></PaymentForm></BuyerRoute>,
                loader: ({ params }) => fetch(`http://localhost:5000/bookings/${params.id}`)
            },
            {
                path: '/dashbaord/message',
                element: <Message></Message>
            }
        ]
    }
])