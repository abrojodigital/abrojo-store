import * as React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { Header, Footer, ModalSearch } from "./components"
import { FaqPage, GuiaTalles, Historia, Home, ListProducts, PoliticasPrivacidad, ShoppingCart, TerminosCondiciones, Checkout } from "./pages"

export default function App() {

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/cart" element={<ShoppingCart />} />
        <Route exact path="/checkout" element={<Checkout />} />
        <Route exact path="/listproducts" element={<ListProducts />} />
        <Route exact path="/faq" element={<FaqPage />} />
        <Route exact path="/historia" element={<Historia />} />
        <Route exact path="/talles" element={<GuiaTalles />} />
        <Route exact path="/terminos" element={<TerminosCondiciones />} />
        <Route exact path="/privacidad" element={<PoliticasPrivacidad />} />
        <Route exact path="/modalsearch" element={<ModalSearch />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  )
}