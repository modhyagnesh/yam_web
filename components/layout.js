import PropTypes from 'prop-types';

import Meta from './meta';
// import Loading from './Loading';
import Header from './Header';
import Footer from './Footer';

const Layout = ({ children, whiteHeader }) => {
  return (
    <>
      <Meta />
      <Header whiteHeader={whiteHeader} />
      <main>{children}</main>
      <Footer />
    </>
  );
};

Layout.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element).isRequired,
  whiteHeader: PropTypes.bool,
};

Layout.defaultProps = {
  whiteHeader: true,
};

export default Layout;
