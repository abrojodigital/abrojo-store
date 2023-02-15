import { useState, useEffect } from 'react'
import { Spinner } from 'react-bootstrap'
import { productsService } from '../../services/Products'
import { NavBar } from '../common'
import { ModalSearch, ModalShoppingCart } from '../layout'

const Header = () => {
  const [products, setProducts] = useState([])
  const [isLoading, setisLoading] = useState(true);

  useEffect(() => {
    productsService.getAll()
      .then(data => setProducts(data))
      .then(_ => setisLoading(false))
  }, [])

  return (
    <div className="header">
    {
      !isLoading ?
      <>
      <ModalSearch products = {products} />
      <ModalShoppingCart />
      </>
      :
      <Spinner />
    }
      <NavBar />
    </div>
  );
}

export {Header}