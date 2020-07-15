import PropTypes from 'prop-types';
import { SWRConfig } from 'swr';
import '@styles/index.css';
import 'lazysizes';
// import a plugin
import 'lazysizes/plugins/parent-fit/ls.parent-fit';
import fetch from '@lib/fetch';
import Layout from '@components/layout';
import { library } from '@fortawesome/fontawesome-svg-core';
// import '@fortawesome/fontawesome-svg-core/styles.css'; // Import the CSS
import 'bootstrap/dist/css/bootstrap.min.css';

import {
  faChalkboardTeacher,
  faMobileAlt,
  faLaptopCode,
  faCode,
  faServer,
  faGlobe,
  faPlay,
  faExpand,
  faCompress,
  faLink,
  faTimes,
  faArrowRight,
  faCircle,
  faChevronRight,
  faChevronLeft,
  faStar,
  faStarHalfAlt,
  faEnvelope,
  faDirections,
} from '@fortawesome/free-solid-svg-icons';

import { faStar as faStartAlt } from '@fortawesome/free-regular-svg-icons';

import {
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithubAlt,
  faSkype,
  faYoutube,
  faLinkedin,
  faWhatsapp,
} from '@fortawesome/free-brands-svg-icons';

library.add(
  faStar,
  faStartAlt,
  faStarHalfAlt,
  faCircle,
  faArrowRight,
  faLinkedin,
  faGlobe,
  faLink,
  faServer,
  faChalkboardTeacher,
  faLaptopCode,
  faCode,
  faMobileAlt,
  faFacebookF,
  faTwitter,
  faInstagram,
  faGithubAlt,
  faSkype,
  faYoutube,
  faPlay,
  faCompress,
  faExpand,
  faTimes,
  faChevronRight,
  faChevronLeft,
  faWhatsapp,
  faEnvelope,
  faDirections,
);

// config.autoAddCss = false; // Tell Font Awesome to skip adding the CSS automatically since it's being imported above

const MyApp = ({ Component, pageProps }) => {
  const { WhiteHeader } = Component;

  return (
    <SWRConfig
      value={{
        fetcher: fetch,
      }}
    >
      <Layout whiteHeader={!!WhiteHeader}>
        <Component {...pageProps} />
      </Layout>
    </SWRConfig>
  );
};

MyApp.propTypes = {
  Component: PropTypes.func.isRequired,
  pageProps: PropTypes.object.isRequired,
};

export default MyApp;
