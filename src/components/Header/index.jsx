import { useState, useEffect } from 'react';
import { Spinner } from 'react-bootstrap';
import { NavBar } from '../common'
import { ModalSearch, ModalShoppingCart } from '../layout';
import { productsService } from '../../utils';

function Header() {
  const [products, setProducts] = useState([])
  const [isLoading, setisLoading] = useState(true);

  useEffect(()=>{
    productsService.getAll().then( data => setProducts(data)).then(_ => setisLoading(false))
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