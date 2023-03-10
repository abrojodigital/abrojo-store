import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Header, Footer, ModalSearch, ProtectedRoute, Login, Register } from "./components"
import {
  FaqPage,
  GuiaTalles,
  Historia,
  Home,
  ListProducts,
  PoliticasPrivacidad,
  ShoppingCart,
  TerminosCondiciones,
  Checkout,
  ContactPage,
  ItemDetail
} from "./pages"

import { AuthProvider } from "./context/AuthContext"

export default function App() {
  return (
    <AuthProvider>
      <ShoppingCartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/login" element={<Login />} />
            <Route path="/checkout" element={
              <ProtectedRoute>
                <Checkout />
              </ProtectedRoute>
            } />
            <Route path="/register" element={<Register />} />
            <Route path="/products" element={<ListProducts />} />
            <Route path="/item/:id" element={<ItemDetail />} />
            <Route path="/products/category/:catId" element={<ListProducts />} />
            <Route path="/faq" element={<FaqPage />} />
            <Route path="/historia" element={<Historia />} />
            <Route path="/talles" element={<GuiaTalles />} />
            <Route path="/terminos" element={<TerminosCondiciones />} />
            <Route path="/privacidad" element={<PoliticasPrivacidad />} />
            <Route path="/modalsearch" element={<ModalSearch />} />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
          <Footer />
        </BrowserRouter>
      </ShoppingCartProvider>
    </AuthProvider>
  )
}
