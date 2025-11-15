import { createRoot } from "react-dom/client";
import "./index.css";
import { RouterProvider } from "react-router-dom";

import { router } from "./Routers/Routes.jsx";
import { ProductApi } from "./Context/ProductContext.jsx";
import { CartApi } from "./Context/CartContext.jsx";
import { AuthApi } from "./Context/AuthContext.jsx";
import { ProfileApi } from "./Context/ProfileContext.jsx";
import { HomeApi } from "./Context/HomeContext.jsx";
import { OrderContextApi } from "./Context/OrderContext.jsx";

createRoot(document.getElementById("root")).render(
  <HomeApi>
    <ProfileApi>
      <ProductApi>
        <CartApi>
          <AuthApi>
            <OrderContextApi>
              <RouterProvider router={router} />
            </OrderContextApi>
          </AuthApi>
        </CartApi>
      </ProductApi>
    </ProfileApi>
  </HomeApi>
);
