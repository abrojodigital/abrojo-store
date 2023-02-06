import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { NavBar } from '../common'
import { ModalSearch, ModalShoppingCart } from '../layout'
import arrProducts from "../../Data/products.json"

const Header = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setisLoading] = useState(true);

  useEffect(()=>{
    const promesa = new Promise((res) => {
      setTimeout(() => {
        res(arrProducts)
      }, 500)
    })
    promesa
      .then(data => setProducts(data))
      .then( _ => setisLoading(false))
    }, [] )
  return (
    <div className="header">
    {
      !isLoading ?
      <>
      <ModalSearch products = {products} />
      <ModalShoppingCart products = {products} />
      </>
      :
      <Spinner />
    }
      <NavBar />
    </div>
  );
}

export {Header}