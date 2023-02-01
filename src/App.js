import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Footer, ModalSearch, ItemDetailContainer } from "./components"
import { FaqPage, GuiaTalles, Historia, Home, ListProducts, PoliticasPrivacidad, ShoppingCart, TerminosCondiciones, Checkout } from "./pages"

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<ShoppingCart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/products" element={<ListProducts />} />
        {/* <Route path="/products/:id" element={<ItemDetailContainer />} /> */}
        <Route path="/faq" element={<FaqPage />} />
        <Route path="/historia" element={<Historia />} />
        <Route path="/talles" element={<GuiaTalles />} />
        <Route path="/terminos" element={<TerminosCondiciones />} />
        <Route path="/privacidad" element={<PoliticasPrivacidad />} />
        <Route path="/modalsearch" element={<ModalSearch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}