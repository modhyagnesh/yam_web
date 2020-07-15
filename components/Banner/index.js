import Link from 'next/link';
import PropTypes from 'prop-types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMarkdown from '@hooks/useMarkdown';
import Skeleton from './banner.skeleton';
import './banner.module.css';
import '../markdown.module.css';

const Banner = ({ data }) => {
  const { HTML } = useMarkdown(data?.content);

  if (!data) return <Skeleton />;
  return (
    <section
      id="home-box"
      className="home-banner-01"
      style={{
        backgroundImage: `url(${data?.backgroundMedia.url.replace(
          'upload/',
          'upload/f_auto,q_70/',
        )})`,
      }}
    >
      <div className="container">
        <div className="row full-screen align-items-center justify-content-center text-center">
          <div className="col col-md-12 col-lg-6 p-80px-tb">
            <div className="home-text-center">
              <div className="markdown" dangerouslySetInnerHTML={{ __html: HTML }} />
              <div className="btn-bar">
                <Choose>
                  <When condition={!!data.buttonText && !data?.resume}>
                    <Link href={data.buttonLink}>
                      <a className="m-btn m-btn-theme" aria-label={data.buttonText} download>
                        {data.buttonText}
                        <FontAwesomeIcon icon="arrow-right" />
                      </a>
                    </Link>
                  </When>
                  <When condition={!!data.buttonText && !!data?.resume}>
                    <a
                      className="m-btn m-btn-theme"
                      aria-label={data.buttonText}
                      target="_blank"
                      rel="noreferrer nooper"
                      href={data.buttonLink}
                      download={data.resume.name}
                    >
                      {data.buttonText}
                      <FontAwesomeIcon icon="arrow-right" />
                    </a>
                  </When>
                  <Otherwise>
                    <></>
                  </Otherwise>
                </Choose>
              </div>
            </div>
            {/*  home-text-center */}
          </div>
          {/*  col */}
        </div>
      </div>
      {/*  container */}
      <a href="#aboutus" data-scroll="smooth" className="mouse-icon hidden-sm" aria-label="wheel">
        <span className="wheel" />
      </a>
    </section>
  );
};

Banner.propTypes = {
  data: PropTypes.shape({
    banner_text: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    backgroundMedia: PropTypes.shape({
      url: PropTypes.string,
    }),
    content: PropTypes.string,
  }).isRequired,
};

export default Banner;
