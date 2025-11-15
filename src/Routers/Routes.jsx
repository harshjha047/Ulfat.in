import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";
import App from "../App";
import Home from "../Pages/Home";
import Product from "../Pages/Product";
import ProductPage from "../Pages/ProductPage";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import MyBag from "../Pages/MyBag.jsx";
import OTPvalidation from "../Components/Reusable/OTPvalidation";
import Settings from "../Pages/Settings.jsx";
import ProfileOverview from "../Components/Settings/ProfileOverview.jsx";
import Wishlist from "../Components/Settings/Wishlist.jsx";
import Addresses from "../Components/Settings/Addresses.jsx";
import ContectUs from "../Pages/ContectUs.jsx";
import Order from "../Pages/Order.jsx";
import OrderSummreInformation from "../Components/Order/OrderSummreInformation.jsx";
import OrderStatus from "../Components/Settings/OrderStatus.jsx";
import NathingInCart from "../Components/Cart/NathingInCart.jsx";
import OrderSuccess from "../Components/Order/OrderSuccess.jsx";
import PrivateRouter from "./PrivateRouter.jsx";
import PublicRouter from "./PublicRouter.jsx";
import ForgetPasswordEmail from "../Components/Reusable/ForgetPasswordEmail.jsx";
import ResetPassword from "../Components/Reusable/ResetPassword.jsx";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />}></Route>
      <Route path="/product" element={<Product />}></Route>
      <Route path="context" element={<ContectUs />}></Route>
      <Route path="product/Item/:ProductId" element={<ProductPage />}></Route>
      <Route element={<PublicRouter />}>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/auth/account/validation" element={<OTPvalidation />}></Route>
        <Route path="/auth/account/reset/validation" element={<OTPvalidation />}></Route>
        <Route path="/auth/account/forgetpassword" element={<ForgetPasswordEmail />}></Route>
        <Route path="/auth/account/reset/create" element={<ResetPassword />}></Route>
        <Route path="/register" element={<Register />}></Route>
      </Route>
      <Route element={<PrivateRouter />}>
        <Route path="/cart" element={<MyBag />}></Route>
        <Route path="/nothingincart" element={<NathingInCart />}></Route>
        <Route path="/order" element={<Order />}></Route>
        <Route path="/ordersuccess" element={<OrderSuccess />}></Route>
        <Route path="/ordersum" element={<OrderSummreInformation />}></Route>
        <Route path="/settings" element={<Settings />}>
          <Route path="" element={<ProfileOverview />}></Route>
          <Route path="wishlist" element={<Wishlist />}></Route>
          <Route path="addresses" element={<Addresses />}></Route>
          <Route path="orderstatus" element={<OrderStatus />}></Route>
        </Route>
      </Route>
    </Route>
  )
);
