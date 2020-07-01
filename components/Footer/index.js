/* eslint-disable jsx-a11y/anchor-is-valid */
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './footer.module.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-logo">
          <span>
            Yagnesh <span />
          </span>
        </div>
        <ul className="social-icons">
          <li>
            <a href="#" aria-label="facebook">
              {/* <FontAwesomeIcon icon={['fab', 'facebook-f']} /> */}
            </a>
          </li>
          <li>
            <a href="#" aria-label="twitter">
              {/* <FontAwesomeIcon icon={['fab', 'twitter']} /> */}
            </a>
          </li>
          <li>
            <a href="#" aria-label="instagram">
              {/* <FontAwesomeIcon icon={['fab', 'instagram']} /> */}
            </a>
          </li>
          <li>
            <a href="#" aria-label="codepen">
              {/* <FontAwesomeIcon icon={['fab', 'codepen']} /> */}
            </a>
          </li>
          <li>
            <a href="#" aria-label="facebook messenger">
              {/* <FontAwesomeIcon icon={['fab', 'facebook-messenger']} /> */}
            </a>
          </li>
          <li>
            <a href="#" aria-label="github">
              {/* <FontAwesomeIcon icon={['fab', 'github-alt']} /> */}
            </a>
          </li>
          <li>
            <a href="#" aria-label="skype">
              {/* <FontAwesomeIcon icon={['fab', 'skype']} /> */}
            </a>
          </li>
        </ul>
        <p className="copyright">© 2018 Yagnesh. All Rights Reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
