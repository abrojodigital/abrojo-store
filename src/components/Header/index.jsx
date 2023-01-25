import { NavBar } from '../common'
import { ModalSearch, ModalShoppingCart, ModalSideBar } from '../layout';

function Header({products}) {
  return (
    <div className="header">
      <ModalSearch products = {products} />
      <ModalShoppingCart products = {products} />
      <ModalSideBar />
      <NavBar />
    </div>
  );
}

export {Header}