import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { ShoppingCartProvider } from "./context/ShoppingCartContext"
import { Header, Footer, ModalSearch } from "./components"
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

export default function App() {
  return (
      <ShoppingCartProvider>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<ShoppingCart />} />
            <Route path="/checkout" element={<Checkout />} />
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
  )
}
