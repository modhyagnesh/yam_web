import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import markdownStyles from './markdown.module.css';

/* eslint-disable react/no-unescaped-entities */
const Banner = ({ data }) => {
  return (
    <section
      id="home-box"
      className="home-banner-01"
      style={{
        backgroundImage: `url(${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.background_image.url})`,
      }}
    >
      <div className="container">
        <div className="row full-screen align-items-center justify-content-center text-center">
          <div className="col col-md-12 col-lg-6 p-80px-tb">
            <div className="home-text-center">
              <div
                className={markdownStyles.markdown}
                dangerouslySetInnerHTML={{ __html: data.content }}
              />
              <div className="btn-bar">
                <a className="m-btn m-btn-theme" href={data.button_link}>
                  {data.button_text} <FontAwesomeIcon icon="arrow-right" />
                </a>
              </div>
            </div>
            {/*  home-text-center */}
          </div>
          {/*  col */}
        </div>
      </div>
      {/*  container */}
      <a href="#aboutus" data-scroll="smooth" className="mouse-icon hidden-sm">
        <span className="wheel" />
      </a>
    </section>
  );
};

Banner.propTypes = {
  data: PropTypes.shape({
    banner_text: PropTypes.string,
    button_text: PropTypes.string,
    button_link: PropTypes.string,
    background_image: PropTypes.shape({
      url: PropTypes.string,
    }),
    content: PropTypes.string,
  }).isRequired,
};

export default Banner;
