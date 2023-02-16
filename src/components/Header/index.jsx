import { NavBar } from '../common'
import { ModalSearch, ModalShoppingCart } from '../layout'

const Header = () => {
  return (
    <div className="header">
      <ModalSearch />
      <ModalShoppingCart />
      <NavBar />
    </div>
  );
}

export { Header }