import NavBar from '../common/NavBar'
import ModalSearch from '../layout/ModalSearch';
import ModalShoppingCart from '../layout/ModalShoppingCart';
import ModalSideBar from '../layout/ModalSideBar';

function Header() {
  return (
    <div className="header">
      <ModalSearch />
      <ModalShoppingCart />
      <ModalSideBar />
      <NavBar />
    </div>
  );
}

export default Header;