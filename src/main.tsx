import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./assets/styles/index.css";
import { AppProvider } from "./Context.tsx/ProductContext";
import { FilterProvider } from "./Context.tsx/FilterContext";
import { CartProvider } from "./Context.tsx/CartContext";
import { Auth0Provider } from "@auth0/auth0-react";



ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(



  <Auth0Provider
    domain="dev-0pgzqotfil3awhzy.us.auth0.com"
    clientId="szNFqT72YY9bRTnJwgPt1ZdRODYIMPcU"
    authorizationParams={{
      redirect_uri: window.location.origin,
    }}
  >
    <React.StrictMode>
      <AppProvider>
        <FilterProvider>
          <CartProvider>
            <App />
          </CartProvider>
        </FilterProvider>
      </AppProvider>
    </React.StrictMode>
  </Auth0Provider>
);
