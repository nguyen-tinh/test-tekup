import NavBar from './NavBar'
import Footer from './Footer'
import MenuNavBar from '../MenuNavBar';
import { useState } from 'react';

function Layout({ children }) {
  const [menuisShow, setMenuIsShow] = useState(false)

  const showMenuHandler = () => {
    setMenuIsShow(true)
  }

  const hideMenuHandler = () => {
    setMenuIsShow(false)
  }


  return (
    <div className='container-2xl px-4 sm:px-8 lg:px-16 overflow-hidden'>
      {menuisShow && <MenuNavBar onClose={hideMenuHandler} />}
      <NavBar onShowMenu={showMenuHandler} />

      <main className="container mx-auto mb-12">{children}</main>

      <Footer onC />
    </div>
  );
}

export default Layout;
