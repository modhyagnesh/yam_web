/* eslint-disable react/no-unescaped-entities */

import PropTypes from 'prop-types';

import classNames from 'classnames';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import useMarkdown from '@hooks/useMarkdown';
import './markdown.module.css';

const About = ({ data }) => {
  const { HTML } = useMarkdown(data.content);
  return (
    <section id="aboutus" className="section p-0px-b">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div
              className={classNames('about-left', 'markdown')}
              dangerouslySetInnerHTML={{ __html: HTML }}
            />
            <div className="about-left">
              <a className="m-btn m-btn-theme" href={data.buttonLink}>
                {data.buttonText} <FontAwesomeIcon icon="arrow-right" />
              </a>
            </div>
          </div>
          {/* col */}
          <div className="col-md-6 text-center sm-m-45px-t">
            <img
              src={`${process.env.NEXT_PUBLIC_STRAPI_API_URL}${data.profilePicture.url}`}
              title=""
              alt=""
            />
          </div>
          {/* col */}
        </div>
        {/* row */}
      </div>
      {/* container */}
    </section>
  );
};

About.propTypes = {
  data: PropTypes.shape({
    content: PropTypes.string,
    buttonText: PropTypes.string,
    buttonLink: PropTypes.string,
    profilePicture: PropTypes.shape({
      url: PropTypes.string,
    }),
  }).isRequired,
};

export default About;
