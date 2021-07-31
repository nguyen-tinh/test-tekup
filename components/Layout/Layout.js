import NavBar from './NavBar'
import Footer from './Footer'

function Layout({ children }) {
  return (

    <div className='container-2xl'>
      <NavBar />

      <main className="container mx-auto mb-12">{children}</main>

      <Footer />
    </div>

  );
}

export default Layout;
