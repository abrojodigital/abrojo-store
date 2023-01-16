import NavBar from './NavBar'
import ModalSearch from './modals/ModalSearch';
import ModalShoppingCart from './modals/ModalShoppingCart';
import ModalSideBar from './modals/ModalSideBar';


function Header() {
  return (
    <div className="header">

      {/* <ModalNewsLetterHz />
      <ModalNewsLetterVl />
      <ModalPassReset />
      <ModalProduct /> */}

      <ModalSearch />
      <ModalShoppingCart />
      <ModalSideBar />
      {/* <ModalSizeChart />
      <ModalWaitList /> */}
      <NavBar />
    </div>
  );
}

export default Header;