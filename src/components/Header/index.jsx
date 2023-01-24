import NavBar from '../common/NavBar'
import ModalSearch from '../layout/ModalSearch';
import ModalShoppingCart from '../layout/ModalShoppingCart';
import ModalSideBar from '../layout/ModalSideBar';

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

export default Header;